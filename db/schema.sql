CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `burgers`(

	`id` integer not null AUTO_INCREMENT,
	`burger_name` varchar(30) not null,
	`devoured` boolean not null,
	`createdDate` timestamp not null,
	PRIMARY KEY(id)
);
