export const schema = gql`
  type Institude {
    id: String!
    title: String!
    short_title: String!
    role: String!
    skills: [String]!
    period: String!
    startingYear: String!
    logo: String
  }

  type Query {
    institudes: [Institude!]! @requireAuth
    institude(id: String!): Institude @requireAuth
  }

  input CreateInstitudeInput {
    title: String!
    short_title: String!
    role: String!
    skills: [String]!
    period: String!
    startingYear: String!
    logo: String
  }

  input UpdateInstitudeInput {
    title: String
    short_title: String
    role: String
    skills: [String]!
    period: String
    startingYear: String
    logo: String
  }

  type Mutation {
    createInstitude(input: CreateInstitudeInput!): Institude! @requireAuth
    updateInstitude(id: String!, input: UpdateInstitudeInput!): Institude!
      @requireAuth
    deleteInstitude(id: String!): Institude! @requireAuth
  }
`
