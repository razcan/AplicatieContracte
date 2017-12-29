const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'hello'
});
connection.connect();

const app = express()
app.use(cors())
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));



app.get('/listTemplate', (req, res) => {
  var fs22 = require("fs"),
  path = require("path");
  
  var p = "/Users/razvan/angular/NewProject/AplicatieContracte/src/app/contract-module/documents/HtmlTemplateContract/"
  var rezultat =[];
fs22.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }

    files.map(function (file) {
        return path.join(p, file);
    }).filter(function (file) {
        return fs22.statSync(file).isFile();
    }).forEach(function (file) {
        console.log(file.substring(107,200));
        rezultat.push(file.substring(107,200));
        //
       
       // res.send(file.substring(107,200));
    });
    return res.json(rezultat);
});

})

//salveaza template

app.post('/saveTemplate', (req, res) => {
  let templateHtml = req.body;
  console.log(templateHtml.text);
  console.log(templateHtml.TemplateName);

var data = new Date();
var filename = "/Users/razvan/angular/NewProject/AplicatieContracte/src/app/contract-module/documents/HtmlTemplateContract/"+templateHtml.TemplateName+".html"
  //create file
fs = require('fs');
fs.writeFile(filename, "", function (err) {
    if (err) 
        return console.log(err);
   // console.log("A fost creat fisierul la data"+data);
    // res.send("A fost creat fisierul");
});
  
//   // verifica existenta unui fisier
//   var fs2= require('fs');
//   fs2.exists("/Users/razvan/angular/NewProject/AplicatieContracte/src/app/contract-module/documents/HtmlTemplateContract/template1.html", (exists) => {
//     console.log(exists ? "it's there" : "is not there!");
//     res.send(exists ? "it's there" : "is not there!");
//   });
  
//adauga ceva in fisier
  var fs1 = require('fs');  
  var continut = templateHtml.text;
  fs1.appendFile(filename, continut , (err) => {
      if (err) throw err;
      // res.send("Adaugat ceva in fisier")
      //console.log('The "data to append" was appended to file!');
  });
//   //citeste continut fisier
//   var fs4 = require('fs');
//       fs4.readFile("/Users/razvan/angular/NewProject/AplicatieContracte/src/app/contract-module/documents/HtmlTemplateContract/template1.html", function (err, data) {
        
//         if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read: " + data.toString());

// });

//sterge fisier
// var fs5 = require("fs");
// fs5.unlink("/Users/razvan/angular/NewProject/AplicatieContracte/src/app/contract-module/documents/HtmlTemplateContract/test999.txt", function(err) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File deleted successfully!");
// });



})


// app.get('/cvc/:id', (req, res) => {
//   res.send({name: "gigi", id: req.params.id})
// })
  
// app.get('/cv/:ID', (req, res) => {
// var user_id = req.param('ID');
// console.log(user_id );
//                             var mysql = require('mysql');

//                             var con = mysql.createConnection({
//                               host: "localhost",
//                               user: "root",
//                               password: "root",
//                               database: "hello"
//                             });

//                                 con.connect(function(err) {
//                                   if (err) throw err;
//                                   con.query('SELECT * FROM  cv where ID=? ', [user_id] , function (err, row, fields) {
//                                     if (err) throw err;
//                                     console.log(row);	
//                                     return res.json(row);
//                                     res.send(row);

//                                 })
                                
    
// });
// })


// app.get('/', (req, res) => {
//                             var mysql = require('mysql');

//                             var con = mysql.createConnection({
//                               host: "localhost",
//                               user: "root",
//                               password: "root",
//                               database: "hello"
//                             });

//                                 con.connect(function(err) {
//                                   if (err) throw err;
//                                   con.query("SELECT * FROM cv order by ID DESC ", function (err, row, fields) {
//                                     if (err) throw err;
//                                     console.log(row);	
//                                     return res.json(row);
//                                     res.send(row);

//                                 })
                                
    
// });
// })

// app.post('/', (req, res) => {
    
//         let content = req.body;

//         console.log(content);

//         let result = {
//             nume: `${content.nume}`,
//             prenume: `${content.prenume}`,
// 		dataNastere: `${content.dataNastere}`,
// 		diplome: `${content.diplome}`,
// 		Remarks: `${content.Remarks}`,
// 		AutoEval: `${content.AutoEval}`
//         }

// var post  = {nume: `${content.nume}`, prenume: `${content.prenume}`, dataNastere: `${content.dataNastere}`,
// diplome: `${content.diplome}`,Remarks: `${content.Remarks}`,AutoEval: `${content.AutoEval}`};
     
//         var query = connection.query('INSERT INTO cv SET ?', post, function (error, results, fields) {
//             if (error) throw error;
//             // Neat!
//           });
//           console.log(query.sql);
        
        
    
//         res.send(result)
//     })


app.listen(3001, () => console.log('Example app listening on port 3001!'))