import { Logger } from "winston";
import { AuthUsersRepository } from "../domain/AuthUsersRepository";
import { AuthUser } from "../domain/AuthUser";
import { Nullable } from "@server/domains/Shared/domain/Nullable";

export class AuthUsersRepositoryMongodb implements AuthUsersRepository {
  constructor(private readonly logger: Logger) {
    // this.logger.init(__dirname, AyobaAuthUsersRepository);
  }

  async findByUsername(username: string): Promise<Nullable<AuthUser>> {
    // this.logger.debug("findByUsername");
    console.log("findByUsername");

    return AuthUser.fromPrimitives({
      username,
      password: "password",
    });
  }
}
