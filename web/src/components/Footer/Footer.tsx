import {
  Stack,
  Flex,
  useColorModeValue,
  Box,
  IconButton,
  Text,
  Link,
} from '@chakra-ui/react'
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Jotyy. All Rights Reserved.`,
  author: {
    name: 'Jotyy',
    accounts: [
      {
        url: 'https://github.com/jotyy',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />,
      },
      {
        url: 'https://twitter.com/jotyy3',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />,
      },
      {
        url: 'https://dev.to/jotyy',
        label: 'Dev Account',
        type: 'gray',
        icon: <FaDev />,
      },
      {
        url: 'https://linkedin.com/in/jotyy',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />,
      },
      {
        url: 'jotyy318@gmail.com',
        label: 'Mail jotyy',
        type: 'gray',
        icon: <FiMail />,
      },
    ],
  },
}

const iconProps = {
  variant: `ghost`,
  size: `lg`,
  isRound: true,
}

const Footer = () => {
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="space-between"
      alignItems="center"
      w={[`100%`, `85%`, `80%`]}
      maxW={800}
      mx="auto"
    >
      <Flex
        flexDirection={[`column`, `column`, `row`]}
        flexFlow={[`column-reverse`, `column-reverse`]}
        justifyContent={[`center`, `space-between`]}
        alignItems="center"
        w="100%"
      >
        <Text
          textAlign="center"
          fontSize="sm"
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          © {new Date().getFullYear()} Jotyy{` `}
        </Text>
        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => {
            return (
              <IconButton
                key={index}
                as={Link}
                isExternal
                href={sc.url}
                aria-label={sc.label}
                colorScheme={sc.type}
                icon={sc.icon}
                {...iconProps}
              />
            )
          })}
        </Box>
      </Flex>
    </Stack>
  )
}

export default Footer
