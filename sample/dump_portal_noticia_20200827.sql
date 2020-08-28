-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: db_portal_noticia
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_noticia`
--

DROP TABLE IF EXISTS `tbl_noticia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_noticia` (
  `noticia_id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `corpo_noticia` text NOT NULL,
  `data_criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  `resumo_noticia` varchar(200) DEFAULT NULL,
  `autor` varchar(100) DEFAULT NULL,
  `data_noticia` date DEFAULT NULL,
  PRIMARY KEY (`noticia_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_noticia`
--

LOCK TABLES `tbl_noticia` WRITE;
/*!40000 ALTER TABLE `tbl_noticia` DISABLE KEYS */;
INSERT INTO `tbl_noticia` VALUES (1,'Barco Afunda no Litoral','Barco de pescadores afunda no litoral de Santos nesse último final de semana','2020-08-18 22:15:56',NULL,'Caio Morais',NULL),(2,'Epic Games Processa Apple','A Epic Games está processando a Apple pela remoção do jogo Fortnite da plataforma App Store','2020-08-18 22:28:17',NULL,'Caio Morais',NULL),(3,'Senado Derruba Veto 17','Nesta última quarta-feira o Senado derrubou o veto 17 realizado pelo governo federal em relação ao aumento de salário dos servidores públicos.','2020-08-20 23:09:52',NULL,'Caio Morais',NULL),(4,'Rússia Anuncia Produção da Vacina','Após a descoberta da Vacina para a COVID-19, o governo da Rússia anuncia a produção para aplicação em profissionais de saúde.','2020-08-20 23:13:08','A Russia a descoberto da Vacina para a Covid-19, ela se chama Sputnik-V','Caio Morais',NULL),(5,'Congresso Mantém Veto 17','Após o Senado Federal derrubar o Veto 17 realizado pelo governo federal o congresso com seu direito constitucional escolher manter o veto.','2020-08-22 20:57:06','A Câmara dos Deputados decidiu manter o veto que impedia o aumento de servidores públicos durante a pandemia.','Caio Morais',NULL),(6,'Trailer de Batman será revelado','Será divulgado nesse sábado o trailer do aguardado filme do Homem Morcego previsto para lançar no ano que vem 2021.','2020-08-22 21:48:28','O trailer do novo filme do Batman será lançado nesse sábado','Caio Morais','2020-08-22'),(7,'Novo Jogo no universo de Batman Arkham','Nesse sábado no evento virtual da DC chamado DC Fandom foi anunciado um novo jogo situado no universo dos famosos jogos da série Batman Arkham. Porém nesse jogo iremos controlar a Bat Família ao invés do homem morcego.','2020-08-22 22:30:07','Um novo jogo foi anunciado nesse sábado situado no universo dos jogos da série Batman Arkham','Caio Morais','2020-08-22'),(8,'Deputada suspeita de assassinato','Uma deputada foi denunciada por assassinato nesse últimos domingo. A vítima era o seu marido.','2020-08-24 22:24:26','Nesse último domingo uma deputada ficou como suspeita de um assassinato','Caio Morais','2020-08-24'),(9,'Conflito entre Guedes e Bolsonaro','Nesta quarta-feira em conversa com apoiadores, Bolsonaro disse rejeitar o plano de seu ministro da economia Paulo Guedes para o Renda Brasil, programa de assistência social do governo federal.																														\r\n							\r\n							\r\n							','2020-08-26 22:32:15','Bolsonaro diz rejeitar plano de Guedes para o Renda Brasil','Caio Morais','2020-08-26');
/*!40000 ALTER TABLE `tbl_noticia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-27 22:37:51
