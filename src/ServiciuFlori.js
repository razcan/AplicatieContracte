// Serviciu Articole

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

app.get('/LoadItems', (req, res) => {
                            var mysql = require('mysql');

                            var con = mysql.createConnection({
                              host: "localhost",
                              user: "root",
                              password: "root",
                              database: "shb"
                            });

                            con.connect(function(err) {
                                if (err) throw err;
                                con.query("SELECT * FROM Item order by ItemId DESC ", function (err, row, fields) {
                                if (err) throw err;
                                con.end();
                            //    console.log(row);	
                                return res.json(row);
                                res.send(row);

                            })


});
})

app.get('/LoadItems/:ItemId', (req, res) => {
    // var item_id = req.param('ItemId');
    var item_id = req.params.ItemId;
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "shb"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT * FROM Item where ItemId=?',item_id, function (err, row, fields) {
        if (err) throw err;
        con.end();
     //   console.log(row);	
        return res.json(row);
        res.send(row);

    })
});
})

app.post('/SaveItem', (req, res) => {

    let content = req.body;
    //console.log(content);
    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "shb"
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
            con.end();
            });
       
    } 
    else {
        //console.log('trebuie Insert');
    var query = con.query('INSERT INTO Item SET ?', post, function (error, results, fields) {
        if (error) throw error;
        con.end();
        });
    }
        //console.log(query.sql);
    });


    app.post('/DeleteItem/:ItemId', (req, res) => {
        var item_id = req.params.ItemId;
        //console.log(item_id);
        var mysql = require('mysql');
        var conDelete = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "shb"
        });

        conDelete.connect(function(err) {
            if (err) throw err ;
            conDelete.query('delete FROM Item where ItemId=?',item_id, function (err, row, fields) {
            if (err) return Observable.throw(err);
            conDelete.end();
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
      database: "shb"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT * FROM Property where PropertyId', function (err, row, fields) {
        if (err) throw err;
        con.end();
     //   console.log(row);	
        return res.json(row);
        res.send(row);

    })
});
})

