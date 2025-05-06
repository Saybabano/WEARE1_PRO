import React from 'react'
import OverviewWeare1 from '../components/OverviewWeare1'
// import RecentHighlights from '../components/RecentHighlights'
import LeadershipPage from '../components/LeadershipPage'
// import MentorshipSection from '../components/MentorshipSection'
import StudentWeare1 from '../components/StudentWeare1'
import LifeAtWeare1 from '../components/LifeAtWeare1'

function HighlightsPage() {
  return (
    <>
        <div>
            <OverviewWeare1/>
            {/* <RecentHighlights/> */}
            {/* <MentorshipSection/> */}
            <LeadershipPage/>
            <StudentWeare1/>
            <LifeAtWeare1/>
        </div>
    </>
  )
}

export default HighlightsPage
