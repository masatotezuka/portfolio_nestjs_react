import { ResetPassword } from './mails/resetPassword.mail';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SendgridEmitter {
  constructor(private event: EventEmitter2) {}

  sendResetPassword(to: string, from: string, verificationToken: string) {
    return this.event.emit(
      ResetPassword.type,
      new ResetPassword(to, from, verificationToken),
    );
  }
}
