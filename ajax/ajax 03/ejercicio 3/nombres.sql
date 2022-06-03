

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `nombres` (
  `nombre` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `nombres` (`nombre`) VALUES
('Fernando'),
('Manuel'),
('Victor'),
('Marta'),
('MAr'),
('Federico'),
('Francisco'),
('Vicente'),
('Manuela'),
('Pepe'),
('Jose'),
('Jose MAria');
COMMIT;