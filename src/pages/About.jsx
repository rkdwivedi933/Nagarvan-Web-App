import React from 'react'
import HeroSection from '../comopents/about/HeroSection'
import BackgroundWrapper from '../comopents/layout/BackgroundWrapper'
import OriginVisionSection from '../comopents/about/OriginVisionSection'
import EnvironmentalCommitments from '../comopents/about/EnvironmentalCommitments'
import GovernmentMessage from '../comopents/about/GovernmentMessage'
import LeadershipTeam from '../comopents/about/LeadershipTeam'

function About() {
  return (
    <div>
      <BackgroundWrapper>

      <HeroSection/>
      <OriginVisionSection/>
      <EnvironmentalCommitments/>
      
      <GovernmentMessage/>
      <LeadershipTeam/>
      </BackgroundWrapper>
    </div>
  )
}

export default About
