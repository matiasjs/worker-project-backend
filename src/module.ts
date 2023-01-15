import { Application } from "express";
import LoginController from "./api/login/login.controller";
import LoginService from "./api/login/login.service";

export default function initialize(app: Application) {
  new LoginController(app, new LoginService());
}