app.post('/SaveProperty', (req, res) => {

    let content = req.body;
    //console.log(content);
    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "shb"
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
            database: "shb"
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



// Serviciu Articole

// Serviciu Parteneri

app.get('/LoadPartners', (req, res) => {
                            var mysql = require('mysql');

                            var con = mysql.createConnection({
                              host: "localhost",
                              user: "root",
                              password: "root",
                              database: "shb"
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
      database: "shb"
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
      database: "shb"
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
            database: "shb"
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
    

// Serviciu Parteneri

//Serviciu documente



// sterge fisier
app.get('/StergeFisier/:file', (req, res) => {
  var fs = require('fs');
  var filePath = '/Users/razvan/angular/NewProject/AplicatieContracte/src/uploads/'+req.params.file;
 // console.log('A fost sters documentul: '+filePath); 
  res.send(req.filePath);
  fs.unlinkSync(filePath);
});
// sterge fisier


// upload fisiere
// specify the folder
app.use(express.static(path.join(__dirname, 'uploads')));
// headers and content type
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var storage = multer.diskStorage({
  // destination
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
  //console.log('files', req.files);
  res.send(req.files);
});
// upload fisiere

app.get('/listTemplate', (req, res) => {
  var fs22 = require("fs"),
    path = require("path");

  var p = "/Users/razvan/angular/NewProject/AplicatieContracte/src/app/contract-module/documents/HtmlTemplateContract/"
  var rezultat = [];
  fs22.readdir(p, function (err, files) {
    if (err) {
      throw err;
    }

    files.map(function (file) {
      return path.join(p, file);
    }).filter(function (file) {
      return fs22.statSync(file).isFile();
    }).forEach(function (file) {
      var withoutFolder = (file.substring(107, 200));
      var withoutExt = withoutFolder.substr(0, withoutFolder.length - 5);
      rezultat.push(withoutExt);

    });
    //console.log(rezultat);
    return res.json(rezultat);

  });

})

// download file from server
app.get('/downloadFileAttached/:file', function(req, res){
  var file ='uploads/'+req.params.file;
 // console.log('Ai downloadat fisierul: '+file);
  res.download(file); // Set disposition and send it.

});

// download file from server

app.get('/loadTemplate/:nume', (req,res) => {
    //   //citeste continut fisier

   // res.send('loadTemplate' + req.params.nume);   
    var fisier="/Users/razvan/angular/NewProject/AplicatieContracte/src/app/contract-module/documents/HtmlTemplateContract/"+req.params.nume+".html";
    var fs4 = require('fs');
        fs4.readFile(fisier, function (err, data) {

          if (err) {
        return console.error(err);
     }
     return res.json(data.toString());

  });
})

// incarca lista fisiere atasate contract

  app.get('/loadAttachments', (req, res) => {
    var fs29 = require("fs"),
      path = require("path");
  
    var p = "/Users/razvan/angular/NewProject/AplicatieContracte/src/uploads/"
    var FileList = [];
    fs29.readdir(p, function (err, files) {
      if (err) {
        throw err;
      }
  
      files.map(function (file) {
        return path.join(p, file);
      }).filter(function (file) {
        return fs29.statSync(file).isFile();
      }).forEach(function (file) {
        var withoutFolder = (file.substring(64, 200));
        // FileList.push(withoutFolder);
        const stats = fs29.statSync(file)
        const fileSizeInBytes = stats.size
        //Convert the file size to megabytes (optional)
        const fileSizeInMegabytes = (fileSizeInBytes / 1000000.0).toFixed(2);

        FileList.push({FileName: withoutFolder,FilePath: file, FileSize: fileSizeInMegabytes+'Mb'});
  
      });
     // console.log(FileList);
      return res.json(FileList);
  
    });
  
  })
//salveaza template

app.post('/saveTemplate', (req, res) => {
  let templateHtml = req.body;
 // console.log(templateHtml.text);
 //console.log(templateHtml.TemplateName);

  var data = new Date();
  var filename = "/Users/razvan/angular/NewProject/AplicatieContracte/src/app/contract-module/documents/HtmlTemplateContract/" + templateHtml.TemplateName + ".html"
  //create file
  fs = require('fs');
  fs.writeFile(filename, "", function (err) {
    if (err)
      return console.log(err);
    // console.log("A fost creat fisierul la data"+data);
    // res.send("A fost creat fisierul");
  });

  //adauga ceva in fisier
  var fs1 = require('fs');
  var continut = templateHtml.text;
  fs1.appendFile(filename, continut, (err) => {
    if (err) throw err;
  });

})

//Serviciu documente


//Responsabil Contract

app.post('/SavePersonResponsible', (req, res) => {

    let content = req.body;
    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "shb"
    });

    var post  = { PersonId:  `${content.PersonId}`,
        Name: `${content.Name}`, Surname: `${content.Surname}`,
        CNP: `${content.CNP}`,EmplFunction: `${content.EmplFunction}`,
        EmplEmail: `${content.EmplEmail}`, Telephone: `${content.Telephone}`
    };    
    var post_insert  = { 
        Name: `${content.Name}`, Surname: `${content.Surname}`,
        CNP: `${content.CNP}`,EmplFunction: `${content.EmplFunction}`,
        EmplEmail: `${content.EmplEmail}`, Telephone: `${content.Telephone}`
    };
    if (content.PersonId > 0) {

        var query = con.query('UPDATE Person SET ? where PersonId= ?',[post,`${content.PersonId}`], function (error, results, fields) {
            con.end();
            if (error) throw error;
    });
       
    } 
    else {

        var query = con.query('INSERT INTO Person SET ?', post_insert, function (error, results, fields) {
            con.end();
            if (error) throw error;
            });            

}
});




app.get('/LoadPersonResponsible', (req, res) => {
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "shb"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT * FROM Person ', function (err, row, fields) {
        if (err) throw err;
        con.end();
        return res.json(row);
        res.send(row);

    })
});
})

app.get('/LoadPersonResponsible/:PersonId', (req, res) => {
    var PersonId = req.params.PersonId;
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "shb"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT * FROM Person where PersonId=?',PersonId, function (err, row, fields) {
        if (err) throw err;
        con.end();
     //   console.log(row);	
        return res.json(row);
        res.send(row);

    })
});
})
//Responsabil Contract



app.listen(3001, () => console.log('Example app listening on port 3001!'))