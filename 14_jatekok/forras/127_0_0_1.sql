-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Nov 18. 17:18
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
-- Adatbázis: `jatek13A`
--
CREATE DATABASE IF NOT EXISTS `jatek13A` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `jatek13A`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jatek`
--

CREATE TABLE `jatek` (
  `jatek_id` int(11) NOT NULL,
  `jatek_nev` varchar(255) NOT NULL,
  `jatek_ev` int(11) NOT NULL,
  `jatek_ertekeles` double NOT NULL,
  `jatek_ar` int(11) NOT NULL,
  `jatek_leiras` text NOT NULL,
  `jatek_kep` varchar(255) NOT NULL,
  `jatek_platform_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `jatek`
--


INSERT INTO jatek
(jatek_id, jatek_nev, jatek_ev, jatek_ertekeles, jatek_ar, jatek_leiras, jatek_kep, jatek_platform_id)
VALUES
(1, 'Minecraft', 2011, 9.7, 11200, 'Nyílt világú sandbox játék. Építhetsz, bányászhatsz, felfedezhetsz és túlélhetsz.', '01.jpg', 1),
(2, 'Just Dance 2025', 2024, 8.8, 15000, 'Táncos játék népszerű zenékkel és koreográfiákkal.', '02.jpg', 2),
(3, 'Terraria', 2011, 9.0, 12000, 'Kalandjáték, amelyben felfedezhetsz, építkezhetsz és szörnyekkel harcolhatsz.', '03.jpg', 1),
(4, 'Grand Theft Auto V', 2013, 9.5, 10000, 'Nyílt világú akciójáték Los Santos városában.', '04.jpg', 1),
(5, 'Fortnite', 2017, 9.2, 0, 'Battle royale játék, amelyben játékosok küzdenek egymás ellen.', '05.jpg', 1),
(6, 'Counter-Strike 2', 2023, 9.4, 0, 'Taktikai csapatalapú lövöldözős játék.', '06.jpg', 1),
(7, 'Valorant', 2020, 9.1, 0, 'Taktikai FPS játék különleges képességekkel rendelkező karakterekkel.', '07.jpg', 1),
(8, 'Roblox', 2006, 9.0, 0, 'Online játékplatform, ahol saját játékokat is készíthetsz.', '08.jpg', 3),
(9, 'The Sims 4', 2014, 8.9, 0, 'Életszimulátor, amelyben karaktereket irányíthatsz és történeteket alkothatsz.', '09.jpg', 1),
(10, 'Hogwarts Legacy', 2023, 9.3, 14990, 'Nyílt világú szerepjáték a Harry Potter varázsvilágában.', '10.jpg', 2),
(11, 'Cyberpunk 2077', 2020, 9.2, 12990, 'Futurisztikus szerepjáték Night City világában.', '11.jpg', 1),
(12, 'Red Dead Redemption 2', 2018, 9.8, 14990, 'Western kalandjáték hatalmas nyitott világgal.', '12.jpg', 1),
(13, 'Elden Ring', 2022, 9.5, 16990, 'Fantasy akció-szerepjáték, amely komoly kihívásokat kínál.', '13.jpg', 2),
(14, 'Baldur Gate 3', 2023, 9.8, 19990, 'Fantasy szerepjáték csapatépítéssel, döntésekkel és kalandokkal.', '14.jpg', 1),
(15, 'Forza Horizon 5', 2021, 9.3, 14990, 'Autóversenyzős játék Mexikó nyílt világában.', '15.jpg', 2),
(16, 'Marvel Spider-Man 2', 2023, 9.4, 19990, 'Akció-kalandjáték, amelyben Pókemberként fedezheted fel New Yorkot.', '16.jpg', 2),
(17, 'God of War Ragnarök', 2022, 9.5, 17990, 'Mitológiai kalandjáték Kratos és Atreus történetével.', '17.jpg', 2),
(18, 'Helldivers 2', 2024, 9.0, 12990, 'Kooperatív sci-fi lövöldözős játék.', '18.jpg', 1),
(19, 'Resident Evil 4', 2023, 9.4, 14990, 'Túlélőhorror akciódús játékmenettel.', '19.jpg', 2),
(20, 'EA Sports FC 26', 2025, 8.8, 24990, 'Futballszimulátor valódi csapatokkal és játékosokkal.', '20.jpg', 2),
(21, 'Call of Duty Black Ops 6', 2024, 9.0, 22990, 'Katonai FPS játék egyjátékos kampánnyal és többjátékos móddal.', '21.jpg', 1),
(22, 'Among Us', 2018, 8.7, 1500, 'Többjátékos partijáték, amelyben ki kell deríteni, ki az áruló.', '22.jpg', 3),
(23, 'Clash Royale', 2016, 8.9, 0, 'Stratégiai mobiljáték kártyákkal és valós idejű csatákkal.', '23.jpg', 3),
(24, 'Clash of Clans', 2012, 9.0, 0, 'Stratégiai játék, amelyben falut építhetsz és sereget fejleszthetsz.', '24.jpg', 3),
(25, 'Brawl Stars', 2018, 9.1, 0, 'Gyors tempójú mobiljáték különböző karakterekkel és játékmódokkal.', '25.jpg', 3),
(26, 'PUBG Mobile', 2018, 9.0, 0, 'Battle royale mobiljáték, amelyben a túlélés a cél.', '26.jpg', 3),
(27, 'Genshin Impact', 2020, 9.2, 0, 'Nyílt világú anime stílusú akció-szerepjáték.', '27.jpg', 3),
(28, 'Subway Surfers', 2012, 8.8, 0, 'Végtelen futójáték, amelyben akadályokat kell kikerülni.', '28.jpg', 3),
(29, 'Candy Crush Saga', 2012, 8.5, 0, 'Színes logikai játék, amelyben azonos színű cukorkákat kell párosítani.', '29.jpg', 3),
(30, 'Pokémon GO', 2016, 8.9, 0, 'Kiterjesztett valóságon alapuló mobiljáték, amelyben Pokémonokat gyűjthetsz.', '30.jpg', 3),
(31, 'Stardew Valley', 2016, 9.4, 5990, 'Gazdálkodós és életszimulációs játék, amelyben saját farmot fejleszthetsz.', '31.jpg', 1),
(32, 'Hollow Knight', 2017, 9.3, 6990, 'Kézzel rajzolt világban játszódó akció-kalandjáték.', '32.jpg', 1),
(33, 'Hades II', 2025, 9.5, 11990, 'Mitológiai roguelike akciójáték.', '33.jpg', 1),
(34, 'The Legend of Zelda Tears of the Kingdom', 2023, 9.8, 21990, 'Kalandjáték hatalmas felfedezhető világgal.', '34.jpg', 2),
(35, 'Super Mario Odyssey', 2017, 9.6, 16990, 'Vidám 3D platformjáték Mario főszereplésével.', '35.jpg', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `platform`
--

CREATE TABLE `platform` (
  `platform_id` int(11) NOT NULL,
  `platform_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `platform`
--

INSERT INTO `platform` (`platform_id`, `platform_nev`) VALUES
(1, 'pc játék'),
(2, 'konzol játék(pl. x-box)'),
(3, 'mobil játék');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `jatek`
--
ALTER TABLE `jatek`
  ADD PRIMARY KEY (`jatek_id`),
  ADD KEY `jatek_platform_id` (`jatek_platform_id`);

--
-- A tábla indexei `platform`
--
ALTER TABLE `platform`
  ADD PRIMARY KEY (`platform_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `jatek`
--
ALTER TABLE `jatek`
  MODIFY `jatek_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT a táblához `platform`
--
ALTER TABLE `platform`
  MODIFY `platform_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `jatek`
--
ALTER TABLE `jatek`
  ADD CONSTRAINT `jatek_ibfk_1` FOREIGN KEY (`jatek_platform_id`) REFERENCES `platform` (`platform_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
