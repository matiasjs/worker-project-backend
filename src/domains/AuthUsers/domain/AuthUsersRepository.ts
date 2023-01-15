import { Nullable } from '../../Shared/domain/Nullable';

import { AuthUser } from './AuthUser';

export abstract class AuthUsersRepository {
  abstract findByUsername(username: string): Promise<Nullable<AuthUser>>;
}
