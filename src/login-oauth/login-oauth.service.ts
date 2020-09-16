import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginOauthService {
  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google'
    }
    return {
      message: 'User infomation from google',
      user: req.user
    }
  }
}
