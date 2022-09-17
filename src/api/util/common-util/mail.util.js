var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    service: "Gmail",
    pool: true,
    auth: {
        user: "username@gmail.com",
        pass: "ybwblsclsxrromic"
    }
});

var mailOptions = {
    from: '"Example Team" <Bharatnodejs@gmail.com>',
    to: 'bharat.joshi@pyramidconsultinginc.com',
    subject: 'Nice Nodemailer test',
    text: 'Hey there, it’s our first message sent with Nodemailer ',
    html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
    attachments: [
        {
            filename: 'mailtrap.png',
            path: __dirname + '/mailtrap.png',
            cid: 'uniq-mailtrap.png'
        }
    ]
};
const sendMail = () => {
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            transporter.close();
            return
        }
        transporter.close();
        console.log('Message sent: %s', info.messageId);
    });
}
module.exports = sendMail;