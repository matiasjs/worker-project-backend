import { logger } from "@server/config/logger";
import { AuthUserLogin } from "@server/domains/AuthUsers/application/AuthUsersLogin";
import { AuthUsersRepositoryMongodb } from "@server/domains/AuthUsers/infrastructure/AuthUsersRepository.mongodb";
import { Application, Request, Response } from "express";
import LoginService from "./login.service";

export default class LoginController {
  private authUserLogin: AuthUserLogin;
  private loginService: LoginService;

  constructor(app: Application, loginService: LoginService) {
    this.authUserLogin = new AuthUserLogin(
      new AuthUsersRepositoryMongodb(logger),
      logger
    );

    this.loginService = loginService;

    // Add routes from the following line
    app.post("/login", (req, res) => this.getLogin(req, res));
  }

  private async getLogin(req: Request, res: Response) {
    res.json(this.loginService.login(req.body.username, req.body.password));
  }
}
