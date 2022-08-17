import { Inject, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import * as sendgrid from '@sendgrid/mail';
import { ResetPassword } from './mails/resetPassword.mail';

@Injectable()
export class SendgridService {
  constructor(@Inject('SENDGRID_API_KEY') private apiKey: string) {
    sendgrid.setApiKey(apiKey);
  }

  private send(msg: sendgrid.MailDataRequired) {
    console.log(msg);
    
    sendgrid
      .send(msg)
      .then(() => {
        console.log('send');
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  }

  @OnEvent(ResetPassword.type)
  sendResetPasswordMail(msg: ResetPassword) {
    return this.send(msg.message());
  }
}
