import { UserResponse } from '@/core/models/UserResponse.model';

export type Props = {
  profile: {
    data: UserResponse | null;
    error: string | null;
    pending: boolean;
  };
};
