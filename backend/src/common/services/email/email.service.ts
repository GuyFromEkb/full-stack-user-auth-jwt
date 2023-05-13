import { logger } from '@common/Logger';
import { configService } from '@config/config.service';
import { TestAccount, Transporter, createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';

class EmailServices {
  private testAccount: TestAccount;
  private transporter: Transporter;

  constructor() {
    this.init();
  }

  private init = async () => {
    this.testAccount = await createTestAccount();

    this.transporter = createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: this.testAccount.user,
        pass: this.testAccount.pass,
      },
    });

    logger.info('[EmailServices] OK');
  };

  sendActivateLink = async (to: string, link: string) => {
    const info = await this.transporter.sendMail({
      from: 'foo@example.com',
      to,
      subject: 'Hello ✔',
      text: '',
      html: `<a href="${configService.env.SERVER_URL}/user/activate/${link}">Подтвердить регистрацию</a>`,
    });

    logger.info('Email Preview URL: %s', getTestMessageUrl(info));
  };
}

export const emailServices = new EmailServices();
