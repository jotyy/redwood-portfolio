import { MetaTags } from '@redwoodjs/web'
import CompaniesCell from 'src/components/CompaniesCell'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <CompaniesCell />
    </>
  )
}

export default AboutPage
