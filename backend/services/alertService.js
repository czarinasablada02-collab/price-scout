const nodemailer = require('nodemailer');
const socketIo = require('socket.io');

class AlertService {
    constructor(io) {
        this.io = io;
        this.transporter = nodemailer.createTransport({
            host: 'smtp.example.com', // Update with your email provider's host
            port: 587,
            secure: false,
            auth: {
                user: 'your-email@example.com', // Update with your email
                pass: 'your-email-password', // Update with your email password
            },
        });
    }

    async sendPriceDropAlert(email, product, newPrice) {
        const mailOptions = {
            from: 'your-email@example.com', // sender address
            to: email, // list of receivers
            subject: `Price Dropped for ${product.name}`,
            text: `The price for ${product.name} has dropped to $${newPrice}!`,
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log('Price drop alert sent to', email);
        } catch (error) {
            console.error('Error sending price drop alert:', error);
        }
    }

    sendPriceHigherAlert(email, product, newPrice) {
        const mailOptions = {
            from: 'your-email@example.com', // sender address
            to: email, // list of receivers
            subject: `Price Increased for ${product.name}`,
            text: `The price for ${product.name} has increased to $${newPrice}.`,
        };

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('Error sending price higher alert:', error);
            }
            console.log('Price higher alert sent:', info.response);
        });
    }

    sendBrowserNotification(product, message) {
        this.io.emit('priceNotification', { product, message });
    }
}

module.exports = AlertService;