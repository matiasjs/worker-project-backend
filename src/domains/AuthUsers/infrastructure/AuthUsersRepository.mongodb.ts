import { AuthUsersRepository } from '../domain/AuthUsersRepository';
import { AuthUser } from '../domain/AuthUser';
import { Nullable } from '../../Shared/domain/Nullable';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class AuthUsersRepositoryMongodb implements AuthUsersRepository {
  async findByUsername(username: string): Promise<Nullable<AuthUser>> {
    return AuthUser.fromPrimitives({
      username,
      password: 'password',
    });
  }
}
