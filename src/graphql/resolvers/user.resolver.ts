import { UserService } from '../../services/user.service';

export const userResolvers = {
  Query: {
    users: async () => await UserService.getUsers(),
    user: async (_: any, { id }: { id: string }) => await UserService.getUserById(id),
  },
  Mutation: {
    createUser: async (_: any, { name, email, password }: { name: string; email: string; password: string }) => {
      return await UserService.createUser(name, email, password);
    },
  },
};
