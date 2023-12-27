import SiteBanner from '@/components/SiteBanner'
import style from './globals.css'
import KeyLine from '@/components/KeyLine'
import LatestProjects from '@/components/LatestProjects'
import ContactComponent from '@/components/ContactComponent'
import HeroSlider from '@/components/HeroSlider'
import EngageWithUs from '@/components/EngageWithUs'

export default function Home() {
  return (
    <div className="style">
      <SiteBanner />
      <KeyLine />
      <HeroSlider />
      <EngageWithUs />
      <LatestProjects />
      <ContactComponent />
    </div>
  )
}
