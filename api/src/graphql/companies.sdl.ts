export const schema = gql`
  type Company {
    id: String!
    name: String!
    role: String!
    period: String!
    skills: [String]!
    logo: String
  }

  type Query {
    companies: [Company!]! @requireAuth
    company(id: String!): Company @requireAuth
  }

  input CreateCompanyInput {
    name: String!
    role: String!
    period: String!
    skills: [String]!
    logo: String
  }

  input UpdateCompanyInput {
    name: String
    role: String
    period: String
    skills: [String]!
    logo: String
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: String!, input: UpdateCompanyInput!): Company!
      @requireAuth
    deleteCompany(id: String!): Company! @requireAuth
  }
`
