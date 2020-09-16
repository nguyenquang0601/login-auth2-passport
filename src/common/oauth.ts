import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { config } from "dotenv";
import { VerifyCallback,Strategy } from "passport-google-oauth20";

config()
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy,'google'){
  constructor(){
    super({
      clientID : '578146149385-2dppsmneu3q8sdgi1qhdv2u36s56of8m.apps.googleusercontent.com',
      clientSecret: 'rNpVWFeR2Bh23xmDTsdcOENT',
      callbackURL: '/google/redirect',
      scope: ['email','profile']
    })
  }
  async validate(accessToken:string, refreshToken:string, profile: any, done: VerifyCallback){
      const { name , emails, photos} = profile
      console.log(profile)
      const user = {
        email: emails[0].value,
        fisrtname: name.givenName,
        lastname: name.familyName,
        picture: photos[0].value,
        accessToken
      }
      done(null,user)
  }
}




