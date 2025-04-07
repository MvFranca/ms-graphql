import { AuthService } from "../../services/auth.service";
import { Role } from "../../types/user.types";

export const authResolvers = {
  Mutation: {
    signup: async (_: any, { name, email, password, role }: { name: string; email: string; password: string; role: Role }, { authService }: { authService: AuthService }) => {
      const token = await authService.signup(name, email, password, role);
      if(!token) return null
      return {token}
    },
    signin: async (_: any, { email, password }: { email: string; password: string }, { authService }: { authService: AuthService }) => {
      const token = await authService.signin(email, password);
      if(!token) return null
      return {token}
    },
  },
};
