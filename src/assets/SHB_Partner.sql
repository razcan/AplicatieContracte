-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: SHB
-- ------------------------------------------------------
-- Server version	5.7.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Partner`
--

DROP TABLE IF EXISTS `Partner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Partner` (
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
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Partner`
--

LOCK TABLES `Partner` WRITE;
/*!40000 ALTER TABLE `Partner` DISABLE KEYS */;
INSERT INTO `Partner` VALUES (124,'Activ','rest','tere','rere','Client','wer','wer','wer','wer','SRL','werwerwe','Da','werwrer2','2323','234','EUR','23423','234','234',NULL);
/*!40000 ALTER TABLE `Partner` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-07 16:15:31
