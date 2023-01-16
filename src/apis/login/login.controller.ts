import { Controller, Post, Body, UseGuards, Headers } from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { LoginDto, LoginResponse } from './models/login.dto';
import { LoginService } from './login.service';

@ApiTags('Login')
@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {
    // private readonly logger: Logger,
    // this.logger.init(__dirname, LoginController);
  }

  @ApiOperation({ description: 'Returns a JWT after a successful login' })
  @ApiCreatedResponse({ type: LoginResponse })
  @Post('v1/login')
  async login(@Body() user: LoginDto): Promise<LoginResponse | any> {
    return this.loginService.login(user);
  }
}
