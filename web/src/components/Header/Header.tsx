import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      bg={`whiteAlpha.400`}
      backdropBlur="10px"
      backdropFilter="auto"
      px="4"
      boxShadow="lg"
      position="fixed"
      width="100%"
      zIndex={55}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        w={[`90%`, `85%`, '80%']}
        maxW={800}
        mx="auto"
      >
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label={`Open Menu`}
          display={[`inherit`, `inherit`, `none`]}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <Link to={routes.home()}>
              <Avatar
                size="sm"
                src="https://avatars.githubusercontent.com/u/30037764?v=4"
              />
            </Link>
          </Box>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          ></HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box
          pb={4}
          w={['100%', '100%', '80%']}
          maxW={800}
          display={['inherit', 'inherit', 'none']}
        >
          <Stack as="nav" spacing={4}>
            <Link to={routes.about()}>About</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Header
