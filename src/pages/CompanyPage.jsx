import React from 'react'
import CompaniesHeroSection from '../components/CompaniesHeroSection'
import RecruitmentSection from '../components/RecruitmentSection'
import CocreateCourse from '../components/CocreateCourse'
import ContactForm from '../components/ContactForm'
import RecruiterTabsComponent from '../components/RecruiterTabsComponent'
import AlumniSpotlight from '../components/AlumniSpotlight'
import CollaborationsAffiliations from '../components/CollaborationsAffiliations'
import ProfessionalGuidens from '../components/ProfessionalGuidens'
import DynamicLearningComponent from '../components/DynamicLearningComponent'

function CompanyPage() {
  return (
    <>
        <CompaniesHeroSection/>
        <RecruitmentSection/>
        <CocreateCourse/>
        <ContactForm/>
        <RecruiterTabsComponent/>
        <AlumniSpotlight/>
        <CollaborationsAffiliations/>
        <ProfessionalGuidens/>
        <DynamicLearningComponent/>
    </>
  )
}

export default CompanyPage
