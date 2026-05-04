import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

/**
 * Production (e.g. Render): do not call SES unless explicitly enabled — avoids IAM/Sandbox failures.
 * Development: sends normally. Set EMAIL_SENDING_ENABLED=true on production when SES is wired.
 */
function isProductionEmailOutboundDisabled(): boolean {
  return (
    process.env.NODE_ENV === "production" &&
    process.env.EMAIL_SENDING_ENABLED?.trim().toLowerCase() !== "true"
  );
}

function buildSesClient(): SESClient {
  const sesKey = process.env.AWS_SES_ACCESS_KEY_ID?.trim();
  const sesSecret = process.env.AWS_SES_SECRET_ACCESS_KEY?.trim();
  const useSesKeys = Boolean(sesKey && sesSecret);

  const region =
    process.env.AWS_SES_REGION?.trim() ||
    process.env.AWS_REGION?.trim() ||
    "us-east-1";

  const credentials = useSesKeys
    ? {
        accessKeyId: sesKey as string,
        secretAccessKey: sesSecret as string,
      }
    : {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
      };

  return new SESClient({ region, credentials });
}

const sesClient = buildSesClient();

interface SendEmailParams {
  to: string;
  subject: string;
  htmlBody: string;
  textBody: string;
}

export const emailService = {
  /**
   * Send an email using AWS SES
   */
  async sendEmail({ to, subject, htmlBody, textBody }: SendEmailParams) {
    if (isProductionEmailOutboundDisabled()) {
      console.log(
        `[email] delivery skipped (production; set EMAIL_SENDING_ENABLED=true to use SES) to=${to} subject=${subject}`,
      );
      return { success: true, messageId: "skipped-production" };
    }

    const fromEmail = process.env.AWS_SES_FROM_EMAIL || "no-reply@example.com";
    const fromName = process.env.AWS_SES_FROM_NAME || "Remit 2 Globe";

    const command = new SendEmailCommand({
      Source: `${fromName} <${fromEmail}>`,
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: htmlBody,
            Charset: "UTF-8",
          },
          Text: {
            Data: textBody,
            Charset: "UTF-8",
          },
        },
      },
    });

    try {
      const response = await sesClient.send(command);
      console.log("Email sent successfully:", response.MessageId);
      return { success: true, messageId: response.MessageId };
    } catch (error: any) {
      console.error("Error sending email:", error);
      throw new Error(`Failed to send email: ${error.message}`);
    }
  },

  /**
   * Send OTP verification email
   */
  async sendOtpEmail(email: string, otp: string, expiryMinutes: number = 10) {
    const subject = "Verify Your Email - Remit 2 Globe";

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center;">
              <div style="display: inline-flex; align-items: center; gap: 10px;">
                <div style="width: 32px; height: 32px; background-color: #0d9488; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center;">
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2L15.5 6V12L9 16L2.5 12V6L9 2Z" fill="white" fill-opacity="0.9"/>
                    <path d="M6 9.5L8 11.5L12 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span style="font-size: 20px; font-weight: 700; color: #0f172a;">Remit 2 Globe</span>
              </div>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <h1 style="margin: 0 0 16px; font-size: 24px; font-weight: 600; color: #0f172a; text-align: center;">
                Verify Your Email Address
              </h1>
              
              <p style="margin: 0 0 24px; font-size: 16px; color: #64748b; text-align: center; line-height: 1.5;">
                Thank you for registering with Remit 2 Globe. To complete your registration, please use the verification code below:
              </p>

              <!-- OTP Box -->
              <div style="background-color: #f1f5f9; border-radius: 8px; padding: 24px; margin: 24px 0; text-align: center;">
                <p style="margin: 0 0 8px; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">
                  Your Verification Code
                </p>
                <div style="font-size: 36px; font-weight: 700; color: #0d9488; letter-spacing: 8px; font-family: 'Courier New', monospace;">
                  ${otp}
                </div>
              </div>

              <p style="margin: 24px 0 0; font-size: 14px; color: #64748b; text-align: center; line-height: 1.5;">
                This code will expire in <strong style="color: #0f172a;">${expiryMinutes} minutes</strong>. 
                If you didn't request this code, please ignore this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8; text-align: center; line-height: 1.5;">
                This is an automated message from Remit 2 Globe. Please do not reply to this email.
              </p>
              <p style="margin: 8px 0 0; font-size: 12px; color: #94a3b8; text-align: center;">
                © ${new Date().getFullYear()} Remit 2 Globe. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const textBody = `
Verify Your Email Address - Remit 2 Globe

Thank you for registering with Remit 2 Globe. To complete your registration, please use the verification code below:

Your Verification Code: ${otp}

This code will expire in ${expiryMinutes} minutes. If you didn't request this code, please ignore this email.

© ${new Date().getFullYear()} Remit 2 Globe. All rights reserved.
    `;

    return this.sendEmail({
      to: email,
      subject,
      htmlBody,
      textBody,
    });
  },

  /**
   * Send welcome email after successful verification
   */
  async sendWelcomeEmail(email: string, name: string) {
    const subject = "Welcome to Remit 2 Globe!";

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Welcome to Remit 2 Globe</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden;">
          <tr>
            <td style="padding: 40px; text-align: center;">
              <h1 style="margin: 0 0 16px; font-size: 28px; font-weight: 600; color: #0f172a;">
                Welcome to Remit 2 Globe! 🎉
              </h1>
              <p style="margin: 0 0 24px; font-size: 16px; color: #64748b;">
                Hi ${name}, your account has been successfully verified. You can now start sending money globally.
              </p>
              <a href="${process.env.FRONTEND_URL}/dashboard" style="display: inline-block; padding: 12px 32px; background-color: #0d9488; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 500;">
                Go to Dashboard
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const textBody = `Welcome to Remit 2 Globe!\n\nHi ${name}, your account has been successfully verified. You can now start sending money globally.`;

    return this.sendEmail({
      to: email,
      subject,
      htmlBody,
      textBody,
    });
  },
};
