import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class LoginResponse {
  @ApiProperty({ example: 'json.web.token' })
  access_token: string;

  @ApiProperty({ example: 1234 })
  expire: number;
}
