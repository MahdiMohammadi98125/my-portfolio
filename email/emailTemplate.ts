// Helper function to escape HTML entities
const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

export const getEmailTemplate = (message: string, senderEmail: string) => {
  const escapedMessage = escapeHtml(message);
  const escapedEmail = escapeHtml(senderEmail);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Message</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6; padding: 20px;">
        <tr>
            <td align="center">
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); overflow: hidden;">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                                📧 New Contact Form Message
                            </h1>
                            <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 14px;">
                                You received a new message from your portfolio website
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <div style="margin-bottom: 30px;">
                                <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 20px; font-weight: 600;">
                                    Message Details
                                </h2>
                                <div style="background-color: #f9fafb; border-left: 4px solid #667eea; padding: 20px; border-radius: 4px; margin-bottom: 25px;">
                                    <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${escapedMessage}</p>
                                </div>
                            </div>
                            
                            <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb;">
                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0;">
                                            <strong style="color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">From:</strong>
                                        </td>
                                        <td style="padding: 8px 0; text-align: right;">
                                            <a href="mailto:${escapedEmail}" style="color: #667eea; text-decoration: none; font-size: 14px; font-weight: 500;">${escapedEmail}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="padding: 15px 0 0 0; border-top: 1px solid #e5e7eb;">
                                            <a href="mailto:${escapedEmail}?subject=Re: Your message from portfolio" style="display: inline-block; background-color: #667eea; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; font-size: 14px; text-align: center;">
                                                Reply to Message
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0; color: #6b7280; font-size: 12px;">
                                This email was sent from your portfolio contact form.
                            </p>
                            <p style="margin: 5px 0 0 0; color: #9ca3af; font-size: 11px;">
                                &copy; ${new Date().getFullYear()} Portfolio Contact Form
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `.trim();
};
