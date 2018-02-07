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
-- Table structure for table `Contract`
--

DROP TABLE IF EXISTS `Contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Contract` (
  `ContractId` int(11) NOT NULL AUTO_INCREMENT,
  `PartnerId` int(11) NOT NULL,
  `ContractTypeId` int(11) NOT NULL,
  `ContractNumber` varchar(45) COLLATE latin1_general_cs NOT NULL,
  `ContractCode` varchar(45) COLLATE latin1_general_cs DEFAULT NULL,
  `SigningDate` datetime DEFAULT NULL,
  `StartDate` datetime NOT NULL,
  `EndDate` datetime NOT NULL,
  `ContractStatus` varchar(45) COLLATE latin1_general_cs DEFAULT NULL,
  `ContractCategoryId` int(11) DEFAULT NULL,
  `DepartmentId` int(11) DEFAULT NULL,
  `ResponsiblePersonId` int(11) DEFAULT NULL,
  `Exp_Inc_Class` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `CostCenterId` int(11) DEFAULT NULL,
  `CashFlowLineId` int(11) DEFAULT NULL,
  `SelfExtension` varchar(45) COLLATE latin1_general_cs NOT NULL,
  `DaysNotification` int(11) DEFAULT NULL,
  `NotificationDate` datetime DEFAULT NULL,
  `ContractAddress` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  `Phone` varchar(45) COLLATE latin1_general_cs DEFAULT NULL,
  `Email` varchar(45) COLLATE latin1_general_cs DEFAULT NULL,
  `PartnerPersonResponsible` varchar(200) COLLATE latin1_general_cs DEFAULT NULL,
  `Remarks` varchar(255) COLLATE latin1_general_cs DEFAULT NULL,
  PRIMARY KEY (`ContractId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contract`
--

LOCK TABLES `Contract` WRITE;
/*!40000 ALTER TABLE `Contract` DISABLE KEYS */;
/*!40000 ALTER TABLE `Contract` ENABLE KEYS */;
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
