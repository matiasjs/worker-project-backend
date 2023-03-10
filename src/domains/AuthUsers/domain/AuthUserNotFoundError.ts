import { DomainError } from "../../Shared/domain/DomainError";

export class AuthUserNotFoundError extends DomainError {
  constructor(username: string) {
    super(
      "auth_user_not_found",
      `The AuthUser with username <${username}> doesn't exist`
    );
  }
}
