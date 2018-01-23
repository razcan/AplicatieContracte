
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

            result = [] ;
            for (let value of Object.values(row)){
                
                    rezultat ={id: value.CategoryId,parentid: value.ParentId,name: value.CategoryName};
                    result.push(rezultat);                    
                
            }  
     
                var _makeTree = function(options) {
                var children, e, id, o, pid, temp, _i, _len, _ref;
                id = options.id || "id";
                pid = options.parentid || "parentid";
                children = options.children || "children";
                temp = {};
                o = [];
                _ref = options.q;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                e = _ref[_i];
                e[children] = [];
                temp[e[id]] = e;
                if (temp[e[pid]] != null) {
                temp[e[pid]][children].push(e);
                } else {
                o.push(e);
                }
                }
                return o;
                };
                
                var tree = _makeTree({q: result});
                
                console.log(JSON.stringify(tree));

        con.end();
        if (err) throw err;
    
        
        return row;

    })
});



app.listen(3001, () => console.log('Ierarhie Articole on port 3001!'))


