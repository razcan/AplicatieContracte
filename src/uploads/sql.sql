select * into PartnerBackup  from Partner


INSERT INTO `SHB`.`PartnerBackup` (`PartnerStatus`, `PartnerName`, `PartnerCode`, `PartnerInternalCode`, `PartnerType`, `ShortPartnerName`, `ComercialRegistration`, `FiscalRegistration`, `PartnerAddress`, `LegalForm`, `Notes`, `VATPayer`, `BankAccount`, `Delegate`, `Agent`, `BaseCurrency`, `Phone`, `Email`,`WEB`) 
select `PartnerStatus`, `PartnerName`, `PartnerCode`, `PartnerInternalCode`, `PartnerType`, `ShortPartnerName`, `ComercialRegistration`, `FiscalRegistration`, `PartnerAddress`, `LegalForm`, `Notes`, `VATPayer`, `BankAccount`, `Delegate`, `Agent`, `BaseCurrency`, `Phone`, `Email`,`WEB` from Workbook3


CREATE TABLE `PartnerBackup` (
  `PartnerId` int(11) NOT NULL AUTO_INCREMENT,
  `PartnerStatus` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `PartnerName` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `PartnerCode` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `PartnerInternalCode` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `PartnerType` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `ShortPartnerName` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `ComercialRegistration` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `FiscalRegistration` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `PartnerAddress` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `LegalForm` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `Notes` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `VATPayer` varchar(255) COLLATE latin1_general_cs NOT NULL,
  `BankAccount` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `Delegate` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `Agent` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `BaseCurrency` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `Phone` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `Email` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `WEB` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `LastModified` datetime DEFAULT NULL,
  PRIMARY KEY (`PartnerId`),
  UNIQUE KEY `PartnerName_UNIQUE` (`PartnerName`),
  UNIQUE KEY `PartnerCode_UNIQUE` (`PartnerCode`)
) ENGINE=InnoDB AUTO_INCREMENT=166 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;


app.post('/SavePartner', (req, res) => {

let content = req.body;
console.log(content);

var post  = {
PartnerStatus: `${content.PartnerStatus}`, PartnerName: `${content.PartnerName}`, PartnerCode: `${content.PartnerCode}`,
PartnerInternalCode: `${content.PartnerInternalCode}`,PartnerType: `${content.PartnerType}`,
ShortPartnerName: `${content.ShortPartnerName}`, ComercialRegistration: `${content.ComercialRegistration}`, 
FiscalRegistration: `${content.FiscalRegistration}`,
PartnerAddress: `${content.PartnerAddress}`, LegalForm: `${content.LegalForm}`, Notes: `${content.Notes}`,
VATPayer: `${content.VATPayer}`,BankAccount: `${content.BankAccount}`,
Delegate: `${content.Delegate}`, Agent: `${content.Agent}`, BaseCurrency: `${content.BaseCurrency}`,
Phone: `${content.Phone}`, Email: `${content.Email}`, WEB: `${content.WEB}`};


var query = connection.query('INSERT INTO Partner SET ?', post, function (error, results, fields) {
    if (error) throw error;
    });
    console.log(query.sql);
    res.send(result)
    })

});