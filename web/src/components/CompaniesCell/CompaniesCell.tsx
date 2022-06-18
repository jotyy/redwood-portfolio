import type { CompaniesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import {
  Box,
  useColorModeValue,
  Flex,
  Stack,
  Text,
  Heading,
  Avatar,
  Tag,
  useColorMode,
  VStack,
} from '@chakra-ui/react'
import { CardTransition } from '../ui/page-transitions'
import Title from '../Title/Title'

interface CardProps {
  title: string
  role: string
  skills: string[]
  period: string
  logo?: string
  colorMode: string
}

const Card = (props: CardProps) => {
  const { title, role, skills, period, logo, colorMode } = props
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
            <Avatar rounded="full" w={16} h={16} objectFit="cover" src={logo} />
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

export const QUERY = gql`
  query CompaniesQuery {
    companies {
      id
      name
      role
      skills
      period
      logo
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ companies }: CellSuccessProps<CompaniesQuery>) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Title underlineColor="cyan.200">Companies</Title>
      <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={12}>
        {companies.map((company) => {
          return (
            <Card
              key={company.id}
              title={company.name}
              role={company.role}
              skills={company.skills}
              period={company.period}
              colorMode={colorMode}
            />
          )
        })}
      </VStack>
    </>
  )
}
