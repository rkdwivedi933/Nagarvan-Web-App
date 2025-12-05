import React from 'react'
import ExploreAttractionsHero from '../comopents/attractions/ExploreAttractionsHero'
import GrandEntryPoint from '../comopents/attractions/GrandEntryPoint'
import WalkingTrailsSection from '../comopents/attractions/WalkingSection'
import GreenSittingAreas from '../comopents/attractions/GreenSittingAreas'
import FoodZoneRestaurant from '../comopents/attractions/FoodZoneRestaurant'
import KidsPlayground from '../comopents/attractions/KidsPlayground'
import SynthesisParkSection from '../comopents/attractions/SynthesisParkSection'
import BhimaLakeSection from '../comopents/attractions/BhimaLakeSection'
import SelfiePointsSection from '../comopents/attractions/SelfiePointsSection'
import MeditationHutsSection from '../comopents/attractions/MeditationHutsSection'
import RestingZoneSection from '../comopents/attractions/RestingZoneSection '
import AttractionBackground from '../comopents/layout/AttractionBackground'
import BackgroundWrapper from '../comopents/layout/BackgroundWrapper'

function Attraction() {
  return (
    <div>
      <BackgroundWrapper>

      <ExploreAttractionsHero/>
      <GrandEntryPoint/>
      <WalkingTrailsSection/>
      <GreenSittingAreas/>
      <FoodZoneRestaurant/>
      <KidsPlayground/>
      <SynthesisParkSection/>
      <BhimaLakeSection/>
      <SelfiePointsSection/>
      <MeditationHutsSection/>
      <RestingZoneSection/>
      </BackgroundWrapper>

      
    </div>
  )
}

export default Attraction
