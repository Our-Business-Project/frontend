import { User } from './User.model';

interface SignInUserResponse {
  token: string;
  user: User;
}

export type { SignInUserResponse };
