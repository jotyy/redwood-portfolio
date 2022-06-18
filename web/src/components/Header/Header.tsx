import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { Link, routes, useLocation } from '@redwoodjs/router'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import MenuLink from '../MenuLink/MenuLink'
import NavLink from '../NavLink/NavLink'

const webLinks = [
  { name: `About`, path: `/about` },
  { name: `Blog`, path: `/blog` },
]

const mobileLinks = [
  { name: `About`, path: `/about` },
  // { name: `Open Source`, path: `/open-source` },
  { name: `Blog`, path: `/blog` },
  { name: `Tech Stack`, path: `/tech-stack` },
  { name: `Achievements`, path: `/achievements` },
]

const dropdownLinks = [
  { name: `Tech Stack`, path: `/tech-stack` },
  // { name: `Open Source`, path: `/open-source` },
  // { name: `Developer Story`, path: `/developer-story` },
  { name: `Achievements`, path: `/achievements` },
]

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useLocation()

  const menuProps = {
    bg: useColorModeValue(`gray.200`, `gray.900`),
    color: useColorModeValue(`blue.500`, `blue.200`),
  }

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
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {webLinks.map((link) => (
              <NavLink
                key={link.name}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))}
            <Menu autoSelect={false} isLazy>
              {({ onClose }) => (
                <>
                  <MenuButton>Links</MenuButton>
                  <MenuList zIndex={5}>
                    {dropdownLinks.map((link, index) => (
                      <MenuLink
                        key={index}
                        path={link.path}
                        name={link.name}
                        onClose={onClose}
                        color={menuProps.color}
                        bg={menuProps.bg}
                        rPath={router.pathname}
                      />
                    ))}
                  </MenuList>
                </>
              )}
            </Menu>
          </HStack>
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
            {mobileLinks.map((link, index) => (
              <NavLink
                key={index}
                index={index}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Header
