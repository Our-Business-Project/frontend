import { Image } from './Image.model';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  image: Image | null;
  isEmailVerified: string;
  taxation: 'NaturalPerson' | 'Yurosoba';
}
