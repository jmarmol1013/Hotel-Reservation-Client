import { Inter } from 'next/font/google'
import { BannerSection } from '../../components/Banner/BannerSection'
import { NavBar } from '../../components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <BannerSection />
    </main>
  )
}
