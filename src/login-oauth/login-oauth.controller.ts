import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginOauthService } from './login-oauth.service';

@Controller('google')
export class LoginOauthController {
  constructor(private readonly loginOauth: LoginOauthService) { }
  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req,@Res() res) { 
    console.log(1)
    return res.redirect("/")
  }
  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() res) {
    // return res.redirect("http://localhost:3001/") 
    return this.loginOauth.googleLogin(req)
  }
}
