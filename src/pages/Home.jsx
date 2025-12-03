import HeroSection from '../comopents/home/HeroSection'
import InfoSection from '../comopents/home/InfoSection'
import AttractionsSection from '../comopents/home/AttractionsSection'
import FacilitiesSection from '../comopents/home/FacilitiesSection'
import BlogSection from '../comopents/home/BlogSection'
import GalleryPreview from '../comopents/home/GalleryPreview'
import VisitorExperiences from '../comopents/home/VisitorExperiences'
import PlanYourVisit from '../comopents/home/PlanYourVisit'
import QuickTipsMap from '../comopents/home/QuickTipsMap'
import BackgroundWrapper from '../comopents/layout/BackgroundWrapper'

function Home() {
  return (
    
      <>
      <HeroSection/>
      <BackgroundWrapper>

      <InfoSection/>
      <AttractionsSection/>
      <FacilitiesSection/>
      <BlogSection/>
      <GalleryPreview/>
      <VisitorExperiences/>
      <PlanYourVisit/>
      <QuickTipsMap/>
      </BackgroundWrapper>
      </>
    
  )
}

export default Home
