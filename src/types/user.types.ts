export type User = {
    id: string;
    name: string;
    email: string;
    role: Role;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
  

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}