import { DomainError } from "../../Shared/domain/DomainError";

export class InvalidCredentialsError extends DomainError {
  constructor(username: string) {
    super(
      "auth_user_invalid_credentials",
      `The AuthUser with username <${username}> credentials are invalid`
    );
  }
}
