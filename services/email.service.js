export class EmailService {
  sendEmail(mailto, subject, body, canOpemClientMail) {
    if (canOpemClientMail == null) canOpemClientMail = true;
    if (subject == null) return;
    if (body == null) return;
    if (canOpemClientMail) this.sendEmailUsingClientApp(mailto, subject, body);
  }

  sendEmailUsingClientApp(mailto,subject, body) {
    const email = `mailto:${mailto}?subject=${subject}&body=${body}`;
    window.open(email);
  }
}