import { User } from './User.model';

export interface AuthResponse {
  accessToken: string;
  user: User;
}
