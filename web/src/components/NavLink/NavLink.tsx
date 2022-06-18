import { Link, useColorModeValue } from '@chakra-ui/react'
import { Link as RwLink, useLocation } from '@redwoodjs/router'

interface Props {
  index?: number
  name: string
  path: string
  onClose: () => void
}

const NavLink = ({ name, path, onClose }: Props) => {
  const location = useLocation()
  const link = {
    bg: useColorModeValue(`gray.200`, `gray.900`),
    color: useColorModeValue(`blue.500`, `blue.200`),
  }

  return (
    <Link
      px={2}
      py={1}
      as={RwLink}
      to={path}
      rounded={`md`}
      _hover={{
        textDecoration: `none`,
        bg: link.bg,
      }}
      bg={location.pathname === path ? link.bg : `transparent`}
      color={location.pathname === path ? link.color : `inherit`}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  )
}

export default NavLink
