import { Box, HStack } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import CompaniesCell from 'src/components/CompaniesCell'
import InstitudesCell from 'src/components/InstitudesCell'
import Title from 'src/components/Title/Title'
import { MotionBox } from 'src/components/ui/motion'
import {
  PageSlideFade,
  StaggerChildren,
} from 'src/components/ui/page-transitions'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <PageSlideFade>
        <StaggerChildren>
          <MotionBox>
            <HStack alignItems="center">
              <Box mr={3} as={BsFillBriefcaseFill} size="25px" />
              <Title underlineColor="cyan.200">Career</Title>
            </HStack>
          </MotionBox>
          <CompaniesCell />
          <MotionBox>
            <HStack alignItems="center">
              <Box mr={3} as={FaGraduationCap} size="25px" />
              <Title underlineColor="cyan.200">Education</Title>
            </HStack>
          </MotionBox>
          <InstitudesCell />
        </StaggerChildren>
      </PageSlideFade>
    </>
  )
}

export default AboutPage
