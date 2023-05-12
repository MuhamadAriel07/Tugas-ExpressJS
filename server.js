var express = require('express')
var app = express()
require('dotenv').config()
const port = process.env.PORT || 80;
const host = process.env.HOST || 'localhost';

// menggunakan req.query dengan URL parameter
app.get('/biodata', (req, res) => {
    const nama = req.query.nama;
    const tempat_lahir = req.query["tempat-lahir"];
    const tanggal_lahir = req.query["tanggal-lahir"];
    const alamat = req.query.alamat;

    res.send({
        'nama': nama,
        'tempat-lahir': tempat_lahir,
        'tanggal-lahir': tanggal_lahir,
        'alamat': alamat
    })
})

// menggunakan req.body dengan POST parameter
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/biodata', (req, res) => {
    const nama = req.body.nama;
    const tempat_lahir = req.body["tempat-lahir"];
    const tanggal_lahir = req.body["tanggal-lahir"];
    const alamat = req.body.alamat;

    res.send({
        'nama': nama,
        'tempat-lahir': tempat_lahir,
        'tanggal-lahir': tanggal_lahir,
        'alamat': alamat
    })
})

app.listen(port);
console.log(`Server started at http://${host}:${port}`)