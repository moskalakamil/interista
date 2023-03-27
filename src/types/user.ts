export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserBody = Omit<
  User,
  "id" | "createdAt" | "updatedAt" | "posts"
>;

export type UpdateUserBody = Omit<User, "createdAt" | "updatedAt" | "posts">;
