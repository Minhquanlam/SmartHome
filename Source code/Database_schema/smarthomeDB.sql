DROP DATABASE IF EXISTS SMARTHOME;
CREATE DATABASE IF NOT EXISTS SMARTHOME;
USE SMARTHOME;

CREATE TABLE IF NOT EXISTS LIGHT_VALUE
(
	  light_id  INT UNIQUE  NOT NULL  AUTO_INCREMENT,
	  light_number	INT,
    light_date  DATE	NOT NULL,
    light_time  TIME	NOT NULL,
    PRIMARY KEY   (light_id)
);

CREATE TABLE IF NOT EXISTS SOUND_VALUE
(
	  sound_id  INT UNIQUE  NOT NULL	AUTO_INCREMENT,
	  sound_number	INT,
    sound_date  DATE	NOT NULL,
    sound_time  TIME	NOT NULL,
    PRIMARY KEY   (sound_id)
);

CREATE TABLE IF NOT EXISTS TEMP_VALUE
(
	  temp_id INT UNIQUE  NOT NULL	AUTO_INCREMENT,
	  temp_number	INT,
    temp_date DATE	NOT NULL,
    temp_time TIME	NOT NULL,
    PRIMARY KEY (temp_id)
);

CREATE TABLE IF NOT EXISTS HUMID_VALUE
(
	  humid_id  INT UNIQUE  NOT NULL	AUTO_INCREMENT,
	  humid_number	INT,
    humid_date  DATE	NOT NULL,
    humid_time  TIME	NOT NULL,
    PRIMARY KEY (humid_id)
);

CREATE TABLE IF NOT EXISTS REPORT
(
	  rp_date DATE	NOT NULL,
    rp_time TIME	NOT NULL,  
    light_number	INT FOREIGN KEY REFERENCES LIGHT_VALUE(light_number)
    sound_number	INT FOREIGN KEY REFERENCES SOUND_VALUE(sound_number)
    temp_number  INT FOREIGN KEY REFERENCES TEMP_VALUE(temp_number)
    humid_number INT FOREIGN KEY REFERENCES HUMID_VALUE(humid_number)
    PRIMARY KEY   (id)
);

CREATE TABLE IF NOT EXISTS USER
(
    username  VARCHAR  UNIQUE NOT NULL,
    password  VARCHAR
    PRIMARY KEY (username)
);


-- DROP TRIGGER IF EXISTS after_light_insertion;
-- DROP TRIGGER IF EXISTS after_temp_insertion;
-- DROP TRIGGER IF EXISTS after_sound_insertion;
-- DELIMITER $$
-- CREATE TRIGGER after_light_insertion
-- AFTER INSERT
-- ON `LIGHT_VALUE` FOR EACH ROW
-- BEGIN
--   IF NEW.light_id IS NOT NULL THEN
--     INSERT INTO REPORT(rp_date, rp_time, light_number, sound_number, temp_number, humid_number)
--     VALUES(NEW.light_date, NEW.light_time, NEW.light_number, NULL, NULL, NULL);
--   END IF;
-- END$$
-- CREATE TRIGGER after_temp_insertion
-- AFTER INSERT
-- ON `TEMP_VALUE` FOR EACH ROW
-- BEGIN
--   IF NEW.temp_id IS NOT NULL THEN
--     INSERT INTO REPORT(rp_date, rp_time, light_number, sound_number, temp_number, humid_number)
--     VALUES(NEW.temp_date, NEW.temp_time, NULL, NULL, NEW.temp_number, NULL);
--   END IF;
-- END$$
-- CREATE TRIGGER after_sound_insertion
-- AFTER INSERT
-- ON `SOUND_VALUE` FOR EACH ROW
-- BEGIN
--   IF NEW.sound_id IS NOT NULL THEN
--     INSERT INTO REPORT(rp_date, rp_time, light_number, sound_number, temp_number, humid_number)
--     VALUES(NEW.sound_date, NEW.sound_time, NULL, NEW.sound_number, NULL, NULL);
--   END IF;
-- END$$
-- DELIMITER ;