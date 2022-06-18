import { Box } from '@chakra-ui/react'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import { MotionBox } from 'src/components/ui/motion'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <Box fontSize="xl" w={['90%', '85%', '80%']} maxW={800} mx="auto">
        <Box pt="7rem" pb={10} minH="calc(100vh - 64px)">
          {children}
        </Box>
      </Box>
      <Footer />
      <MotionBox
        w="72"
        h="72"
        bg="pink.300"
        rounded="full"
        position="absolute"
        top="4"
        left="20"
        mixBlendMode="multiply"
        filter="auto"
        blur="2xl"
        opacity="50%"
        transition={{
          yoyo: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
      />
      <MotionBox
        w="72"
        h="72"
        bg="purple.300"
        rounded="full"
        position="absolute"
        bottom="8"
        right="20"
        mixBlendMode="multiply"
        filter="auto"
        blur="2xl"
        opacity="50%"
        transition={{
          yoyo: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
      ></MotionBox>
    </>
  )
}

export default AppLayout
