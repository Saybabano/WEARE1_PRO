import React from 'react'
import ExploreAacademy from '../components/ExploreAcademy'
import FAQSection from '../components/FAQSection'
import WhyBecomeExport from '../components/WhyBecomeexport'
import NumbersStats from '../components/NumbersStats'
import ExportCategories from '../components/ExportCategories'
import BecameExport from '../components/BecameExport'

function BecomeExportPage() {
  return (
    <div>
      <BecameExport/>
      <WhyBecomeExport/>
      <NumbersStats/>
      <ExportCategories/>
      <FAQSection/>
      <ExploreAacademy/>
    </div>
  )
}

export default BecomeExportPage
