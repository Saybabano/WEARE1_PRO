import React from 'react'
import OverviewWeare1 from '../components/OverviewWeare1'
import StudentWeare1 from '../components/StudentWeare1'
import LifeAtWeare1 from '../components/LifeAtWeare1'
import LeadershipPage from '../components/LeadershipPage'
import Mentor from '../components/Mentor'
import Learn from '../components/Learn'

function HighlightsPage() {
  return (
    <>
        <div>
            <OverviewWeare1/>
            <LifeAtWeare1/>
            <LeadershipPage/>
            <Learn/>
            <Mentor/>
            <StudentWeare1/>
        </div>
    </>
  )
}

export default HighlightsPage
