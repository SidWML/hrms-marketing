import Image from 'next/image'
import { Inter, Montserrat } from 'next/font/google'
import HRMLayout from '@/components/layouts/HRMLayout'
import SectionOne from '@/components/homepage/SectionOne'
import Homepage from '@/components/homepage/Homepage'

export const inter = Inter({ subsets: ['latin'] })
export const montserrat = Montserrat({subsets:["latin"], weight:["100","200","300","400","500","600","700","800","900"]})
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
