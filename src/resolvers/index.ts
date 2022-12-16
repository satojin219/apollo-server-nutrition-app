import { Resolvers } from "../types/generated/graphql";
import { createUser } from "./mutation/createUser";
import { dateScalar } from "./scalar/date";

const resolvers: Resolvers = {
  Query: {
    getUser: () => null,
  },
  Mutation: {
    createUser: createUser,
    // updateUser: () => null,
  },
  Date: dateScalar,
};

export default resolvers;
