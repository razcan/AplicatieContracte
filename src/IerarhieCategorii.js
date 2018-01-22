
const express = require('express');
var multer  =   require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
const app = express()
app.use(cors())


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

        var matrice = Object.values(row);
        var Level0 = [] ;
 
        var Level1 = [] ;
        var Level1Parent = [] ;

          for (let value of Object.values(row)){
            if (value.ParentId=='0') {
                rezultat ={CategoryId: value.CategoryId,CategoryName: value.CategoryName,
                CategoryCode: value.CategoryCode,ParentId: value.ParentId,Child: value.Child};
                Level0.push(rezultat);
                Level1Parent.push(value.CategoryId);
                
            }
        }  
      //  console.log(Level1Parent);

        for (let value of Object.values(row)){
            for (i=0; i<=(Level1Parent.length);  i++) 
            {
                if (value.ParentId==Level1Parent[i]) 
                {
                    rezultat ={CategoryId: value.CategoryId,CategoryName: value.CategoryName,
                    CategoryCode: value.CategoryCode,ParentId: value.ParentId,Child: value.Child};
                    Level1.push(rezultat);
                    Level0[i].Child=rezultat;
                }
            }
        }
        //console.log(JSON.stringify(Level0));
        console.log(Level0);


        con.end();
        if (err) throw err;
    
        
        return row;

    })
});



app.listen(3001, () => console.log('Ierarhie Articole on port 3001!'))
