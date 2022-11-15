import { Resolvers } from "../types/generated/graphql";
import { dateScalar } from "./scalar/date";

const resolvers: Resolvers = {
  Query: {
    getUser: () => null,
  },
  Mutation: {
    updateUser: () => null,
  },
  Date: dateScalar,
};

export default resolvers;
