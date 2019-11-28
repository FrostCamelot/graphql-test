import { users, customer, person } from "./db";

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => {
      return users.find(user => user.id === id);
    },
    users: (parent, args, context, info) => {
      return users;
    },
    customer: (parent, args, context, info) => {
      return customer;
    },
    personnn: (parent, args, context, info) => {
      return person;
    }
  }
};

export default resolvers;
