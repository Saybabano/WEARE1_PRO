import React from 'react'
import ExploreAacademy from '../components/ExploreAcademy'
import FAQSection from '../components/FAQSection'
import PGPRiseSection from '../components/PGPRiseSectio'
import HighlightsPage from './HighlightsPage'

function HomePage() {
  return (
   <>
    <div>
        <PGPRiseSection/>
        <HighlightsPage/>
        <FAQSection/>
        <ExploreAacademy/>
    </div>
   </>
  )
}

export default HomePage
