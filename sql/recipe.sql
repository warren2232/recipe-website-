-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for recipe
CREATE DATABASE IF NOT EXISTS `recipe` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `recipe`;

-- Dumping structure for table recipe.user_account
CREATE TABLE IF NOT EXISTS `user_account` (
  `User_Account_id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(50) NOT NULL DEFAULT '0',
  `User_Password` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`User_Account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table recipe.user_account: ~9 rows (approximately)
/*!40000 ALTER TABLE `user_account` DISABLE KEYS */;
INSERT INTO `user_account` (`User_Account_id`, `Username`, `User_Password`) VALUES
	(1, 'SteelSeries', '23432432'),
	(2, 'Razer', '4324234324'),
	(3, 'Logitech', '4234324324'),
	(4, 'waaren', 'fewefw'),
	(5, 'fewfewf', 'wfwef');
/*!40000 ALTER TABLE `user_account` ENABLE KEYS */;

-- Dumping structure for table recipe.user_details
CREATE TABLE IF NOT EXISTS `user_details` (
  `Username` varchar(20) NOT NULL,
  `Fullname` varchar(16) NOT NULL,
  `Telephone_No` varchar(50) NOT NULL,
  `ClientAddress` varchar(50) NOT NULL,
  PRIMARY KEY (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table recipe.user_details: ~9 rows (approximately)
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
INSERT INTO `user_details` (`Username`, `Fullname`, `Telephone_No`, `ClientAddress`) VALUES
	('Logitech', 'Harry', '4234324324', 'Port-Louis'),
	('popopopopop', 'wef', 'ewf', 'fwefwe'),
	('Razer', 'Tom', '4324234324', 'Port-Louis'),
	('SteelSeries', 'Warren', '23432432', 'Port-Louis'),
	('waaren', 'wfewfew', 'efwewf', 'fewefw');
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;

-- Dumping structure for table recipe.user_recipe
CREATE TABLE IF NOT EXISTS `user_recipe` (
  `Recipe_id` int(11) NOT NULL AUTO_INCREMENT,
  `Recipe_Description` mediumtext NOT NULL DEFAULT '0',
  `Recipe_title` varchar(50) NOT NULL DEFAULT '0',
  `image_url` varchar(50) DEFAULT '0',
  `Username` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Recipe_id`),
  KEY `Username` (`Username`),
  CONSTRAINT `FK_user_recipe_user_details` FOREIGN KEY (`Username`) REFERENCES `user_details` (`Username`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table recipe.user_recipe: ~29 rows (approximately)
/*!40000 ALTER TABLE `user_recipe` DISABLE KEYS */;
INSERT INTO `user_recipe` (`Recipe_id`, `Recipe_Description`, `Recipe_title`, `image_url`, `Username`) VALUES
	(1, 'In a large skillet over medium-high heat, cook onion until soft, 6 minutes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted.In a large skillet over medium-high heat, cook onion until soft, 6 minutes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted.In a large skillet over medium-high heat, cook onion until soft, 6 minutes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted.In a large skillet over medium-high heat, cook onion until soft, 6 minutes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted.tes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted.tes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted.tes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted.tes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted.tes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted.tes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted.tes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted.', 'Cheesy Ground Beef Tacos', '1.png', 'SteelSeries'),
	(2, 'In a small bowl whisk together honey, orange juice, and lemon zest. Add fruit to a large bowl and pour over dressing, tossing gently to combine. Chill until ready to serve.In a small bowl whisk together honey, orange juice, and lemon zest. Add fruit to a large bowl and pour over dressing, tossing gently to combine. Chill until ready to serve.In a small bowl whisk together honey, orange juice, and lemon zest. Add fruit to a large bowl and pour over dressing, tossing gently to combine. Chill until ready to serve.In a small bowl whisk together honey, orange juice, and lemon zest. Add fruit to a large bowl and pour over dressing, tossing gently to combine. Chill until ready to serve.In a small bowl whisk together honey, orange juice, and lemon zest. Add fruit to a large bowl and pour over dressing, tossing gently to combine. Chill until ready to serve.In a small bowl whisk together honey, orange juice, and lemon zest. Add fruit to a large bowl and pour over dressing, tossing gently to combine. Chill until ready to serve.In a small bowl whisk together honey, orange juice, and lemon zest. Add fruit to a large bowl and pour over dressing, tossing gently to combine. Chill until ready to serve.In a small bowl whisk together honey, orange juice, and lemon zest. Add fruit to a large bowl and pour over dressing, tossing gently to combine. Chill until ready to serve.', 'Fruit salade', '2.png', 'Razer'),
	(3, 'In a medium bowl, whisk together almond flour, cream cheese, eggs, and lemon zest until smooth.In a medium bowl, whisk together almond flour, cream cheese, eggs, and lemon zest until smooth.In a medium bowl, whisk together almond flour, cream cheese, eggs, and lemon zest until smooth.In a medium bowl, whisk together almond flour, cream cheese, eggs, and lemon zest until smooth.In a medium bowl, whisk together almond flour, cream cheese, eggs, and lemon zest until smooth.In a medium bowl, whisk together almond flour, cream cheese, eggs, and lemon zest until smooth.In a medium bowl, whisk together almond flour, cream cheese, eggs, and lemon zest until smooth.In a medium bowl, whisk together almond flour, cream cheese, eggs, and lemon zest until smooth.In a medium bowl, whisk together almond flour, cream cheese, eggs, and lemon zest until smooth.In a medium bowl, whisk together almond flour, cream cheese, eggs, and lemon zest until smooth.', 'Keto pancakes', '3.png', 'Logitech'),
	(4, 'Preheat oven to 375°. Pat potatoes completely dry with paper towels. Poke potatoes all over with a fork, then rub with oil and sprinkle with salt. Place directly on oven racks and bake until pierced easily with a fork, about 1 hour. Place on a large baking sheet and let cool until cool enough to handle. Preheat oven to 375°. Pat potatoes completely dry with paper towels. Poke potatoes all over with a fork, then rub with oil and sprinkle with salt. Place directly on oven racks and bake until pierced easily with a fork, about 1 hour. Place on a large baking sheet and let cool until cool enough to handle. Preheat oven to 375°. Pat potatoes completely dry with paper towels. Poke potatoes all over with a fork, then rub with oil and sprinkle with salt. Place directly on oven racks and bake until pierced easily with a fork, about 1 hour. Place on a large baking sheet and let cool until cool enough to handle. Preheat oven to 375°. Pat potatoes completely dry with paper towels. Poke potatoes all over with a fork, then rub with oil and sprinkle with salt. Place directly on oven racks and bake until pierced easily with a fork, about 1 hour. Place on a large baking sheet and let cool until cool enough to handle. Preheat oven to 375°. Pat potatoes completely dry with paper towels. Poke potatoes all over with a fork, then rub with oil and sprinkle with salt. Place directly on oven racks and bake until pierced easily with a fork, about 1 hour. Place on a large baking sheet and let cool until cool enough to handle. Preheat oven to 375°. Pat potatoes completely dry with paper towels. Poke potatoes all over with a fork, then rub with oil and sprinkle with salt. Place directly on oven racks and bake until pierced easily with a fork, about 1 hour. Place on a large baking sheet and let cool until cool enough to handle. Preheat oven to 375°. Pat potatoes completely dry with paper towels. Poke potatoes all over with a fork, then rub with oil and sprinkle with salt. Place directly on oven racks and bake until pierced easily with a fork, about 1 hour. Place on a large baking sheet and let cool until cool enough to handle. Preheat oven to 375°. Pat potatoes completely dry with paper towels. Poke potatoes all over with a fork, then rub with oil and sprinkle with salt. Place directly on oven racks and bake until pierced easily with a fork, about 1 hour. Place on a large baking sheet and let cool until cool enough to handle. Preheat oven to 375°. Pat potatoes completely dry with paper towels. Poke potatoes all over with a fork, then rub with oil and sprinkle with salt. Place directly on oven racks and bake until pierced easily with a fork, about 1 hour. Place on a large baking sheet and let cool until cool enough to handle. Preheat oven to 375°. Pat potatoes completely dry with paper towels. Poke potatoes all over with a fork, then rub with oil and sprinkle with salt. Place directly on oven racks and bake until pierced easily with a fork, about 1 hour. Place on a large baking sheet and let cool until cool enough to handle. ', 'Baked Sweet potators', '', 'SteelSeries');
/*!40000 ALTER TABLE `user_recipe` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
