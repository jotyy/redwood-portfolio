import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const institudes: QueryResolvers['institudes'] = () => {
  return db.institude.findMany()
}

export const institude: QueryResolvers['institude'] = ({ id }) => {
  return db.institude.findUnique({
    where: { id },
  })
}

export const createInstitude: MutationResolvers['createInstitude'] = ({
  input,
}) => {
  return db.institude.create({
    data: input,
  })
}

export const updateInstitude: MutationResolvers['updateInstitude'] = ({
  id,
  input,
}) => {
  return db.institude.update({
    data: input,
    where: { id },
  })
}

export const deleteInstitude: MutationResolvers['deleteInstitude'] = ({
  id,
}) => {
  return db.institude.delete({
    where: { id },
  })
}
