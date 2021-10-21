-- MariaDB dump 10.19  Distrib 10.5.9-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: aplicatie
-- ------------------------------------------------------
-- Server version	10.5.9-MariaDB-1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `PropunereProiect`
--

DROP TABLE IF EXISTS `PropunereProiect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PropunereProiect` (
  `idPropunere` int(4) NOT NULL AUTO_INCREMENT,
  `idUser` int(4) NOT NULL,
  `titlu` varchar(30) NOT NULL,
  `acronim` varchar(10) DEFAULT NULL,
  `descriere` text NOT NULL,
  `potential_inovare` text DEFAULT NULL,
  `impact_asteptat` text DEFAULT NULL,
  `avantaj_competitiv` text DEFAULT NULL,
  `estimareBuget` int(10) DEFAULT NULL,
  `realizari` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idPropunere`),
  KEY `PropunereProiect_fk0` (`idUser`),
  CONSTRAINT `PropunereProiect_fk0` FOREIGN KEY (`idUser`) REFERENCES `User` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PropunereProiect`
--

LOCK TABLES `PropunereProiect` WRITE;
/*!40000 ALTER TABLE `PropunereProiect` DISABLE KEYS */;
INSERT INTO `PropunereProiect` VALUES (1,1,'Propunere Proiect','PP','O descriere','Un potential de inovare','Un impact Asteptat','Un avantaj competitiv',NULL,NULL);
INSERT INTO `PropunereProiect` VALUES (2,1,'Propunere Proiect 2','PP2','Alta descriere','Un potential de invorare 2','Un impact Asteptat 2','Un avantaj competitiv 2',NULL,NULL);
INSERT INTO `PropunereProiect` VALUES (3,1,'PP3','pp3','o descriere','un potential inov 3','un impact astept 3','un avantaj competitiv3',NULL,NULL);
/*!40000 ALTER TABLE `PropunereProiect` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Propunere_Partener`
--

DROP TABLE IF EXISTS `Propunere_Partener`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Propunere_Partener` (
  `idCerere` int(4) NOT NULL AUTO_INCREMENT,
  `idPropunere` int(4) NOT NULL,
  `idParteneri` int(4) NOT NULL,
  `dataLimita` date DEFAULT NULL,
  `stare` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`idCerere`),
  KEY `Propunere_Partener_fk0` (`idPropunere`),
  KEY `Propunere_Partener_fk1` (`idParteneri`),
  CONSTRAINT `Propunere_Partener_fk0` FOREIGN KEY (`idPropunere`) REFERENCES `PropunereProiect` (`idPropunere`),
  CONSTRAINT `Propunere_Partener_fk1` FOREIGN KEY (`idParteneri`) REFERENCES `Partener` (`idPartener`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Propunere_Partener`
--

LOCK TABLES `Propunere_Partener` WRITE;
/*!40000 ALTER TABLE `Propunere_Partener` DISABLE KEYS */;
/*!40000 ALTER TABLE `Propunere_Partener` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `idUser` int(4) NOT NULL AUTO_INCREMENT,
  `numeUser` varchar(25) NOT NULL,
  `prenumeUser` varchar(25) NOT NULL,
  `facultate` varchar(100) NOT NULL,
  `email` varchar(40) NOT NULL,
  `telefon` varchar(14) NOT NULL,
  `parola` varchar(30) NOT NULL,
  `username` varchar(100) NOT NULL,
  `realizari` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `telefon` (`telefon`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'Anton-Aanei','Andrei','AC','stars.keeper@yahoo.com','0757170212','octavian21','ratonu','1.O realizare \\n2.O alta realizare');
INSERT INTO `User` VALUES (11,'Codau','Eduard','AC TUIASI','edi@yahoo.com','0070707','aiaaasd','aedyaelx',NULL);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Partener`
--

DROP TABLE IF EXISTS `Partener`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Partener` (
  `idPartener` int(4) NOT NULL AUTO_INCREMENT,
  `tipPartener` varchar(25) NOT NULL,
  `specializare` varchar(25) DEFAULT NULL,
  `rol` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`idPartener`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Partener`
--

LOCK TABLES `Partener` WRITE;
/*!40000 ALTER TABLE `Partener` DISABLE KEYS */;
INSERT INTO `Partener` VALUES (1,'cercetare','Design Patterns',NULL);
INSERT INTO `Partener` VALUES (115,'Partener de cercetare','sdafsda','asdfdas');
INSERT INTO `Partener` VALUES (116,'Partener de cercetare','sdafsda','asdfdas');
INSERT INTO `Partener` VALUES (117,'Partener de cercetare','sdafsda','asdfdas');
/*!40000 ALTER TABLE `Partener` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-28  9:39:32
