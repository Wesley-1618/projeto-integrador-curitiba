const path = require('path');
const nodemailer = require('nodemailer');
const hb = require('nodemailer-express-handlebars');

const {host,port, user, pass} = require('../config/mail');
const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
  });

  const handlebarsOptions = {
    viewEngine: {
      extName: ".html",
      partialsDir: path.resolve('./src/email/template'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./src/email/template'),
    extName: ".html",
  }
  //viewEngine : 'handlebars',

  transport.use('compile', hb( handlebarsOptions ));

module.exports = transport;