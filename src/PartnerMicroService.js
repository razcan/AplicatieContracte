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
                                con.end();
                            //    console.log(row);	
                                return res.json(row);
                                res.send(row);

                            })


});
})

app.get('/LoadPartner/:PartnerId', (req, res) => {
    var partner_id = req.param('PartnerId');
    
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "SHB"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT * FROM Partner where PartnerId=?',partner_id, function (err, row, fields) {
        if (err) throw err;
        con.end();
     //   console.log(row);	
        return res.json(row);
        res.send(row);

    })
});
})

app.post('/SavePartner', (req, res) => {

    let content = req.body;
   // console.log(content);
    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "SHB"
    });
    
    var post  = {  
    PartnerStatus: `${content.PartnerStatus}`, PartnerName: `${content.PartnerName}`, PartnerCode: `${content.PartnerCode}`,
    PartnerInternalCode: `${content.PartnerInternalCode}`,PartnerType: `${content.PartnerType}`,
    ShortPartnerName: `${content.ShortPartnerName}`, ComercialRegistration: `${content.ComercialRegistration}`, 
    FiscalRegistration: `${content.FiscalRegistration}`,
    PartnerAddress: `${content.PartnerAddress}`, LegalForm: `${content.LegalForm}`, Notes: `${content.Notes}`,
    VATPayer: `${content.VATPayer}`,BankAccount: `${content.BankAccount}`,
    Delegate: `${content.Delegate}`, Agent: `${content.Agent}`, BaseCurrency: `${content.BaseCurrency}`,
    Phone: `${content.Phone}`, Email: `${content.Email}`, WEB: `${content.WEB}`};
    
    // PartnerId: `${content.PartnerId}`,
    if (`${content.PartnerId}`>0) {
        // console.log('trebuie Update');
        var query = con.query('UPDATE Partner SET ? where PartnerId= ?',[post,`${content.PartnerId}`], function (error, results, fields) {
            if (error) throw error;
            con.end();
            });
       
    } 
    else {
        //console.log('trebuie Insert');
    var query = con.query('INSERT INTO Partner SET ?', post, function (error, results, fields) {
        if (error) throw error;
        con.end();
        });
    }
        //console.log(query.sql);
    });


    app.post('/DeletePartner/:PartnerId', (req, res) => {
        var partner_id = req.param('PartnerId');
        
        var mysql = require('mysql');
        var conDelete = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "SHB"
        });

        conDelete.connect(function(err) {
            if (err) throw err ;
            conDelete.query('delete FROM Partner where PartnerId=?',partner_id, function (err, row, fields) {
            if (err) return Observable.throw(err);
            conDelete.end();
           // console.log(row);	
            return res.json(row);
            res.send(row);

        })
        //conDelete.destroy();
    });
    })
    

app.listen(3001, () => console.log('Example app listening on port 3001!'))