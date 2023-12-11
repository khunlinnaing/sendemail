// npm install express body-parser express-validator nodemailer ejs
const express = require('express');
const sendemail = require('./email')
require('dotenv').config();
const app = express();
app.use(express.json())
app.get('/', (req, res) =>{
    const randomNum = `${Math.floor(1000 + Math.random() * 9000)}`
    const randomNumString = randomNum.toString();

    const words = randomNumString.split(/\s+/).slice(0, 5);
    return res.send(words)
})
app.post('/', async (req, res)=>{
    const opt = `${Math.floor(1000 + Math.random() * 9000)}`
    return res.send(await sendemail.SendEmail(req.body.email, req.body.subject, opt))
})


//start server
app.listen(8000, () => {

    console.log('Server started on port 8000');

});