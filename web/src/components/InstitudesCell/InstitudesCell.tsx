import type { InstitudesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Flex, Spinner, useColorMode, VStack } from '@chakra-ui/react'
import AboutCard from '../AboutCard/AboutCard'

export const QUERY = gql`
  query InstitudesQuery {
    institudes {
      id
      title
      role
      skills
      period
      logo
    }
  }
`

export const Loading = () => (
  <Flex w="full" p={4} alignItems="center" justifyContent="center">
    <Spinner thickness="4px" speed="0.65s" size="xl" />
  </Flex>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ institudes }: CellSuccessProps<InstitudesQuery>) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={12}>
        {institudes.map((institude) => {
          return (
            <AboutCard
              key={institude.id}
              title={institude.title}
              role={institude.role}
              skills={institude.skills}
              period={institude.period}
              logo={institude.logo}
              colorMode={colorMode}
            />
          )
        })}
      </VStack>
    </>
  )
}
