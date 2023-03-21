import { MailService } from "@sendgrid/mail";

MailService.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_KEY)


export async function sendEmail(to, subject, text) {
    const message = {
      to,
      from: 'your-email@example.com', // replace with your email address
      subject,
      text,
    }
  
    try {
      const [response, body] = await MailService.send(message)
      console.log(`Email sent to ${to}`)
    } catch (error) {
      console.error(error)
    }
  }