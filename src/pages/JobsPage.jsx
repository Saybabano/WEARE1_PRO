import React from 'react'
import MissionVision from '../components/MissionVision'
import ChangemakersSection from '../components/ChangemakersSection'
import ExploreJob from '../components/ExploreJob'
import WhyJoinUs from '../components/WhyJoinUs'
import ExploreJobOpening from '../components/ExploreJobOpening'
import ExploreAacademy from '../components/ExploreAcademy'

function JobsPage() {
  return (
    <div>
      <ExploreJob/>
      <WhyJoinUs/>
      <MissionVision/>
      <ChangemakersSection/>
      <ExploreJobOpening/>
      <ExploreAacademy/>
    </div>
  )
}

export default JobsPage
