import { Logger } from "winston";
import { AuthUsersRepository } from "../domain/AuthUsersRepository";
import { AuthUserResponse } from "../../Shared/application/responses/AuthUserResponse";
import { AuthUserNotFoundError } from "../domain/AuthUserNotFoundError";

export class AuthUserLogin {
  constructor(
    private readonly authUsersRepository: AuthUsersRepository,
    private readonly logger: Logger
  ) {
    // logger.init(__dirname, AuthUserFinder);
  }

  async invoke(username: string): Promise<AuthUserResponse> {
    const authUser = await this.authUsersRepository.findByUsername(username);

    if (!authUser) {
      this.logger.error(`Username <${username}> not found`);
      throw new AuthUserNotFoundError(username);
    }

    return { username: authUser.username };
  }
}
