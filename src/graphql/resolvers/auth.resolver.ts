import { AuthService } from "../../services/auth.service";
import { Role } from "../../types/user.types";

export const authResolvers = {
  Mutation: {
    signup: async (_: any, { name, email, password, role }: { name: string; email: string; password: string; role: Role }, { authService }: { authService: AuthService }) => {
      return await authService.signup(name, email, password, role);
    },
    signin: async (_: any, { email, password }: { email: string; password: string }, { authService }: { authService: AuthService }) => {
      return await authService.signin(email, password);
    },
  },
};
