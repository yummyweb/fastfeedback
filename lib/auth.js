import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from './firebase.js'
import 'firebase/auth'
import { createUser } from './db.js'

const authContext = createContext()

const formatUser = (user) => {
    return {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        provider: user.providerData[0].providerId,
        photo: user.photoURL
    }
}

export function AuthProvider({ children }) {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}

function useProvideAuth() {
    const [user, setUser] = useState(null)

    const handleUser = (rawUser) => {
        if (rawUser) {
            const user = formatUser(rawUser)
            setUser(user)
            createUser(user.uid, user)
            return user
        } else {
            setUser(false)
            return false
        }
    }

    const signinWithGithub = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {
                handleUser(response.user)
            })
    }

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                handleUser
            })
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            handleUser(user)
        })

        return () => unsubscribe()
    }, [])

    return {
        user,
        signinWithGithub,
        signout
    }
}
