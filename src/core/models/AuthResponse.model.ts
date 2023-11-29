import { User } from './User.model';

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface AuthData {
  accessToken: string;
  user: { id: string };
}
