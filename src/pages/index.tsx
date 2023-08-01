import Image from 'next/image'
import { Acme, Bungee_Spice, Cinzel, Inter, Montserrat, Pacifico, Playfair_Display } from 'next/font/google'
import HRMLayout from '@/components/layouts/HRMLayout'
import SectionOne from '@/components/homepage/SectionOne'
import Homepage from '@/components/homepage/Homepage'
import { gsap } from 'gsap'

export const inter = Inter({ subsets: ['latin'] })
export const montserrat = Montserrat({subsets:["latin"], weight:["100","200","300","400","500","600","700","800","900"]})
export const fairPlay = Cinzel({subsets:["latin"], weight:["400"]})
export default function Home() {
  
  return (
    <main
      className={` ${inter.className}`}
    >
      <HRMLayout>
        <Homepage />
      </HRMLayout>
    </main>
  )
}
