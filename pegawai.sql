-- MySQL Script generated by MySQL Workbench
-- Fri Jan 19 08:36:40 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.` employees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.` employees` (
  `id_pegawai` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `gender` CHAR(100) NULL,
  `phone` VARCHAR(45) NULL,
  `address` TEXT(150) NULL,
  `email` VARCHAR(45) NULL,
  `status` ENUM("manager", "pegawai") NULL,
  `hired_on` DATE NULL,
  `timestamp` TIMESTAMP(100) NULL,
  PRIMARY KEY (`id_pegawai`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
