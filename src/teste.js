
const express = require('express');
var multer  =   require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
const mysql = require('mysql');
const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
   
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "shb"
    });

let add = function(a,b) {
    return a+b;
}
    var cueri = con.query('SELECT (max(AlertId) + 1)AlertId FROM Alert', function (error, results, fields,callback) {
      if (error) throw error;
      var result = results;  
      callback(results); 
      //console.log('Valoarea maxima a AlertId din NodeJs este :',result[0].AlertId); 
        }); 
console.log(cueri(1,2,add));

        function doCall() {
              finalData = 55;
              return finalData;
          }
        
        var response5 =  doCall(); 
        console.log(response5); 
        
 
        var query = con.query('SELECT (max(AlertId) + 1)AlertId FROM Alert');
         
        // query.on('error', function(err) {
        //     throw err;
        // });
         
        // query.on('fields', function(fields) {
        //     console.log(fields);
        // });

 
        query.on('result', function(row,callback) {
            console.log(row.AlertId);
            var maxxx=row.AlertId;
            return callback(maxxx);
        });


    console.log(io); 
//   console.log(result);
         
        con.end();

// Alerte

app.listen(3001, () => console.log('Example app listening on port 3001!'))/Users/razvan/angular/NewProject/AplicatieContracte/src/teste.js