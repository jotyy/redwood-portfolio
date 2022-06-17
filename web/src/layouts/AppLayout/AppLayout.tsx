import { Box } from '@chakra-ui/react'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

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
    </>
  )
}

export default AppLayout
