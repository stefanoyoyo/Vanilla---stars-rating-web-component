import EmailViaClientApp from './client-app/clientEmail.service.js';
import EmailViaAPI from './api/emailViaAPI.service.js';


export class EmailService {
  sendEmail(mailto, subject, body, canOpenClientMail) {
    if (canOpenClientMail == null) canOpenClientMail = false;
    if (subject == null) return;
    if (body == null) return;
    if (canOpenClientMail) this.sendEmailUsingClientApp(mailto, subject, body);
    else this.sendEmailViaAPI(mailto, subject, body);
  }

  sendEmailUsingClientApp(mailto,subject, body) {
    const emailViaClient = new EmailViaClientApp();
    emailViaClient.send(mailto, subject, body);
  }

  sendEmailViaAPI(mailto, subject, body) {
    const emailViaApi = new EmailViaAPI();
    emailViaApi.send(mailto, subject, body);
  }
}