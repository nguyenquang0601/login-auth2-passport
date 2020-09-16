import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './common/oauth';
import { LoginOauthModule } from './login-oauth/login-oauth.module';

@Module({
  imports: [LoginOauthModule],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
