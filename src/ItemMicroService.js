const express = require('express');
var multer  =   require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');


const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.get('/LoadItems', (req, res) => {
                            var mysql = require('mysql');

                            var con = mysql.createConnection({
                              host: "localhost",
                              user: "root",
                              password: "root",
                              database: "SHB"
                            });

                            con.connect(function(err) {
                                if (err) throw err;
                                con.query("SELECT * FROM Item order by ItemId DESC ", function (err, row, fields) {
                                if (err) throw err;
                            //    console.log(row);	
                                return res.json(row);
                                res.send(row);

                            })


});
})

app.get('/LoadItems/:ItemId', (req, res) => {
    var item_id = req.param('ItemId');
    
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "SHB"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT * FROM Item where ItemId=?',item_id, function (err, row, fields) {
        if (err) throw err;
     //   console.log(row);	
        return res.json(row);
        res.send(row);

    })
});
})

app.post('/SaveItem', (req, res) => {

    let content = req.body;
    console.log(content);
    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "SHB"
    });
    // ItemId, ItemName, ItemCode, ItemDescription,ItemType,IsValid,IsStockable,
// ItemMeasuringUnit,ItemPrice,ItemCurrency,VatCode, BarCode, ItemIerarchy
    var post  = {  
        ItemName: `${content.ItemName}`, ItemCode: `${content.ItemCode}`,
        ItemDescription: `${content.ItemDescription}`,ItemType: `${content.ItemType}`,
        IsValid: `${content.IsValid}`, IsStockable: `${content.IsStockable}`, 
        ItemMeasuringUnit: `${content.ItemMeasuringUnit}`,
        ItemPrice: `${content.ItemPrice}`, ItemCurrency: `${content.ItemCurrency}`, VatCode: `${content.VatCode}`,
        BarCode: `${content.BarCode}`,ItemIerarchy: `${content.ItemIerarchy}`
};
    

    if (`${content.ItemId}`>0) {
        // console.log('trebuie Update');
        var query = con.query('UPDATE Item SET ? where ItemId= ?',[post,`${content.ItemId}`], function (error, results, fields) {
            if (error) throw error;
            });
       
    } 
    else {
        //console.log('trebuie Insert');
    var query = con.query('INSERT INTO Item SET ?', post, function (error, results, fields) {
        if (error) throw error;
        });
    }
        //console.log(query.sql);
    });


    app.post('/DeleteItem/:ItemId', (req, res) => {
        var item_id = req.param('ItemId');
        console.log(item_id);
        var mysql = require('mysql');
        var conDelete = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "SHB"
        });

        conDelete.connect(function(err) {
            if (err) throw err ;
            conDelete.query('delete FROM Item where ItemId=?',item_id, function (err, row, fields) {
            if (err) return Observable.throw(err);
           // console.log(row);	
            return res.json(row);
            res.send(row);

        })
        //conDelete.destroy();
    });
    })
    
// proprietati
app.get('/LoadProperty', (req, res) => {
     var mysql = require('mysql');
     var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "SHB"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT * FROM Property where PropertyId', function (err, row, fields) {
        if (err) throw err;
     //   console.log(row);	
        return res.json(row);
        res.send(row);

    })
});
})

app.post('/SaveProperty', (req, res) => {

    let content = req.body;
    console.log(content);
    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "SHB"
    });
    // ItemId, ItemName, ItemCode, ItemDescription,ItemType,IsValid,IsStockable,
// ItemMeasuringUnit,ItemPrice,ItemCurrency,VatCode, BarCode, ItemIerarchy
    var post  = {  
        PropertyName: `${content.PropertyName}`, PropertyCode: `${content.PropertyCode}`,
        PropertyType: `${content.PropertyType}`
};
    

    if (`${content.PropertyId}`>0) {
        // console.log('trebuie Update');
        var query = con.query('UPDATE Property SET ? where PropertyId= ?',[post,`${content.PropertyId}`], function (error, results, fields) {
            if (error) throw error;
            });
       
    } 
    else {
        //console.log('trebuie Insert');
    var query = con.query('INSERT INTO Property SET ?', post, function (error, results, fields) {
        if (error) throw error;
        });
    }
        //console.log(query.sql);
    });


    app.post('/DeleteProperty', (req, res) => {
        let content = req.body;
        let PropertyId = content.PropertyId;
      
        var mysql = require('mysql');
        var conDelete = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "SHB"
        });

        conDelete.connect(function(err) {
            if (err) throw err ;
            conDelete.query('delete FROM Property where PropertyId=?',PropertyId, function (err, row, fields) {
            if (err) return Observable.throw(err);
           // console.log(row);	
            return res.json(row);
            res.send(row);

        })
        //conDelete.destroy();
    });
    })

// proprietati

app.listen(3001, () => console.log('Example app listening on port 3001!'))