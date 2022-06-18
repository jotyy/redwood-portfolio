import {
  Box,
  useColorModeValue,
  Flex,
  Avatar,
  Stack,
  Heading,
  Text,
  Tag,
  Image,
} from '@chakra-ui/react'
import { CardTransition } from '../ui/page-transitions'

interface Props {
  title: string
  role: string
  skills: string[]
  period: string
  logo?: string
  colorMode: string
}

const AboutCard = ({ title, role, skills, period, logo, colorMode }: Props) => {
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: `lg` }}
        bg={useColorModeValue(`white`, `gray.800`)}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            {logo ? (
              <Image
                rounded="full"
                w={16}
                h={16}
                objectFit="scale-down"
                src={logo}
              />
            ) : (
              <Avatar w={16} h={16} name={title} />
            )}
            <Stack spacing={2} pl={3} align="left">
              <Heading fontSize="xl" color={`mode.${colorMode}.career.text`}>
                {title}
              </Heading>
              <Heading fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
                {role}
              </Heading>
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems="center"
                display={[`none`, `none`, `flex`, `flex`]}
              >
                {skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </Stack>
            </Stack>
          </Flex>
          <Stack display={[`none`, `none`, `flex`, `flex`]}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={1}
          mt={3}
          isInline
          alignItems="center"
          display={[`flex`, `flex`, `none`, `none`]}
        >
          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </Stack>
      </Box>
    </CardTransition>
  )
}

export default AboutCard
