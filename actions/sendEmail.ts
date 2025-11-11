"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import * as nodemailer from "nodemailer";
import { getEmailTemplate } from "@/email/emailTemplate";

// Create transporter - configure with your email service
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD, // Use App Password for Gmail
  },
});

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("email");

  // simple server-side validation
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  // Validate SMTP configuration
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    return {
      error:
        "Email service not configured. Please set SMTP_USER and SMTP_PASSWORD environment variables.",
    };
  }

  const recipientEmail =
    process.env.CONTACT_EMAIL || "mahdimohammadi.webdev@gmail.com";

  let data;
  try {
    data = await transporter.sendMail({
      from: `Portfolio Contact Form <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: senderEmail as string,
      subject: "New Message from Portfolio Contact Form",
      html: getEmailTemplate(message as string, senderEmail as string),
      text: `You received a new message from your portfolio contact form.\n\nFrom: ${senderEmail}\n\nMessage:\n${message}`,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
