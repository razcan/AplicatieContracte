
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

            ToateElem = [] ;

            for (let value of Object.values(row)){
                Child =[];
                rezultat ={id: value.CategoryId,parentid: value.ParentId,name: value.CategoryName, Child: Child };
                ToateElem.push(rezultat);                    
            
        }  
        
            partial = [] ;
            var level0id= [];
            var level1id= [];
            var level2id= [];

            for (i=0; i<ToateElem.length ;i++){
                if (ToateElem[i].parentid=='0') {
                    partial.push(ToateElem[i]);
                    level0id.push(ToateElem[i].id);
                } 
            }

            for (let value of Object.values(row)){
                for (i=0; i<=(level0id.length);  i++) 
                {
                    if (value.ParentId==level0id[i]) 
                    { 
                        Child =[];
                        rezultat ={CategoryId: value.CategoryId,CategoryName: value.CategoryName,
                        CategoryCode: value.CategoryCode,ParentId: value.ParentId,Child: Child};
                        level1id.push(value.CategoryId);
                        partial[i].Child.push(rezultat);
                       
                    }
                }
            }

            for (let value of Object.values(row)){
                for (i=0; i<=(level1id.length);  i++) 
                {
                    if (value.ParentId==level1id[i]) 
                    { 
                        Child =[];
                        rezultat ={CategoryId: value.CategoryId,CategoryName: value.CategoryName,
                        CategoryCode: value.CategoryCode,ParentId: value.ParentId,Child: Child};
                        level2id.push(value.CategoryId);
                        //partial[i].Child.push(rezultat);
                       // [partial[i].Child[i].Child].push(rezultat);
                    //    console.log(level1id); 
                    //console.log([partial[i].Child[i].Child]);
                    partial[i].Child[i].Child.push(rezultat);
                    // console.log(rezultat);
                    }
                }
            }

         // console.log(partial);
            console.log(JSON.stringify(partial));
            // console.log(level0id);
            // console.log(level1id);

            // result = [] ;
            // for (let value of Object.values(row)){
                
            //         rezultat ={id: value.CategoryId,parentid: value.ParentId,name: value.CategoryName};
            //         result.push(rezultat);                    
                
            // }  
     
            //     var _makeTree = function(options) {
            //     var children, e, id, o, pid, temp, _i, _len, _ref;
            //     id = options.id || "id";
            //     pid = options.parentid || "parentid";
            //     children = options.children || "children";
            //     temp = {};
            //     o = [];
            //     _ref = options.q;
            //     for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            //     e = _ref[_i];
            //     e[children] = [];
            //     temp[e[id]] = e;
            //     if (temp[e[pid]] != null) {
            //     temp[e[pid]][children].push(e);
            //     } else {
            //     o.push(e);
            //     }
            //     }
            //     return o;
            //     };
                
            //     var tree = _makeTree({q: result});
                
            //     console.log(JSON.stringify(tree));

        con.end();
        if (err) throw err;
    
        
        return row;

    })
});



app.listen(3001, () => console.log('Ierarhie Articole on port 3001!'))

