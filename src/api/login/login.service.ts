import jwt from "jsonwebtoken";

export default class LoginService {
  public login(username, password) {
    if (!username && !password) {
      throw new Error("Invalid username or password");
    }

    const access_token = this.createJwtToken(username, password);
    const expire = (jwt.decode(access_token) as any).exp;

    console.log(expire, access_token, jwt.decode(access_token));

    return {
      access_token,
      expire,
    };
  }

  private createJwtToken(username, password) {
    return jwt.sign(
      {
        username,
        password,
      },
      process.env.JWT_TOKEN_SECRET,
      { expiresIn: process.env.JWT_EXPIRE_S }
    );
  }
}
