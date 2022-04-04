import firebase from './firebase.js'
import 'firebase/firestore'

const firestore = firebase.firestore()

export function createUser(uid, data) {
    return firestore
        .collection('users')
        .doc(uid)
        .set(
            {
                uid,
                ...data
            },
            { merge: true }
        )
}

export function createSite(data) {
    return firestore.collection('sites').add(data)
}
