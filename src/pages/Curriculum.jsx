import React from 'react'
import CurriculumSection from '../components/CurriculumSection'
import YoungLeaders from '../components/YoungLeaders'
import MentorsGuests from '../components/MentorsGuests'
import RecruitmentSection from '../components/RecruitmentSection'
import WhyBecomeExport from '../components/WhyBecomeexport'
import EsportsCTA from '../components/EsportsCTA'



function Curriculum() {
  return (
    <div>
      <CurriculumSection/>
      <YoungLeaders/>
      <MentorsGuests/>
      <RecruitmentSection/>
      <WhyBecomeExport/>
      <EsportsCTA/>
    </div>
  )
}

export default Curriculum
