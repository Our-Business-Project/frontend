import { User } from './User.model';

interface AuthResponse {
  accessToken: string;
  user: User;
}

export type { AuthResponse };
