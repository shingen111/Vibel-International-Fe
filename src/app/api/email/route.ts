/* eslint-disable no-console */
import { sendMail } from "@/lib/sent-email";
import SMTPTransport from "nodemailer/lib/smtp-transport";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(req: Request) {
  const { name, email, phone, message }: FormData = await req.json();
  console.log("🚀 ~ POST ~ { name, email, phone, message }:", {
    name,
    email,
    phone,
    message,
  });

  if (!email) {
    return Response.json({ message: "Missing email address.", data: null });
  }

  if (!name) {
    return Response.json({ message: "Missing name.", data: null });
  }

  if (!phone) {
    return Response.json({ message: "Missing phone.", data: null });
  }

  try {
    const info: SMTPTransport.SentMessageInfo | undefined = await sendMail({
      receivedMail: process.env.SITE_MAIL_RECEIVER || "",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    });

    return Response.json({ message: "Email sent successfully!", data: info });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ message: "Error sending email.", data: null });
  }
}
