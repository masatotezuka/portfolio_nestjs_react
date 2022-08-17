import * as sendgrid from '@sendgrid/mail';

export class ResetPassword {
  to: string;
  from: string;
  verificationUrl?: string;
  static type: string = 'mail.to';
  constructor(to: string, from: string, verificationUrl?: string) {
    this.to = to;
    this.from = from;
    this.verificationUrl = verificationUrl;
  }
  public message(): sendgrid.MailDataRequired {
    return {
      to: this.to,
      from: this.from,
      subject: 'パスワードを変更してください',
      text: `パスワードのリセットを承りました。
    下記ＵＲＬより、パスワードを再設定してください。
      ${this.verificationUrl}`,
    };
  }
}
