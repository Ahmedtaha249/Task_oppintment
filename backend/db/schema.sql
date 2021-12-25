CREATE DATABASE IF NOT EXISTS oppointment;
USE oppointment ;

CREATE Table IF NOT EXISTS buyer(
    buyer_id INT NOT NULL AUTO_INCREMENT,
    firstName varchar(255) NOT NULL ,
    lastName  varchar(255) NOT NULL,
    age int  NULL,
    city varchar(45),
   email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
   PRIMARY KEY(buyer_id)
)


