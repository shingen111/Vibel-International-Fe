/* eslint-disable no-console */
"use server";

import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_SENDER = process.env.SITE_MAIL_SENDER;
const SUBJECT = process.env.SITE_MAIL_SUBJECT;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

interface SendMailOptions {
  receivedMail: string;
  text: string;
  html?: string;
}

export async function sendMail({ receivedMail, text, html }: SendMailOptions) {
  try {
    await transporter.verify();
  } catch (error) {
    console.error("Something Went Wrong", error);
    return;
  }

  const options = {
    from: SITE_MAIL_SENDER,
    to: receivedMail,
    subject: SUBJECT,
    text: text,
    html: html || "",
  };

  const info = await transporter.sendMail(options);
  console.log("Message Sent", info.messageId);
  console.log("Mail sent to", receivedMail);
  return info;
}
