import { UserService } from '../../services/user.service';

export const userResolvers = {
  Query: {
    users: async (_: any, __: any, { userService }: { userService: UserService }) => {
      return await userService.getUsers();
    },
    user: async (_: any, { id }: { id: string }, { userService }: { userService: UserService }) => {
      return await userService.getUserById(id);
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email, password }: { name: string; email: string; password: string }, { userService }: { userService: UserService }) => {
      return await userService.createUser(name, email, password);
    },
  },
};
