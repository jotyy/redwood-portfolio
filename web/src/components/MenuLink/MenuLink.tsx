import { Icon, Link, MenuItem, Text, HStack } from '@chakra-ui/react'
import { Link as RwLink } from '@redwoodjs/router'
import { AiTwotoneThunderbolt } from 'react-icons/ai'
import { BsBook, BsCheckCircle } from 'react-icons/bs'

interface Props {
  name: string
  path: string
  color: string
  bg: string
  rPath: string
  onClose: () => void
}

const MenuLink = (props: Props) => {
  const iconsObj = {
    '/tech-stack': (
      <Icon as={AiTwotoneThunderbolt} size={18} color={props.color} />
    ),
    '/open-source': <Icon as={BsBook} size={18} color={props.color} />,
    // '/developer-story': <Icon as={MdTimeline} size={18} color={props.color} />,
    '/achievements': <Icon as={BsCheckCircle} size={18} color={props.color} />,
  }

  return (
    <Link as={RwLink} to={props.path} onClick={() => props.onClose}>
      <MenuItem
        color={props.rPath === props.path ? props.color : undefined}
        bg={props.rPath === props.path ? props.bg : undefined}
      >
        <HStack>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore:next-line */}
          {iconsObj[props.path]}
          <Text>{props.name}</Text>
        </HStack>
      </MenuItem>
    </Link>
  )
}

export default MenuLink
