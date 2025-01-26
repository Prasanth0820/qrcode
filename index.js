const express = require('express')
const app = express()
const qrcode = require('qrcode')
const path = require('path')

// middlewarecode --------------------------------use for gain data from the frontend to backend

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.use(express.static("public"))
app.use(express.static("src"))




app.get('/', (req, res) => {
    res.render('index')

})
app.get('/Qr-code', (req, res) => {
    res.render('qr-code')

})
app.post('/imgdata', (req, res) => {
    console.log(req.body.qrdata);
    const qrcodedata = req.body.qrdata
    qrcode.toDataURL(qrcodedata, (err, data) => {
        console.log(data);
        res.render('qr-code', { "transfer": data })


    })

})
app.listen(10000)