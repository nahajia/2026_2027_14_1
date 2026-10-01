-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Okt 01. 11:25
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `milliomosadatb`
--
CREATE DATABASE IF NOT EXISTS `milliomosadatb` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `milliomosadatb`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `eredmeny`
--

CREATE TABLE `eredmeny` (
  `eredmeny_id` int(11) NOT NULL,
  `eredmeny_jatekosid` int(11) NOT NULL,
  `eredmeny_datum` date NOT NULL,
  `eredmeny_temaid` int(11) NOT NULL,
  `eredmeny_elert` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `eredmeny`
--

INSERT INTO `eredmeny` (`eredmeny_id`, `eredmeny_jatekosid`, `eredmeny_datum`, `eredmeny_temaid`, `eredmeny_elert`) VALUES
(1, 1, '2026-09-28', 1, 4),
(2, 1, '2026-09-29', 1, 6);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jatekos`
--

CREATE TABLE `jatekos` (
  `jatekos_id` int(11) NOT NULL,
  `jatekos_felhnev` varchar(255) NOT NULL,
  `jatekos_jelszo` varchar(255) NOT NULL,
  `jatekos_admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `jatekos`
--

INSERT INTO `jatekos` (`jatekos_id`, `jatekos_felhnev`, `jatekos_jelszo`, `jatekos_admin`) VALUES
(1, 'pista', 'pista', 0),
(2, 'janos', 'janos', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kerdes`
--

CREATE TABLE `kerdes` (
  `kerdes_id` int(11) NOT NULL,
  `kerdes_szoveg` varchar(255) NOT NULL,
  `kerdes_jo` varchar(255) NOT NULL,
  `kerdes_rossz1` varchar(255) NOT NULL,
  `kerdes_rossz2` varchar(255) NOT NULL,
  `kerdes_rossz3` varchar(255) NOT NULL,
  `kerdes_temaid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kerdes`
--

INSERT INTO `kerdes` (`kerdes_id`, `kerdes_szoveg`, `kerdes_jo`, `kerdes_rossz1`, `kerdes_rossz2`, `kerdes_rossz3`, `kerdes_temaid`) VALUES
(2, 'Mi Franciaország fővárosa?', 'Párizs', 'London', 'Berlin', 'Madrid', 1),
(10, 'Melyik heységben van a Kékes-tető?', 'Mátra', 'Bükk', 'Zemplén', 'Badacsony', 1),
(11, 'Mikor kezdődött az első világháború?', '1914', '1939', '1918', '1953', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tema`
--

CREATE TABLE `tema` (
  `tema_id` int(11) NOT NULL,
  `tema_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `tema`
--

INSERT INTO `tema` (`tema_id`, `tema_nev`) VALUES
(1, 'földrajz'),
(2, 'történelem');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `eredmeny`
--
ALTER TABLE `eredmeny`
  ADD PRIMARY KEY (`eredmeny_id`),
  ADD KEY `eredmeny_jatekosid` (`eredmeny_jatekosid`),
  ADD KEY `eredmeny_temaid` (`eredmeny_temaid`);

--
-- A tábla indexei `jatekos`
--
ALTER TABLE `jatekos`
  ADD PRIMARY KEY (`jatekos_id`);

--
-- A tábla indexei `kerdes`
--
ALTER TABLE `kerdes`
  ADD PRIMARY KEY (`kerdes_id`),
  ADD KEY `kerdes_temaid` (`kerdes_temaid`);

--
-- A tábla indexei `tema`
--
ALTER TABLE `tema`
  ADD PRIMARY KEY (`tema_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `eredmeny`
--
ALTER TABLE `eredmeny`
  MODIFY `eredmeny_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `jatekos`
--
ALTER TABLE `jatekos`
  MODIFY `jatekos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `kerdes`
--
ALTER TABLE `kerdes`
  MODIFY `kerdes_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT a táblához `tema`
--
ALTER TABLE `tema`
  MODIFY `tema_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `eredmeny`
--
ALTER TABLE `eredmeny`
  ADD CONSTRAINT `eredmeny_ibfk_1` FOREIGN KEY (`eredmeny_jatekosid`) REFERENCES `jatekos` (`jatekos_id`),
  ADD CONSTRAINT `eredmeny_ibfk_2` FOREIGN KEY (`eredmeny_temaid`) REFERENCES `tema` (`tema_id`);

--
-- Megkötések a táblához `kerdes`
--
ALTER TABLE `kerdes`
  ADD CONSTRAINT `kerdes_ibfk_1` FOREIGN KEY (`kerdes_temaid`) REFERENCES `tema` (`tema_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
