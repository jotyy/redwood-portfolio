import { Box, Flex, Image } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'
import Heading from 'src/components/Heading/Heading'
import { MotionBox, MotionFlex } from 'src/components/ui/motion'

const ANIMATION_DURATION = 0.6

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Box w="full">
        <Flex direction={[`column`, `column`, `row`]} alignItems="center">
          <MotionBox
            w="48"
            h="48"
            p="2"
            borderRadius="full"
            borderWidth={1}
            borderColor="cyan.300"
            flexShrink={0}
            opacity="0"
            initial={{ translateX: -150, opacity: 0 }}
            animate={{
              translateX: 0,
              opacity: 1,
              transition: {
                duration: ANIMATION_DURATION,
              },
            }}
            m="auto"
            mb={[16, 16, `auto`]}
          >
            <Image
              fill="cover"
              src="https://avatars.githubusercontent.com/u/30037764?v=4"
            />
          </MotionBox>
          <MotionFlex
            ml={[`auto`, `auto`, 16]}
            m={[`auto`, `initial`]}
            w={[`90%`, `85%`, `80%`]}
            maxW="800px"
            opacity="0"
            justify="center"
            direction="column"
            initial={{
              opacity: 0,
              translateX: 150,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: ANIMATION_DURATION,
              },
            }}
          >
            <Heading underlineColor={'ogrange.300'} emoji="👋" mt={0}>
              Hey!
            </Heading>
            <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
              My name is{` `}
              <Box as="strong" fontWeight="600">
                Jotyy
              </Box>
              {` `}
              and I&apos;m a{` `}
              <Box as="span" whiteSpace="nowrap">
                Full Stack Developer and
              </Box>
              {` `}
              <Box as="span" whiteSpace="nowrap">
                a blockchain lover.&nbsp;
              </Box>
            </Box>
            <Box
              as="h3"
              fontSize="2xl"
              fontWeight="400"
              mt={5}
              textAlign="left"
            >
              This is my digital garden, where I write about the things I&apos;m
              working on and share what I&apos;ve learned. 😊
            </Box>
          </MotionFlex>
        </Flex>
      </Box>
    </>
  )
}

export default HomePage
