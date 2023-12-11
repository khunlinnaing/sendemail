const nodemailer = require('nodemailer')
function SendEmail(email, subject, opt){
    
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.email,
            pass: process.env.pass
        }
    });
    const mail_option = {
        from : process.env.email,
        to: email,
        subject: subject,
        text: `${opt}`
    };
    return transporter.sendMail(mail_option)
    return transporter.sendMail(mail_option, (error, info) => {
        if (error) {
            return error;
        }
        else {
            return info
        }
    });
}
module.exports = {
    SendEmail,
  };