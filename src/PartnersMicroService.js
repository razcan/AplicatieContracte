const express = require('express');
var multer  =   require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');


const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.get('/LoadPartners', (req, res) => {
                            var mysql = require('mysql');

                            var con = mysql.createConnection({
                              host: "localhost",
                              user: "root",
                              password: "root",
                              database: "SHB"
                            });

                            con.connect(function(err) {
                                if (err) throw err;
                                con.query("SELECT * FROM Partner order by PartnerId DESC ", function (err, row, fields) {
                                if (err) throw err;
                                console.log(row);	
                                return res.json(row);
                                res.send(row);

                            })


});
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))