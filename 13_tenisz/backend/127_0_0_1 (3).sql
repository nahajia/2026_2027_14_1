-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Nov 04. 11:22
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
-- Adatbázis: `tenisz2026`
--
CREATE DATABASE IF NOT EXISTS `tenisz2026` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `tenisz2026`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bejegyzes`
--

CREATE TABLE `bejegyzes` (
  `bejegyzes_id` int(11) NOT NULL,
  `bejegyzes_szoveg` text NOT NULL,
  `bejegyzes_datum` date NOT NULL,
  `bejegyzes_ki` varchar(255) NOT NULL,
  `bejegyzes_jatekos_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `bejegyzes`
--

INSERT INTO `bejegyzes` (`bejegyzes_id`, `bejegyzes_szoveg`, `bejegyzes_datum`, `bejegyzes_ki`, `bejegyzes_jatekos_id`) VALUES
(1, 'A 2.8 millió euró (egymilliárd forint) összdíjazású bécsi kemény pályás tenisztornán Carlos Alcaraz, a bázeli, 2.5 millió dollár (915 millió forint) pénzdíjú viadalon Valentin Vacherot diadalmaskodott.', '2026-11-01', 'Lali', 1),
(2, 'A még világelső olasz Jannik Sinner – aki térdsérülés miatt visszalépett az idény hátralévő versenyeitől – hétfőn bejelentette, hogy december végén részt vesz egy szaúd-arábiai bemutató tenisztornán.', '2026-10-22', 'Roli', 3),
(3, 'Az ATP-világranglista újdonsült éllovasa, Alexander Zverev dühösen nyilatkozott a bécsi ATP 500-as torna elődöntőjét követően, miután három szettes vereséget szenvedett az ausztrál Alex De Minaurtól.', '2026-11-01', 'Lali', 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jatekos`
--

CREATE TABLE `jatekos` (
  `jatekos_id` int(11) NOT NULL,
  `jatekos_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `jatekos`
--

INSERT INTO `jatekos` (`jatekos_id`, `jatekos_nev`) VALUES
(1, 'Carlos Alcaraz'),
(2, 'Medvegyev'),
(3, 'Janik Sinner'),
(4, 'Zverev');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `bejegyzes`
--
ALTER TABLE `bejegyzes`
  ADD PRIMARY KEY (`bejegyzes_id`),
  ADD KEY `bejegyzes_jatekos_id` (`bejegyzes_jatekos_id`);

--
-- A tábla indexei `jatekos`
--
ALTER TABLE `jatekos`
  ADD PRIMARY KEY (`jatekos_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `bejegyzes`
--
ALTER TABLE `bejegyzes`
  MODIFY `bejegyzes_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `jatekos`
--
ALTER TABLE `jatekos`
  MODIFY `jatekos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `bejegyzes`
--
ALTER TABLE `bejegyzes`
  ADD CONSTRAINT `bejegyzes_ibfk_1` FOREIGN KEY (`bejegyzes_jatekos_id`) REFERENCES `jatekos` (`jatekos_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
