const express = require('express');
var multer  =   require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.get('/LoadCategories', (req, res) => {
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "SHB"
    });

con.connect(function(err) {
    
        if (err) throw err;
        con.query('SELECT * FROM Categories', function (err, row, fields) {

      
            var arr = Object.keys(row); 
            var varr = Object.values(row); 
            var varr22 = Object.entries(row); 

          var matrice = [] ;
           var  par1 = [] ;
// mie imi trebuie label si children si eventual data care poate sa fie CategoryCode
            for (let value of Object.values(row)){
                if (value.ParentId==0) {
              
                var rezultat ={CategoryId: value.CategoryId,CategoryName: value.CategoryName,
                    CategoryCode: value.CategoryCode,ParentId: value.ParentId,Child: value.Child};
                matrice.push(rezultat);
                   
                }
                if (value.ParentId==1)
                {
                        
                 par1.push({CategoryId: value.CategoryId,CategoryName: value.CategoryName,
                    CategoryCode: value.CategoryCode,ParentId: value.ParentId,Child: value.Child});
             
                }
            }

            matrice[0].Child=par1;
            console.log(JSON.stringify(matrice));

            res.send(matrice);
            
            con.end();
        if (err) throw err;
    
        
        return row;

    })
});

})

app.listen(3001, () => console.log('Ierarhie Articole on port 3001!'))

// [{
//     "CategoryId":1,
//     "CategoryName":"Marfa",
//     "CategoryCode":"M01",
//     "ParentId":"0",
//     "Child":
//         [{
//             "CategoryId":3,
//             "CategoryName":"Alimentare",
//             "CategoryCode":"A01",
//             "ParentId":"1"},
//         {
//             "CategoryId":4,
//             "CategoryName":"Cosmetice",
//             "CategoryCode":"C01",
//             "ParentId":"1"}
//         ]},
// {
//     "CategoryId":2,
//     "CategoryName":"Servicii",
//     "CategoryCode":"S01",
//     "ParentId":"0"
// }]