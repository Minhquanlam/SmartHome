/* Create database */
DROP DATABASE IF EXISTS SMARTHOME;
CREATE DATABASE IF NOT EXISTS SMARTHOME;
USE SMARTHOME;

CREATE TABLE IF NOT EXISTS LIGHT_VALUE
(
	light_id		INT UNIQUE	AUTO_INCREMENT,
	light_number	INT,
    light_date		DATE	NOT NULL,
    light_time		TIME	NOT NULL
);

CREATE TABLE IF NOT EXISTS SOUND_VALUE
(
	sound_id		INT	UNIQUE	AUTO_INCREMENT,
	sound_number	INT,
    sound_date		DATE	NOT NULL,
    sound_time		TIME	NOT NULL
);

CREATE TABLE IF NOT EXISTS GAS_VALUE
(
	gas_id			INT	UNIQUE	AUTO_INCREMENT,
	gas_number		INT,
    gas_date		DATE	NOT NULL,
    gas_time		TIME	NOT NULL
);

CREATE TABLE IF NOT EXISTS REPORT
(
	id				INT UNIQUE	AUTO_INCREMENT,
	rp_date			DATE	NOT NULL,
    rp_time			TIME	NOT NULL,  
    light_number	INT,
    sound_number	INT,
    gas_number		INT
);

DROP TRIGGER IF EXISTS after_light_insertion;
DROP TRIGGER IF EXISTS after_gas_insertion;
DROP TRIGGER IF EXISTS after_sound_insertion;
DELIMITER $$
CREATE TRIGGER after_light_insertion
AFTER INSERT
ON `LIGHT_VALUE` FOR EACH ROW
BEGIN
  IF NEW.light_id IS NOT NULL THEN
    INSERT INTO REPORT(rp_date, rp_time, light_number, sound_number, gas_number)
    VALUES(NEW.light_date, NEW.light_time, NEW.light_number, NULL, NULL);
  END IF;
END$$
CREATE TRIGGER after_gas_insertion
AFTER INSERT
ON `GAS_VALUE` FOR EACH ROW
BEGIN
  IF NEW.gas_id IS NOT NULL THEN
    INSERT INTO REPORT(rp_date, rp_time, light_number, sound_number, gas_number)
    VALUES(NEW.gas_date, NEW.gas_time, NULL, NULL, NEW.gas_number);
  END IF;
END$$
CREATE TRIGGER after_sound_insertion
AFTER INSERT
ON `SOUND_VALUE` FOR EACH ROW
BEGIN
  IF NEW.sound_id IS NOT NULL THEN
    INSERT INTO REPORT(rp_date, rp_time, light_number, sound_number, gas_number)
    VALUES(NEW.sound_date, NEW.sound_time, NULL, NEW.sound_number, NULL);
  END IF;
END$$
DELIMITER ;


