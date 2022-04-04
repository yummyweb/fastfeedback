import { ThemeProvider, CSSReset } from '@chakra-ui/react'
import theme from '@/styles/theme'
import { AuthProvider } from '../lib/auth'
import { Global, css } from '@emotion/react'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <CSSReset />
                <Global
                    styles={css`
                        #__next {
                            display: flex;
                            flex-direction: column;
                            min-height: 100vh;
                        }
                    `}
                />
                <Component {...pageProps} />
            </AuthProvider>
        </ThemeProvider>
    )
}

export default MyApp
