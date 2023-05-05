import { Inter } from 'next/font/google'
import { NavBar } from '../../components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <h1>Welcome to Hotel Reservation App</h1>
    </main>
  )
}
