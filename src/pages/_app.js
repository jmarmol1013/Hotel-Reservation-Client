import '@/styles/globals.css'
import { NavBar } from '../../components/NavBar/NavBar'
import { AuthProvider } from '../../context/AuthContext'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
        <NavBar/>
        <Component {...pageProps} />
    </AuthProvider> 
  )
}
