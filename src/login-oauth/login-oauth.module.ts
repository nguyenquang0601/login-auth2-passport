import { Module } from '@nestjs/common';
import { LoginOauthController } from './login-oauth.controller';
import { LoginOauthService } from './login-oauth.service';

@Module({
  controllers: [LoginOauthController],
  providers: [LoginOauthService]
})
export class LoginOauthModule {}
