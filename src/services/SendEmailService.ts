import axios from "axios";
import SMTPTransport from "nodemailer/lib/smtp-transport";

class SendEmailService {
  private url = "/api/email";

  public async sendEmail({
    name,
    email,
    phone,
    message,
  }: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }): Promise<{
    message: string;
    data: SMTPTransport.SentMessageInfo | undefined;
  }> {
    try {
      const rs = await axios.post(this.url, {
        name,
        email,
        phone,
        message,
      });
      return Promise.resolve(rs.data);
    } catch (error: any) {
      return Promise.reject(error.data);
    }
  }
}

export default SendEmailService;
