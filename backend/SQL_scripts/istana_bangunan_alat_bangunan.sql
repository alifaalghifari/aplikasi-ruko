-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: istana_bangunan
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alat_bangunan`
--

DROP TABLE IF EXISTS `alat_bangunan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alat_bangunan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_barang` varchar(45) NOT NULL,
  `harga_beli` varchar(10) NOT NULL,
  `harga_jual` varchar(10) NOT NULL,
  `stok` int DEFAULT '0',
  `keterangan` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='list barang bangunan';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alat_bangunan`
--

LOCK TABLES `alat_bangunan` WRITE;
/*!40000 ALTER TABLE `alat_bangunan` DISABLE KEYS */;
INSERT INTO `alat_bangunan` VALUES (1,'semenas','65000','70000',45,'tonasa'),(2,'sekoop','45000','50000',45,'baru'),(3,'Nadine Hurley','ligula','mi,',7,'aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae'),(4,'Leroy Henderson','libero','turpis.',4,'turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut,'),(6,'Murphy Gardner','velit','a,',4,'tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing,'),(8,'Veronica Kinney','lobortis,','a,',6,'est, congue a, aliquet vel, vulputate eu, odio. Phasellus at'),(9,'Amanda Hobbs','sit','Phasellus',11,'venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien.'),(10,'Brett Kline','arcu','varius',5,'Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius.'),(11,'Linus Stevens','rutrum,','ut',10,'tellus non magna. Nam ligula elit, pretium et, rutrum non,'),(12,'Summer Ellis','Cras','id',10,'vitae erat vel pede blandit congue. In scelerisque scelerisque dui.'),(68,'Callie Olson','magna.','sed',9,'justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse'),(69,'Iris Flores','odio','purus.',12,'in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan'),(70,'Len Klein','amet,','non',4,'tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis,'),(71,'Juliet Burch','mauris.','sem',12,'Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum'),(72,'Karly Gillespie','sit','neque',6,'magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac'),(73,'Venus Mcintosh','congue','egestas,',8,'semper pretium neque. Morbi quis urna. Nunc quis arcu vel'),(74,'Dai Collier','Phasellus','vel',9,'massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices'),(75,'Kiona Nixon','et,','non',10,'enim consequat purus. Maecenas libero est, congue a, aliquet vel,'),(76,'Hasad Richards','dui.','Curae',11,'blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer'),(77,'Lucy Benton','fringilla','est,',8,'libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus'),(78,'Amanda Cash','pretium','dictum',5,'non justo. Proin non massa non ante bibendum ullamcorper. Duis'),(79,'Patience Horne','sem,','Aenean',7,'Curabitur ut odio vel est tempor bibendum. Donec felis orci,'),(80,'Abraham Thompson','arcu','eu',7,'quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis'),(81,'Halla Charles','mauris','justo.',7,'Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet'),(83,'semensa','65000','70000',45,'tonasa'),(84,'sekoosp','45000','50000',45,'baru'),(85,'semenasd','65000','70000',45,'tonasa'),(87,'aa','','',0,''),(89,'a','','',0,''),(90,'testing','20.000','25.000',5,'bagus'),(91,'jupiter','35000','40000',23,'mars'),(92,'matrs','34000','40000',34,'basuh');
/*!40000 ALTER TABLE `alat_bangunan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-01  9:27:10
