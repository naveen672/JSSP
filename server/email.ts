import nodemailer from 'nodemailer';

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function sendContactConfirmationEmail(contactData: ContactFormData): Promise<boolean> {
  try {
    const transporter = createTransporter();
    
    // Email to the user (confirmation)
    const userEmailOptions = {
      from: process.env.EMAIL_FROM,
      to: contactData.email,
      subject: 'Thank you for contacting JSS Polytechnic',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e40af; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">JSS Polytechnic</h1>
            <p style="color: #bfdbfe; margin: 10px 0 0 0;">Mysore-570 006, Karnataka</p>
          </div>
          
          <div style="padding: 30px; background-color: #f8fafc;">
            <h2 style="color: #1e40af; margin-bottom: 20px;">Thank You for Your Message!</h2>
            
            <p>Dear ${contactData.name},</p>
            
            <p>Thank you for contacting JSS Polytechnic. We have received your message and will get back to you within 24-48 hours.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Your Message Details:</h3>
              <p><strong>Subject:</strong> ${contactData.subject}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: #f1f5f9; padding: 15px; border-radius: 4px; margin: 10px 0;">${contactData.message}</p>
              ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
            </div>
            
            <p>If you have any urgent inquiries, please feel free to call us directly at:</p>
            <ul>
              <li>Phone: +91-821-2548349</li>
              <li>Mobile: +91-9448568349</li>
            </ul>
            
            <p>Best regards,<br>
            JSS Polytechnic Team</p>
          </div>
          
          <div style="background-color: #1e40af; padding: 15px; text-align: center; color: white; font-size: 12px;">
            <p style="margin: 0;">JSS Polytechnic, Ooty Road, Mysore-570 006, Karnataka</p>
            <p style="margin: 5px 0 0 0;">Email: principal@jsspolytechnic.org | Website: www.jsspolytechnic.org</p>
          </div>
        </div>
      `
    };

    // Email to admin (notification)
    const adminEmailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM, // Send to same email as notification
      subject: `New Contact Form Submission - ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #dc2626; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
            <p style="color: #fecaca; margin: 10px 0 0 0;">JSS Polytechnic Admin Notification</p>
          </div>
          
          <div style="padding: 30px; background-color: #f8fafc;">
            <h2 style="color: #dc2626; margin-bottom: 20px;">Contact Details</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${contactData.name}</p>
              <p><strong>Email:</strong> ${contactData.email}</p>
              ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
              <p><strong>Subject:</strong> ${contactData.subject}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: #f1f5f9; padding: 15px; border-radius: 4px; margin: 10px 0;">${contactData.message}</p>
            </div>
            
            <p style="color: #6b7280; font-size: 14px;">
              This message was submitted through the JSS Polytechnic website contact form.
              Please respond to the user within 24-48 hours.
            </p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(userEmailOptions);
    await transporter.sendMail(adminEmailOptions);
    
    console.log('Contact form emails sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact form emails:', error);
    return false;
  }
}

export async function testEmailConnection(): Promise<boolean> {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('Email server connection verified');
    return true;
  } catch (error) {
    console.error('Email server connection failed:', error);
    return false;
  }
}