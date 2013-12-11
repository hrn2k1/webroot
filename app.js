var http = require('http');
var nodemailer = require("nodemailer");
var port = process.env.PORT || 1338;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "",
    auth: {
        user: "acm.62710@gmail.com",
        pass: "naimaapu1#3"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "hArUn<foo@blurdybloop.com>", // sender address
    to: "Harun.Rashid@dev.dctieto.fi", // list of receivers
    subject: "Hello ", // Subject line
    text: "Hello world ", // plaintext body
    html: "<b>Hello world </b>" // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});
  
  res.end('Hello World App\n');
}).listen(port);



