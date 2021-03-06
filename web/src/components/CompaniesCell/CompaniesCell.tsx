import { Flex, Spinner, useColorMode, VStack } from '@chakra-ui/react'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import type { CompaniesQuery } from 'types/graphql'
import AboutCard from '../AboutCard/AboutCard'

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

export const Loading = () => (
  <Flex w="full" p={4} alignItems="center" justifyContent="center">
    <Spinner thickness="4px" speed="0.65s" size="xl" />
  </Flex>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ companies }: CellSuccessProps<CompaniesQuery>) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={12}>
        {companies.map((company) => {
          return (
            <AboutCard
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