/* Add sample data */
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(1, '2022-10-23', '23:12:04');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(2, '2022-10-23', '23:12:14');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(3, '2022-10-23', '23:12:24');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(4, '2022-10-23', '23:12:34');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(5, '2022-10-23', '23:12:44');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(6, '2022-10-23', '23:12:54');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(7, '2022-10-23', '23:13:04');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(8, '2022-10-23', '23:13:14');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(9, '2022-10-23', '23:13:24');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(10, '2022-10-23', '23:13:34');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(12, '2022-10-23', '23:13:44');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(14, '2022-10-23', '23:13:54');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(16, '2022-10-23', '23:14:04');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(18, '2022-10-23', '23:14:14');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(20, '2022-10-23', '23:14:24');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(17, '2022-10-23', '23:14:34');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(14, '2022-10-23', '23:14:44');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(11, '2022-10-23', '23:14:54');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(16, '2022-10-23', '23:15:04');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(21, '2022-10-23', '23:15:14');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(26, '2022-10-23', '23:15:24');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(31, '2022-10-23', '23:15:34');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(36, '2022-10-23', '23:15:44');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(34, '2022-10-23', '23:15:54');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(33, '2022-10-23', '23:16:04');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(32, '2022-10-23', '23:16:14');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(31, '2022-10-23', '23:16:24');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(41, '2022-10-23', '23:16:34');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(51, '2022-10-23', '23:16:44');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(61, '2022-10-23', '23:16:54');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(71, '2022-10-23', '23:17:04');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(81, '2022-10-23', '23:17:14');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(75, '2022-10-23', '23:17:24');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(69, '2022-10-23', '23:17:34');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(63, '2022-10-23', '23:17:44');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(57, '2022-10-23', '23:17:54');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(52, '2022-10-23', '23:18:04');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(47, '2022-10-23', '23:18:14');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(48, '2022-10-23', '23:18:24');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(49, '2022-10-23', '23:18:34');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(50, '2022-10-23', '23:18:44');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(70, '2022-10-23', '23:18:54');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(80, '2022-10-23', '23:19:04');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(90, '2022-10-23', '23:19:14');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(100, '2022-10-23', '23:19:24');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(75, '2022-10-23', '23:19:34');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(50), '2022-10-23', '23:19:44');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(25, '2022-10-23', '23:19:54');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(20, '2022-10-23', '23:20:04');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(15, '2022-10-23', '23:20:14');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(10, '2022-10-23', '23:20:24');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(5, '2022-10-23', '23:20:34');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(7, '2022-10-23', '23:20:44');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(9, '2022-10-23', '23:20:54');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(13, '2022-10-23', '23:21:04');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(17, '2022-10-23', '23:21:14');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(23, '2022-10-23', '23:21:24');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(29, '2022-10-23', '23:21:34');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(37, '2022-10-23', '23:21:44');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(43, '2022-10-23', '23:21:54');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(45, '2022-10-23', '23:22:04');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(42, '2022-10-23', '23:22:14');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(76, '2022-10-23', '23:22:24');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(63, '2022-10-23', '23:22:34');
INSERT INTO LIGHT_VALUE(light_number, light_date, light_time)
	VALUES(50, '2022-10-23', '23:22:44');

INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(1, '2022-10-23', '23:12:04');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(2, '2022-10-23', '23:12:14');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(3, '2022-10-23', '23:12:24');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(4, '2022-10-23', '23:12:34');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(5, '2022-10-23', '23:12:44');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(6, '2022-10-23', '23:12:54');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(7, '2022-10-23', '23:13:04');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(8, '2022-10-23', '23:13:14');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(9, '2022-10-23', '23:13:24');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(10, '2022-10-23', '23:13:34');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(12, '2022-10-23', '23:13:44');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(14, '2022-10-23', '23:13:54');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(16, '2022-10-23', '23:14:04');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(18, '2022-10-23', '23:14:14');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(20, '2022-10-23', '23:14:24');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(17, '2022-10-23', '23:14:34');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(14, '2022-10-23', '23:14:44');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(11, '2022-10-23', '23:14:54');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(16, '2022-10-23', '23:15:04');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(21, '2022-10-23', '23:15:14');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(26, '2022-10-23', '23:15:24');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(31, '2022-10-23', '23:15:34');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(36, '2022-10-23', '23:15:44');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(34, '2022-10-23', '23:15:54');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(33, '2022-10-23', '23:16:04');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(32, '2022-10-23', '23:16:14');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(31, '2022-10-23', '23:16:24');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(41, '2022-10-23', '23:16:34');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(51, '2022-10-23', '23:16:44');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(61, '2022-10-23', '23:16:54');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(71, '2022-10-23', '23:17:04');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(81, '2022-10-23', '23:17:14');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(75, '2022-10-23', '23:17:24');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(69, '2022-10-23', '23:17:34');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(63, '2022-10-23', '23:17:44');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(57, '2022-10-23', '23:17:54');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(52, '2022-10-23', '23:18:04');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(47, '2022-10-23', '23:18:14');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(48, '2022-10-23', '23:18:24');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(49, '2022-10-23', '23:18:34');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(50, '2022-10-23', '23:18:44');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(70, '2022-10-23', '23:18:54');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(80, '2022-10-23', '23:19:04');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(90, '2022-10-23', '23:19:14');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(100, '2022-10-23', '23:19:24');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(75, '2022-10-23', '23:19:34');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(50), '2022-10-23', '23:19:44');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(25, '2022-10-23', '23:19:54');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(20, '2022-10-23', '23:20:04');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(15, '2022-10-23', '23:20:14');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(10, '2022-10-23', '23:20:24');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(5, '2022-10-23', '23:20:34');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(7, '2022-10-23', '23:20:44');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(9, '2022-10-23', '23:20:54');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(13, '2022-10-23', '23:21:04');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(17, '2022-10-23', '23:21:14');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(23, '2022-10-23', '23:21:24');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(29, '2022-10-23', '23:21:34');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(37, '2022-10-23', '23:21:44');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(43, '2022-10-23', '23:21:54');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(45, '2022-10-23', '23:22:04');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(42, '2022-10-23', '23:22:14');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(76, '2022-10-23', '23:22:24');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(63, '2022-10-23', '23:22:34');
INSERT INTO GAS_VALUE(gas_number, gas_date, gas_time)
	VALUES(50, '2022-10-23', '23:22:44');

INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(1, '2022-10-23', '23:12:04');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(2, '2022-10-23', '23:12:14');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(3, '2022-10-23', '23:12:24');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(4, '2022-10-23', '23:12:34');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(5, '2022-10-23', '23:12:44');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(6, '2022-10-23', '23:12:54');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(7, '2022-10-23', '23:13:04');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(8, '2022-10-23', '23:13:14');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(9, '2022-10-23', '23:13:24');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(10, '2022-10-23', '23:13:34');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(12, '2022-10-23', '23:13:44');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(14, '2022-10-23', '23:13:54');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(16, '2022-10-23', '23:14:04');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(18, '2022-10-23', '23:14:14');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(20, '2022-10-23', '23:14:24');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(17, '2022-10-23', '23:14:34');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(14, '2022-10-23', '23:14:44');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(11, '2022-10-23', '23:14:54');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(16, '2022-10-23', '23:15:04');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(21, '2022-10-23', '23:15:14');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(26, '2022-10-23', '23:15:24');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(31, '2022-10-23', '23:15:34');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(36, '2022-10-23', '23:15:44');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(34, '2022-10-23', '23:15:54');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(33, '2022-10-23', '23:16:04');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(32, '2022-10-23', '23:16:14');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(31, '2022-10-23', '23:16:24');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(41, '2022-10-23', '23:16:34');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(51, '2022-10-23', '23:16:44');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(61, '2022-10-23', '23:16:54');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(71, '2022-10-23', '23:17:04');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(81, '2022-10-23', '23:17:14');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(75, '2022-10-23', '23:17:24');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(69, '2022-10-23', '23:17:34');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(63, '2022-10-23', '23:17:44');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(57, '2022-10-23', '23:17:54');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(52, '2022-10-23', '23:18:04');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(47, '2022-10-23', '23:18:14');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(48, '2022-10-23', '23:18:24');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(49, '2022-10-23', '23:18:34');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(50, '2022-10-23', '23:18:44');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(70, '2022-10-23', '23:18:54');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(80, '2022-10-23', '23:19:04');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(90, '2022-10-23', '23:19:14');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(100, '2022-10-23', '23:19:24');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(75, '2022-10-23', '23:19:34');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(50), '2022-10-23', '23:19:44');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(25, '2022-10-23', '23:19:54');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(20, '2022-10-23', '23:20:04');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(15, '2022-10-23', '23:20:14');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(10, '2022-10-23', '23:20:24');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(5, '2022-10-23', '23:20:34');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(7, '2022-10-23', '23:20:44');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(9, '2022-10-23', '23:20:54');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(13, '2022-10-23', '23:21:04');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(17, '2022-10-23', '23:21:14');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(23, '2022-10-23', '23:21:24');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(29, '2022-10-23', '23:21:34');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(37, '2022-10-23', '23:21:44');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(43, '2022-10-23', '23:21:54');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(45, '2022-10-23', '23:22:04');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(42, '2022-10-23', '23:22:14');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(76, '2022-10-23', '23:22:24');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(63, '2022-10-23', '23:22:34');
INSERT INTO SOUND_VALUE(sound_number, sound_date, sound_time)
	VALUES(50, '2022-10-23', '23:22:44');