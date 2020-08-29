-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2020 at 01:40 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_rapid`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `textcmt` varchar(1000) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `replyto` int(11) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `dateuploaded` datetime NOT NULL DEFAULT current_timestamp(),
  `upvote` int(11) DEFAULT NULL,
  `downvote` int(11) DEFAULT NULL,
  `thread` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `textcmt`, `users_id`, `replyto`, `title`, `dateuploaded`, `upvote`, `downvote`, `thread`) VALUES
(1, 'The CREATE DATABASE statement is used to create a new SQL database.', 1, NULL, 'How to Create Db', '2020-02-07 04:12:53', 500, 136, 1),
(2, 'The DROP DATABASE statement is used to drop an existing SQL database.', 2, NULL, 'How to Drop DB', '2020-02-06 23:13:10', 500, 264, 2),
(5, 'The BACKUP DATABASE statement is used in SQL Server to create a full back up of an existing SQL database.', 2, NULL, 'How to backup DB', '2020-02-06 11:13:32', 500, 171, 5),
(6, 'The CREATE TABLE statement is used to create a new table in a database.', 2, NULL, 'How to create DB table', '2020-02-05 04:13:57', 500, 262, 6),
(7, 'The DROP TABLE statement is used to drop an existing table in a database.', 2, NULL, 'How to drop DB table', '2020-01-17 04:14:20', 500, 222, 7),
(8, 'The ALTER TABLE statement is used to add, delete, or modify columns in an existing table. The ALTER TABLE statement is also used to add and drop various constraints on an existing table.', 2, NULL, 'How to alter DB table', '2019-01-12 04:14:45', 500, 249, 8),
(9, 'SQL constraints are used to specify rules for data in a table. Constraints can be specified when the table is created with the CREATE TABLE statement, or after the table is created with the ALTER TABL', 2, NULL, 'SQL Constraints', '2019-07-07 04:15:19', 500, 98, 9),
(10, 'By default, a column can hold NULL values. The NOT NULL constraint enforces a column to NOT accept NULL values. This enforces a field to always contain a value, which means that you cannot insert a ne', 2, NULL, 'SQL NOT NULL', '2017-02-07 04:15:29', 500, 85, 10),
(11, 'Thanks!', 1, 7, 'cmt1', '2020-02-11 02:02:02', 10, 0, 7),
(12, 'Welcome.', 2, 11, 'cmt2', '2020-02-11 03:02:02', 10, 0, 7),
(13, 'This is great!', 4, 7, 'cmt3', '2020-02-11 02:01:02', 3, 1, 7),
(14, '<p>bb</p>', 1, NULL, 'aa', '2020-03-29 06:36:52', NULL, NULL, NULL),
(15, '<p>cc</p>', 1, NULL, 'bb', '2020-03-29 06:38:32', NULL, NULL, NULL),
(16, '<p>lel</p>', 1, NULL, 'lol', '2020-03-29 11:20:24', NULL, NULL, NULL),
(17, '<p>hu</p>', 1, NULL, 'hu', '2020-03-29 11:21:17', NULL, NULL, NULL),
(18, '<p>kah</p>', 1, NULL, 'kah', '2020-03-29 11:46:48', NULL, NULL, NULL),
(19, '<p>kuh</p>', 1, NULL, 'kuh', '2020-03-29 11:48:48', NULL, NULL, NULL),
(20, '<p>koh</p>', 1, NULL, 'koh', '2020-03-29 11:50:18', NULL, NULL, NULL),
(21, '<p>kih</p>', 1, NULL, 'kih', '2020-03-29 11:51:12', NULL, NULL, NULL),
(22, '<p>22</p>', 1, NULL, '22', '2020-03-29 11:54:26', NULL, NULL, NULL),
(23, '<p>23</p>', 1, NULL, '23', '2020-03-29 11:55:25', NULL, NULL, NULL),
(24, '<p>24</p>', 1, NULL, '24', '2020-03-29 11:57:50', NULL, NULL, NULL),
(25, '<p>25</p>', 1, NULL, '25', '2020-03-29 11:59:33', NULL, NULL, NULL),
(26, '<p>26</p>', 1, NULL, '26', '2020-03-29 12:02:29', NULL, NULL, NULL),
(27, '<p>27</p>', 1, NULL, '27', '2020-03-29 12:04:07', NULL, NULL, NULL),
(28, '<p>28</p>', 1, NULL, '28', '2020-03-29 12:06:33', NULL, NULL, NULL),
(29, '<p>29</p>', 1, NULL, '29', '2020-03-29 13:08:51', NULL, NULL, NULL),
(30, '<p>30</p>', 1, NULL, '30', '2020-03-29 13:09:58', NULL, NULL, NULL),
(31, '<p>31</p>', 1, NULL, '31', '2020-03-29 13:30:20', NULL, NULL, NULL),
(32, '<p>32</p>', 1, NULL, '32', '2020-03-29 13:31:09', NULL, NULL, NULL),
(33, '<p>33</p>', 1, NULL, '33', '2020-03-29 13:31:47', NULL, NULL, NULL),
(34, '<p>34</p>', 1, NULL, '34', '2020-03-29 13:37:45', NULL, NULL, NULL),
(35, '<p>35</p>', 1, NULL, '35', '2020-03-29 13:39:50', NULL, NULL, NULL),
(36, '<p>36</p>', 1, NULL, '36', '2020-03-29 13:40:42', NULL, NULL, NULL),
(37, '<p>37</p>', 1, NULL, '37', '2020-03-29 13:41:39', NULL, NULL, NULL),
(38, '<p>38</p>', 1, NULL, '38', '2020-03-29 13:41:57', NULL, NULL, NULL),
(39, '<p>39</p>', 1, NULL, '39', '2020-03-29 13:42:37', NULL, NULL, NULL),
(40, '<p>40</p>', 1, NULL, '40', '2020-03-29 14:33:20', NULL, NULL, NULL),
(41, '<p>41</p>', 1, NULL, '41', '2020-03-29 14:34:37', NULL, NULL, NULL),
(42, '<p>42</p>', 1, NULL, '42', '2020-03-29 15:40:31', NULL, NULL, NULL),
(43, '<p>43</p>', 1, NULL, '43', '2020-03-29 15:41:01', NULL, NULL, NULL),
(44, '<p>44</p>', 1, NULL, '44', '2020-03-29 15:41:31', NULL, NULL, NULL),
(45, '<p>45</p>', 1, NULL, '45', '2020-03-29 15:42:57', NULL, NULL, NULL),
(46, '<p>46</p>', 1, NULL, '46', '2020-03-29 15:50:07', NULL, NULL, NULL),
(47, '<p>47</p>', 1, NULL, '47', '2020-03-29 15:50:55', NULL, NULL, NULL),
(48, '<p>48</p>', 1, NULL, '48', '2020-03-29 15:55:24', NULL, NULL, NULL),
(49, '<p>49</p>', 1, NULL, '49', '2020-03-29 15:56:46', NULL, NULL, NULL),
(50, '<p>50</p>', 1, NULL, '50', '2020-03-29 16:42:35', NULL, NULL, NULL),
(51, '<p>51</p>', 1, NULL, '51', '2020-03-29 16:43:56', NULL, NULL, NULL),
(52, '<p>52</p>', 1, NULL, '52', '2020-03-29 18:22:15', NULL, NULL, NULL),
(53, '<p>53</p>', 1, NULL, '53', '2020-03-29 18:23:42', NULL, NULL, NULL),
(54, '<p>54</p>', 1, NULL, '54', '2020-03-31 23:21:33', NULL, NULL, NULL),
(55, '<p>55</p>', 1, NULL, '55', '2020-03-31 23:23:38', NULL, NULL, NULL),
(56, '<p>56</p>', 1, NULL, '56', '2020-03-31 23:27:32', NULL, NULL, NULL),
(57, '<p>57</p>', 1, NULL, '57', '2020-03-31 23:28:50', NULL, NULL, NULL),
(58, '<p>58</p>', 1, NULL, '58', '2020-03-31 23:35:27', NULL, NULL, NULL),
(59, '<p>59</p>', 1, NULL, '59', '2020-03-31 23:38:33', NULL, NULL, NULL),
(60, 'Array', 1, NULL, '60', '2020-03-31 23:41:13', NULL, NULL, NULL),
(61, 'Array->id', 1, NULL, '61', '2020-04-01 01:12:46', NULL, NULL, NULL),
(62, '[0]->id', 1, NULL, '62', '2020-04-01 01:20:11', NULL, NULL, NULL),
(63, '', 1, NULL, '63', '2020-04-01 01:23:25', NULL, NULL, NULL),
(64, '', 1, NULL, '64', '2020-04-01 01:24:02', NULL, NULL, NULL),
(65, 'donut', 1, NULL, '65', '2020-04-01 01:26:38', NULL, NULL, NULL),
(66, 'donut', 1, NULL, '66', '2020-04-01 01:27:06', NULL, NULL, NULL),
(67, '', 1, NULL, '67', '2020-04-01 01:27:50', NULL, NULL, NULL),
(68, '', 1, NULL, '68', '2020-04-01 01:28:13', NULL, NULL, NULL),
(69, 'lol', 1, NULL, '69', '2020-04-01 01:28:41', NULL, NULL, NULL),
(70, '', 1, NULL, '70', '2020-04-01 01:29:51', NULL, NULL, NULL),
(71, 'lol', 1, NULL, '71', '2020-04-01 01:33:18', NULL, NULL, NULL),
(72, 'lol', 1, NULL, '72', '2020-04-01 01:34:27', NULL, NULL, NULL),
(73, 'Array', 1, NULL, '73', '2020-04-01 01:35:30', NULL, NULL, NULL),
(74, 'Array', 1, NULL, '74', '2020-04-01 01:36:51', NULL, NULL, NULL),
(75, '\r\n                {\r\n                    \"id\": 1,\r\n                    \"text\": \"lol\"\r\n                }', 1, NULL, '75', '2020-04-01 01:41:03', NULL, NULL, NULL),
(76, '', 1, NULL, '76', '2020-04-01 01:46:00', NULL, NULL, NULL),
(77, '\r\n                {\r\n                    \"id\": 1,\r\n                    \"text\": \"lol\"\r\n                }', 1, NULL, '77', '2020-04-01 01:48:41', NULL, NULL, NULL),
(78, 'lol', 1, NULL, '78', '2020-04-01 01:52:36', NULL, NULL, NULL),
(79, 'eh', 1, NULL, '79', '2020-04-05 19:44:58', NULL, NULL, NULL),
(80, 'ey', 1, NULL, '80', '2020-04-05 19:46:55', NULL, NULL, NULL),
(81, '{ }', 1, NULL, '81', '2020-04-05 19:48:22', NULL, NULL, NULL),
(82, '{ \'}', 1, NULL, '82', '2020-04-05 19:48:44', NULL, NULL, NULL),
(83, NULL, 1, NULL, '83', '2020-04-05 19:49:11', NULL, NULL, NULL),
(84, '\r\n                {\r\n                    \"id\": 1,\r\n                    \"text\": \"lol\"\r\n                }', 1, NULL, '84', '2020-04-05 20:44:36', NULL, NULL, NULL),
(85, '', 1, NULL, '85', '2020-04-05 20:45:20', NULL, NULL, NULL),
(86, 'Array', 1, NULL, '86', '2020-04-05 21:15:44', NULL, NULL, NULL),
(87, 'Array', 1, NULL, '87', '2020-04-05 21:18:07', NULL, NULL, NULL),
(88, 'Array', 1, NULL, '88', '2020-04-05 21:19:26', NULL, NULL, NULL),
(89, 'lol', 1, NULL, '89', '2020-04-05 21:19:51', NULL, NULL, NULL),
(90, '', 1, NULL, '90', '2020-04-05 21:23:21', NULL, NULL, NULL),
(91, 'Array', 1, NULL, '91', '2020-04-05 21:25:42', NULL, NULL, NULL),
(92, 'Array', 1, NULL, '92', '2020-04-05 21:33:50', NULL, NULL, NULL),
(93, 'John', 1, NULL, '93', '2020-04-05 21:36:38', NULL, NULL, NULL),
(94, 'Array', 1, NULL, '94', '2020-04-05 21:59:50', NULL, NULL, NULL),
(95, 'Array', 1, NULL, '95', '2020-04-05 22:03:04', NULL, NULL, NULL),
(96, 'John', 1, NULL, '96', '2020-04-05 22:05:00', NULL, NULL, NULL),
(97, 'J', 1, NULL, '97', '2020-04-05 22:22:12', NULL, NULL, NULL),
(98, 'John', 1, NULL, '98', '2020-04-05 22:24:04', NULL, NULL, NULL),
(99, 'John', 1, NULL, '99', '2020-04-05 22:24:36', NULL, NULL, NULL),
(100, '', 1, NULL, '100', '2020-04-05 22:25:14', NULL, NULL, NULL),
(101, '', 1, NULL, '101', '2020-04-05 22:40:58', NULL, NULL, NULL),
(102, 'John', 1, NULL, '102', '2020-04-05 22:42:46', NULL, NULL, NULL),
(103, '', 1, NULL, '103', '2020-04-05 22:44:16', NULL, NULL, NULL),
(104, '', 1, NULL, '104', '2020-04-05 22:44:47', NULL, NULL, NULL),
(105, 'lol', 1, NULL, '105', '2020-04-05 22:59:31', NULL, NULL, NULL),
(106, 'John', 1, NULL, '106', '2020-04-05 22:59:59', NULL, NULL, NULL),
(107, '', 1, NULL, '107', '2020-04-05 23:03:10', NULL, NULL, NULL),
(108, 'John', 1, NULL, '108', '2020-04-05 23:03:36', NULL, NULL, NULL),
(109, 'John, John', 1, NULL, '109', '2020-04-05 23:04:28', NULL, NULL, NULL),
(110, 'John, Hafiz', 1, NULL, '110', '2020-04-05 23:05:10', NULL, NULL, NULL),
(111, 'John, Hafiz', 1, NULL, '111', '2020-04-05 23:21:37', NULL, NULL, NULL),
(112, 'John, Hafiz', 1, NULL, '112', '2020-04-05 23:22:32', NULL, NULL, NULL),
(113, 'John, Hafiz, Hafiz', 1, NULL, '113', '2020-04-05 23:23:00', NULL, NULL, NULL),
(114, 'John, Hafiz, ', 1, NULL, '114', '2020-04-06 04:36:18', NULL, NULL, NULL),
(115, 'John, Hafiz, ', 1, NULL, '115', '2020-04-06 04:37:59', NULL, NULL, NULL),
(116, 'John, Hafiz', 1, NULL, '116', '2020-04-06 04:38:50', NULL, NULL, NULL),
(117, 'John, Hafiz, Ahmad', 1, NULL, '117', '2020-04-06 04:39:41', NULL, NULL, NULL),
(118, 'John, Hafiz, Ahmad', 1, NULL, '118', '2020-04-06 04:42:56', NULL, NULL, NULL),
(119, 'John, Hafiz, Ahmad, 3', 1, NULL, '119', '2020-04-06 04:43:23', NULL, NULL, NULL),
(120, 'John, Hafiz, Ahmad, ', 1, NULL, '120', '2020-04-06 04:45:07', NULL, NULL, NULL),
(121, 'John, Hafiz, Ahmad', 1, NULL, '121', '2020-04-06 04:46:08', NULL, NULL, NULL),
(122, 'John, Hafiz, Ahmad, Ahmad', 1, NULL, '122', '2020-04-06 04:46:56', NULL, NULL, NULL),
(123, 'John, Hafiz, 1, 1', 1, NULL, '123', '2020-04-06 04:48:23', NULL, NULL, NULL),
(124, 'John, Hafiz, 1, 2', 1, NULL, '124', '2020-04-06 04:48:40', NULL, NULL, NULL),
(125, 'John, Hafiz, 1, 2, 2', 1, NULL, '125', '2020-04-06 04:51:01', NULL, NULL, NULL),
(126, '1, 2 = 2', 1, NULL, '126', '2020-04-06 04:52:10', NULL, NULL, NULL),
(127, '1,  = 1', 1, NULL, '127', '2020-04-06 04:54:44', NULL, NULL, NULL),
(128, '1,  = 1', 1, NULL, '128', '2020-04-06 04:55:38', NULL, NULL, NULL),
(129, '1,  = 1', 1, NULL, '129', '2020-04-06 04:56:06', NULL, NULL, NULL),
(130, '1, , 1', 1, NULL, '130', '2020-04-06 04:56:38', NULL, NULL, NULL),
(131, '1, , 1', 1, NULL, '131', '2020-04-06 04:57:53', NULL, NULL, NULL),
(132, '1, 2 = 2', 1, NULL, '132', '2020-04-06 04:58:26', NULL, NULL, NULL),
(133, '1, 2 = 2', 1, NULL, '133', '2020-04-06 04:58:50', NULL, NULL, NULL),
(134, '1, 2 = 2', 1, NULL, '134', '2020-04-06 04:59:57', NULL, NULL, NULL),
(135, '1, 2 = 2', 1, NULL, '135', '2020-04-06 05:00:45', NULL, NULL, NULL),
(136, '1, 2 = 2', 1, NULL, '136', '2020-04-06 05:01:47', NULL, NULL, NULL),
(137, '', 1, NULL, '137', '2020-04-06 05:13:55', NULL, NULL, NULL),
(138, '<p>evrvrgr fgrvrgv</p>', 1, NULL, '138', '2020-04-06 05:14:18', NULL, NULL, NULL),
(139, '<p>12121</p>', 1, NULL, '139', '2020-04-06 05:15:13', NULL, NULL, NULL),
(140, '<p>wferfe</p>', 1, NULL, '140', '2020-04-06 05:16:02', NULL, NULL, NULL),
(141, '<p>etgtvr</p>', 1, NULL, '141', '2020-04-06 05:16:17', NULL, NULL, NULL),
(142, '<p>fvrfvr</p>', 1, NULL, '142', '2020-04-06 05:16:34', NULL, NULL, NULL),
(143, '<p>frefeve</p>', 1, NULL, '143', '2020-04-06 05:18:11', NULL, NULL, NULL),
(144, '<p>wferfef</p>', 1, NULL, '144', '2020-04-06 05:18:30', NULL, NULL, NULL),
(145, '<p>ugub</p>', 1, NULL, '145', '2020-04-06 05:30:52', NULL, NULL, NULL),
(146, '<p>yfu</p>', 1, NULL, '146', '2020-04-06 05:31:26', NULL, NULL, NULL),
(147, '<p>wedwed</p>', 1, NULL, '147', '2020-04-06 05:42:46', NULL, NULL, NULL),
(148, '<p>wefwef</p>', 1, NULL, '148', '2020-04-06 05:42:59', NULL, NULL, NULL),
(149, '<p>wwdefw</p>', 1, NULL, '149', '2020-04-06 05:43:39', NULL, NULL, NULL),
(150, '<p>123dwed</p>', 1, NULL, '150', '2020-04-06 05:44:30', NULL, NULL, NULL),
(151, '<p>wefwfw</p>', 1, NULL, '151', '2020-04-06 05:45:04', NULL, NULL, NULL),
(152, '<p>efwfwe</p>', 1, NULL, '152', '2020-04-06 05:46:54', NULL, NULL, NULL),
(153, '<p>erfeef</p>', 1, NULL, '153', '2020-04-06 05:47:06', NULL, NULL, NULL),
(154, '<p>rferfef</p>', 1, NULL, '154', '2020-04-06 05:47:25', NULL, NULL, NULL),
(155, '<p>tftfut</p>', 1, NULL, '155', '2020-04-06 05:55:36', NULL, NULL, NULL),
(156, '<p>khgbkgkghh</p>', 1, NULL, '156', '2020-04-06 05:56:10', NULL, NULL, NULL),
(157, '<p>lol</p>', 1, NULL, '157', '2020-04-06 06:12:11', NULL, NULL, NULL),
(158, '<p>TFUTF</p><p>JYFGJG</p>', 1, NULL, '158', '2020-04-06 06:15:26', NULL, NULL, NULL),
(159, '<p><strong>asdf <em>ddd <u>dddd</u></em></strong></p><p><em><u>dddd dddd </u></em><u>dddd</u> dddd</p><p>dddd dddd dddd dddd.</p><p>ddddd.</p><p>ddddd</p><p><br></p>', 1, NULL, '159', '2020-04-10 00:53:12', NULL, NULL, NULL),
(160, '<p>a</p>', 1, NULL, '160', '2020-04-10 01:25:05', NULL, NULL, NULL),
(161, '<p>a</p>', 1, NULL, '161', '2020-04-10 01:25:26', NULL, NULL, NULL),
(162, '<p>The</p>', 1, NULL, '162', '2020-04-10 01:25:48', NULL, NULL, NULL),
(163, '<p>The Hitch</p>', 1, NULL, '163', '2020-04-10 01:35:33', NULL, NULL, NULL),
(164, '<p>The Hitch Hiker</p>', 1, NULL, '164', '2020-04-10 01:36:33', NULL, NULL, NULL),
(165, '<p>The Hitch Hikers Guide to the</p>', 1, NULL, '165', '2020-04-10 01:37:37', NULL, NULL, NULL),
(166, '<p>a</p>', 1, NULL, '166', '2020-04-10 01:42:48', NULL, NULL, NULL),
(167, '<p>a</p>', 1, NULL, '167', '2020-04-10 01:44:16', NULL, NULL, NULL),
(168, '<p>d</p>', 1, NULL, '168', '2020-04-10 01:53:53', NULL, NULL, NULL),
(169, '<p>y\'s</p>', 1, NULL, '169', '2020-04-10 01:54:09', NULL, NULL, NULL),
(170, '<p>a\'s</p>', 1, NULL, '170', '2020-04-10 01:55:11', NULL, NULL, NULL),
(171, '<p>w\'s</p>', 1, NULL, '171', '2020-04-10 01:56:00', NULL, NULL, NULL),
(172, '<p>The Hitch Hiker\'s Guide to the Galaxy has a few things to say on the subject of towels. A towel, it says, is about the most massivelyuseful thing an interstellar hitch hiker can have. Partly it has great practical value - you can wrap it around you for warmth as you bound across the cold moons of&nbsp;Jaglan Beta; you can lie on it on the brilliant marble-sanded beaches of Santraginus V.</p>', 1, NULL, '172', '2020-04-10 01:56:42', NULL, NULL, 172),
(173, '<p>a</p>', 1, NULL, '173', '2020-04-10 04:13:46', NULL, NULL, 173),
(174, '<p>as</p>', 1, NULL, '174', '2020-04-10 04:14:22', NULL, NULL, NULL),
(175, '<p>asd</p>', 1, NULL, '175', '2020-04-10 04:15:30', NULL, NULL, 175),
(176, '<p>we</p>', 1, NULL, '176', '2020-04-10 04:18:20', NULL, NULL, 176),
(177, '<p>1</p>', 1, NULL, '177', '2020-04-10 04:38:28', NULL, NULL, 177),
(178, '<p>d</p>', 1, NULL, '178', '2020-04-10 04:40:14', NULL, NULL, 178),
(179, '<p>e</p>', 1, NULL, '179', '2020-04-10 04:40:49', NULL, NULL, 179),
(180, '<p>feirfg ueruheirf eorhf eohf eovh eovhreov r</p><p>e ovfheohv oev oef vhoeiv hrovih e vpei vje</p><p> oevh eoijf eofj</p><p> feo hfeojf eir jfe oei rfjoeijf oeifj </p><p> oehfoe jferf</p>', 1, NULL, '180', '2020-04-10 04:41:47', NULL, NULL, 180),
(181, '<p>w</p>', 1, NULL, '181', '2020-04-10 04:42:46', NULL, NULL, 181),
(182, '<p>de</p>', 1, NULL, '182', '2020-04-10 04:47:22', NULL, NULL, 182),
(183, '<p>sw</p>', 1, NULL, '183', '2020-04-10 04:50:33', NULL, NULL, 183),
(184, '<p>dede</p>', 1, NULL, '184', '2020-04-10 04:52:22', NULL, NULL, 184),
(192, '<p>fr</p>', 1, NULL, '185', '2020-04-11 00:39:47', NULL, NULL, 192),
(193, '<p>pikachu haha</p>', 1, NULL, 'Hoiiiiiiiiiand', '2020-04-12 00:18:19', NULL, NULL, 193),
(194, '<p>dede</p>', 1, NULL, 'fer', '2020-04-16 16:33:35', NULL, NULL, 194);

-- --------------------------------------------------------

--
-- Table structure for table `filedata`
--

CREATE TABLE `filedata` (
  `id` int(11) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `decoded` varchar(800) DEFAULT NULL,
  `type` varchar(150) DEFAULT NULL,
  `icon` varchar(20) DEFAULT NULL,
  `folderdata_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `filedata`
--

INSERT INTO `filedata` (`id`, `name`, `decoded`, `type`, `icon`, `folderdata_id`) VALUES
(198, '1580362400741.png', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABPAAAAJ6CAIAAAApWivQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAM//SURBVHhe7N2FexN59zbw90+LVVN3d+rurtRbCrQFahRrKW1xKe4ui7PIYiuwLMsuy8PuwtrvPcychuk0LZWkmUzuz3WuXsl4vpGTu7H/938AAAAAAAAAdgiBFgAAAAAAAOwSAi0AAAAAAADYJQRaAAAAAAAAsEsItAAAAAAAAGCXEGgBAAAAAADALiHQAgAAAAAAgF1CoAUAAAAAAAC7hEALAAAAAAAAdgmBFgAAAAAAAOwSAi0AAAAAAADYJQRaAAAAAAAAsEsItAAAAAAAAGCXEGgBAAAAAADALiHQAgAAAAAAgF1CoAUAAAAAAAC7hEALAAAAAAAAdgmBFgAAAAAAAOwSAi0AAAAAAADYJQRaAAAAAAAAsEsItAAAAAAAAGCXEGgBAAAAAADALiHQAgAAAAAAgF1CoAUAAAAAAAC7hEALAAAAAAAAdgmBFgAAAAAAAOwSAi0AAAAAAADYJQRaUKEffvjhwYMHV69effHixcePH3mqTd27d+/GjRt3794Vzz59+pQOz4LH9u7dO9ogXXA+DwAAMGfUPqhjin7++WeeKkENi7qM2VkLcOvWrdu3b4unbdi/xKcKfAYA7BYCLagKdcTh4eEeicHBQepYPNt2KNDSwZgC7fj4OJ214IHRBacNojEDAMACfOqXU5', 'png', 'images', 2),
(199, '1580363801017.png', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwwAAAHCCAIAAADNYNnBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAG0qSURBVHhe7d1pdFtnnuf3PicnyZlz5iQzmcmkuzIzSfeZnu6ZF5MXyWQ6Opnu6ao2pbJUrdQy3a5NrupysVzlqrJlW95l7dQuURu1L9Ruy6tsy5IlS6JEipS47/sOYiWJlQRALDf/57nP3YALEqQoEAR+n3MPffnguRc0RQJfPYCAP5AAAAAAIAkiCQAAAMAEIgkAAADABCIJAAAAwAQiCQAAAMAEIgkAAADABCIJAAAAwAQiCQAAAMAEIgkAAADABCIJAAAAwAQiCQAAAMAEIgkAAADABCIJAAAAwAQiCQAAAMAEIgkAAADABCIJAAAAwAQiCQAAAMAEIgkAAADABCIJAAAAwAQiCQAAAMAEIgkAAADABCIJAAAAwAQiCQAgr124cOHc+fNnz54tLS09ffrMqVOnTpw8efz48aPHjp07d87lcol5APkHkQQAkNeokGKKKG1RsV28eLGtre1MaSk6CfIWIgkAIK+dPXuW8mgqEpmaioSnpsLhqRDfKJKcTmdra+upU6fFVIA8g0gCAMhrpaWlFEkfGoXCYYqkXVzx/v1iKkCeQSQBAOS106fPUCSxNSTdMhJFUigUDobCkUh0b/E+MTV93cVL/mBJcbf4TDAdBMhiiCQAgLx26tSpaNJKkooiaffevWLqXFwrRB', 'png', 'images', 2),
(200, '1580363853625.png', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABvkAAAm2CAYAAABmbKS5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAALiIAAC4iAari3ZIAAP+lSURBVHhe7P1nkyRpmp6LPR4uQkekzizZ1VqM2t1Z7CxAYLE4WBw7hx9I/gXyl+C30HiMNOMnkoeAgUsQYsWInd2Z6Z5pLUpXpc7QLiP43K+7Z3hGRsrK6u6quq+ed1yEcvG6l5lfeT+vNVGEEEIIIYQQQgghhBBCCCGEEPLCUMqmhBBCCCGEEEIIIYQQQgghhJAXBEo+QgghhBBCCCGEEEIIIYQQQl4wKPkIIYQQQgghhBBCCCGEEEIIecGg5COEEEIIIYQQQgghhBBCCCHkBYOSjxBCCCGEEEIIIYQQQgghhJAXDEo+QgghhBBCCCGEEEIIIYQQQl4wKPkIIYQQQgghhBBCCCGEEEIIecGg5COEEEIIIYQQQgghhBBCCCHkBYOSjxBCCCGEEEIIIYQQQgghhJAXDEo+QgghhBBCCCGEEEIIIYQQQl4wKPkIIYQQQgghhBBCCCGEEEIIecGg5COEEEIIIYQQQgghhBBCCCHkBYOSjxBCCCGEEEIIIYQQQgghhJAXDGuiZPOEEEKegWDYk2DUM/P9zr4srm1IEodSbSyL7XhmPSGEEEIIIYQQQgghhBByFVDyEULIM9LdfSzdncfZkki/uy+h78sbP/pTs+xVmtoaZp4QQgghhBBCCCGEEEIIuQoo+Qgh5JIgub', 'png', 'images', 1),
(201, '1580366004191.pdf', 'data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovQ3JlYXRvciAoT3JhY2xlMTFnUjEgQVMgUmVwb3J0cyBTZXJ2aWNlcykKL0NyZWF0aW9uRGF0ZSAoRDoyMDE5MTEyNzE2NTI1NCkKL01vZERhdGUgKEQ6MjAxOTExMjcxNjUyNTQpCi9Qcm9kdWNlciAoT3JhY2xlIFBERiBkcml2ZXIpCi9UaXRsZSAoKQovQXV0aG9yIChPcmFjbGUgUmVwb3J0cykKPj4KZW5kb2JqCjUgMCBvYmoKPDwvTGVuZ3RoIDYgMCBSCi9GaWx0ZXIgWy9BU0NJSTg1RGVjb2RlIC9GbGF0ZURlY29kZV0KPj4Kc3RyZWFtCiBHYXRtPT8kRzl0JnEwTVhrZE5OdUozY0w3aSZvLGlDaWRVSCIhWShYNDhVLnIjISp0U1UoOT8yWU1XUj9QKXNMMi1bWVAxMz91LEkKbElPUmhsTHFXNFRhYz1GYzo1Q20pZDpKIV4kLDJhWDVAUkVNYmVQRjJYXU9ybWNOTldJO2tTRjpPPi1qZyRXQjdBJ1c7KEh0Q0xBCmFWMS9IUTdmZG1mW0Y6YkYuSE5pPExfZiwzcWVMcTlxMy9YYzBzO0tyVCNOXlFca1NuP2IrQ1BJOltJaj5kMTNAcGNPdSMwQnBoQApJVVlNdHBOSmxRZXVtVG0pJ19JaVxYX0c5OStqVD9VYVdkdUVBLj0kY3VkLlxtcUZnPUxCQlJzZFBVZW0zO15SZSRhU2pJXWJwJUEKMWBW', 'pdf', 'pdf', 1),
(205, '1580368062936.docx', 'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,UEsDBBQABgAIAAAAIQCnk8586QEAAFMJAAATAAgCW0NvbnRlbnRfVHlwZXNdLnhtbCCiBAIooAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'docx', 'doc', 1),
(206, '1580370922792.xlsx', 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,UEsDBBQABgAIAAAAIQCeLGxvawEAABAFAAATAAgCW0NvbnRlbnRfVHlwZXNdLnhtbCCiBAIooAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'xlsx', 'excel', 1),
(207, '1580371271409.xlsx', 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,UEsDBBQABgAIAAAAIQCeLGxvawEAABAFAAATAAgCW0NvbnRlbnRfVHlwZXNdLnhtbCCiBAIooAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'xlsx', 'excel', 1),
(208, '1580371618543.txt', 'data:text/plain;base64,MTkyLjE2OC45LjEzNw0KMTkyLjE2OC4wLjEzNw0KMTkyLjE2OC4wLjENCjIwMDE6ZTY4OjU0MWI6ZjZkZTo5YTo0ZmYxOjc3YTQ6NDcxYg0KMjAwMTplNjg6NTQxYjpmNmRlOjZkYjg6MmRkYzo0NThjOjM2OWUNCmZlODA6OjlhOjRmZjE6NzdhNDo0NzFiJTQNCjI1NS4yNTUuMjU1LjANCmZlODA6OmM2NzE6NTRmZjpmZWJhOjY3M2MlNA0K', 'txt', 'doc', 2),
(209, '1580390982943.png', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABvkAAAm2CAYAAABmbKS5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAALiIAAC4iAari3ZIAAP+lSURBVHhe7P1nkyRpmp6LPR4uQkekzizZ1VqM2t1Z7CxAYLE4WBw7hx9I/gXyl+C30HiMNOMnkoeAgUsQYsWInd2Z6Z5pLUpXpc7QLiP43K+7Z3hGRsrK6u6quq+ed1yEcvG6l5lfeT+vNVGEEEIIIYQQQgghhBBCCCGEEPLCUMqmhBBCCCGEEEIIIYQQQgghhJAXBEo+QgghhBBCCCGEEEIIIYQQQl4wKPkIIYQQQgghhBBCCCGEEEIIecGg5COEEEIIIYQQQgghhBBCCCHkBYOSjxBCCCGEEEIIIYQQQgghhJAXDEo+QgghhBBCCCGEEEIIIYQQQl4wKPkIIYQQQgghhBBCCCGEEEIIecGg5COEEEIIIYQQQgghhBBCCCHkBYOSjxBCCCGEEEIIIYQQQgghhJAXDEo+QgghhBBCCCGEEEIIIYQQQl4wKPkIIYQQQgghhBBCCCGEEEIIecGg5COEEEIIIYQQQgghhBBCCCHkBYOSjxBCCCGEEEIIIYQQQgghhJAXDGuiZPOEEEKegWDYk2DUM/P9zr4srm1IEodSbSyL7XhmPSGEEEIIIYQQQgghhBByFVDyEULIM9LdfSzdncfZkki/uy+h78sbP/pTs+xVmtoaZp4QQgghhBBCCCGEEEIIuQoo+Qgh5JIgub', 'png', 'images', 2),
(210, '1580391352508.jpeg', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAESBDQDASIAAhEBAxEB/8QAHAABAQACAwEBAAAAAAAAAAAAAAECAwQGBwUI/8QAVxAAAgEDAgQBCQIHCwkGBAcAAAECAwQRBQYSITFBBxMUIlFhYnGBoTKRCBUjM0KCsRY1NlJVc3SSssHSGCQ3cnWUotHwF0NTo7PCJTST0zhERlbD4fH/xAAbAQEBAQEBAQEBAAAAAAAAAAAAAQIDBAUGB//EACoRAQEBAQACAgEDAgYDAAAAAAABEQIhMQMSQQQFUSJhExQyQnHBBuHx/9oADAMBAAIRAxEAPwDwAFIbQKiFXIsAGTw3yMSqsefINCLw0zZUilzXRlzYY0lwVrBDKIC45glEBQBAOwAAACtp4IAL7AAuOXUmCAuBgsghUlgF7FFTx0I1khQjEvYYIRV5YCAKMsproWCjnEkY5wXLCJNJTaXQxMpesxIsQFIZqgAABAIACgCGUepiVFnsCF7kFAAEAyjHOfgYlTEEAYAAAAAAAMsZRiMAy5djEIsorAAwZJ4iOpB3NBgFaeeZiQCgFwH0IVggxBkwkhghU8MhUssgm', 'jpeg', 'images', 1),
(211, '1580392388554.jpeg', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAESBDQDASIAAhEBAxEB/8QAHAABAQACAwEBAAAAAAAAAAAAAAECAwQGBwUI/8QAVxAAAgEDAgQBCQIHCwkGBAcAAAECAwQRBQYSITFBBxMUIlFhYnGBoTKRCBUjM0KCsRY1NlJVc3SSssHSGCQ3cnWUotHwF0NTo7PCJTST0zhERlbD4fH/xAAbAQEBAQEBAQEBAAAAAAAAAAAAAQIDBAUGB//EACoRAQEBAQACAgEDAgYDAAAAAAABEQIhMQMSQQQFUSJhExQyQnHBBuHx/9oADAMBAAIRAxEAPwDwAFIbQKiFXIsAGTw3yMSqsefINCLw0zZUilzXRlzYY0lwVrBDKIC45glEBQBAOwAAACtp4IAL7AAuOXUmCAuBgsghUlgF7FFTx0I1khQjEvYYIRV5YCAKMsproWCjnEkY5wXLCJNJTaXQxMpesxIsQFIZqgAABAIACgCGUepiVFnsCF7kFAAEAyjHOfgYlTEEAYAAAAAAAMsZRiMAy5djEIsorAAwZJ4iOpB3NBgFaeeZiQCgFwH0IVggxBkwkhghU8MhUssgm', 'jpeg', 'images', 2),
(212, '1580392403270.jpeg', 'data:image/jpeg;base64,/9j/4QZARXhpZgAATU0AKgAAAAgACQEPAAIAAAAGAAAAegEQAAIAAAAJAAAAgAESAAMAAAABAAYAAAEaAAUAAAABAAAAigEbAAUAAAABAAAAkgEoAAMAAAABAAIAAAExAAIAAAAHAAAAmgEyAAIAAAAUAAAAoodpAAQAAAABAAAAtgAAAABBcHBsZQBpUGhvbmUgNgAAAAAASAAAAAEAAABIAAAAATExLjQuMQAAMjAxOTowOToyOSAyMDoxNzo0NAAAH4KaAAUAAAABAAACMIKdAAUAAAABAAACOIgiAAMAAAABAAIAAIgnAAMAAAABBOIAAJAAAAcAAAAEMDIyMZADAAIAAAAUAAACQJAEAAIAAAAUAAACVJEBAAcAAAAEAQIDAJIBAAoAAAABAAACaJICAAUAAAABAAACcJIDAAoAAAABAAACeJIEAAoAAAABAAACgJIHAAMAAAABAAUAAJIJAAMAAAABACAAAJIKAAUAAAABAAACiJJ8AAcAAANeAAACkJKRAAIAAAAENDc1AJKSAAIAAAAENDc1AKAAAAcAAAAEMDEwMKABAAMAAAABAAEAAKACAAQAAAABAAAFAKADAAQAAAABAAAC0KIXAAMAAAABAAIAAKMBAAcAAAABAQAAAKQCAAMAAAABAAAAAKQDAAMAAAABAAAAAKQFAAMAAAABACAAAKQGAAMAAAABAAAAAKQyAAUAAAAEAAAF7qQzAAIAAAAGAAAGDqQ0AAIAAAAjAAAGFAAAAAAAAAABAAAAIQAAA', 'jpeg', 'images', 1),
(213, '1580392527654.jpeg', 'data:image/jpeg;base64,/9j/4QZARXhpZgAATU0AKgAAAAgACQEPAAIAAAAGAAAAegEQAAIAAAAJAAAAgAESAAMAAAABAAYAAAEaAAUAAAABAAAAigEbAAUAAAABAAAAkgEoAAMAAAABAAIAAAExAAIAAAAHAAAAmgEyAAIAAAAUAAAAoodpAAQAAAABAAAAtgAAAABBcHBsZQBpUGhvbmUgNgAAAAAASAAAAAEAAABIAAAAATExLjQuMQAAMjAxOTowOToyOSAyMDoxNzo0NAAAH4KaAAUAAAABAAACMIKdAAUAAAABAAACOIgiAAMAAAABAAIAAIgnAAMAAAABBOIAAJAAAAcAAAAEMDIyMZADAAIAAAAUAAACQJAEAAIAAAAUAAACVJEBAAcAAAAEAQIDAJIBAAoAAAABAAACaJICAAUAAAABAAACcJIDAAoAAAABAAACeJIEAAoAAAABAAACgJIHAAMAAAABAAUAAJIJAAMAAAABACAAAJIKAAUAAAABAAACiJJ8AAcAAANeAAACkJKRAAIAAAAENDc1AJKSAAIAAAAENDc1AKAAAAcAAAAEMDEwMKABAAMAAAABAAEAAKACAAQAAAABAAAFAKADAAQAAAABAAAC0KIXAAMAAAABAAIAAKMBAAcAAAABAQAAAKQCAAMAAAABAAAAAKQDAAMAAAABAAAAAKQFAAMAAAABACAAAKQGAAMAAAABAAAAAKQyAAUAAAAEAAAF7qQzAAIAAAAGAAAGDqQ0AAIAAAAjAAAGFAAAAAAAAAABAAAAIQAAA', 'jpeg', 'images', 2),
(214, '1580392697699.jpeg', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QMKRXhpZgAATU0AKgAAAAgABwEPAAIAAAAGAAAAYgEQAAIAAAAZAAAAaAEaAAUAAAABAAAAggEbAAUAAAABAAAAigEoAAMAAAABAAIAAAEyAAIAAAAUAAAAkodpAAQAAAABAAAApgAAAABDYW5vbgBDYW5vbiBQb3dlclNob3QgU1g3NDAgSFMAAAAAAEgAAAABAAAASAAAAAEyMDE5OjEyOjI2IDEzOjAyOjA3AAAjgpoABQAAAAEAAAJQgp0ABQAAAAEAAAJYiCIAAwAAAAEAAQAAiCcAAwAAAAEAZAAAiDAAAwAAAAEAAgAAiDIABAAAAAEAAABkkAAABwAAAAQwMjMxkAMAAgAAABQAAAJgkAQAAgAAABQAAAJ0kQEABwAAAAQBAgMAkgEACgAAAAEAAAKIkgIABQAAAAEAAAKQkgQACgAAAAEAAAKYkgUABQAAAAEAAAKgkgcAAwAAAAEAAgAAkgkAAwAAAAEAAAAAkgoABQAAAAEAAAKokpAAAgAAAAM4NwAAkpEAAgAAAAM4NwAAkpIAAgAAAAM4NwAAoAAABwAAAAQwMTAwoAEAAwAAAAEAAQAAoAIABAAAAAEAAAqyoAMABAAAAAEAAAgEog4ABQAAAAEAAAKwog8ABQAAAAEAAAK4ohAAAwAAAAEAAgAApAEAAwAAAAEAAAAApAIAAwAAAAEAAQAApAMAAwAAAAEAAQAApAQABQAAAAEAAALApAYAAwAAAAEAAAAAp', 'jpeg', 'images', 1),
(215, '1580392878794.jpeg', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QMKRXhpZgAATU0AKgAAAAgABwEPAAIAAAAGAAAAYgEQAAIAAAAZAAAAaAEaAAUAAAABAAAAggEbAAUAAAABAAAAigEoAAMAAAABAAIAAAEyAAIAAAAUAAAAkodpAAQAAAABAAAApgAAAABDYW5vbgBDYW5vbiBQb3dlclNob3QgU1g3NDAgSFMAAAAAAEgAAAABAAAASAAAAAEyMDE5OjEyOjI2IDEzOjE2OjMwAAAjgpoABQAAAAEAAAJQgp0ABQAAAAEAAAJYiCIAAwAAAAEAAQAAiCcAAwAAAAEAZAAAiDAAAwAAAAEAAgAAiDIABAAAAAEAAABkkAAABwAAAAQwMjMxkAMAAgAAABQAAAJgkAQAAgAAABQAAAJ0kQEABwAAAAQBAgMAkgEACgAAAAEAAAKIkgIABQAAAAEAAAKQkgQACgAAAAEAAAKYkgUABQAAAAEAAAKgkgcAAwAAAAEAAgAAkgkAAwAAAAEAAAAAkgoABQAAAAEAAAKokpAAAgAAAAM3NAAAkpEAAgAAAAM3NAAAkpIAAgAAAAM3NAAAoAAABwAAAAQwMTAwoAEAAwAAAAEAAQAAoAIABAAAAAEAAAk+oAMABAAAAAEAAAbuog4ABQAAAAEAAAKwog8ABQAAAAEAAAK4ohAAAwAAAAEAAgAApAEAAwAAAAEAAAAApAIAAwAAAAEAAQAApAMAAwAAAAEAAQAApAQABQAAAAEAAALApAYAAwAAAAEAAAAAp', 'jpeg', 'images', 2),
(216, '1582570950403.png', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAASwCAIAAAAsYxHAAACAAElEQVR42uz9e3wT14E3/s/o6otsyzJgYWPZ2OZiA7aB2AnhUiANkKSQW0nyexK2aXfT9NuQtNuHTdMmebXpQ/u8cuk+bUiabbO7zYa2my5J00BCDAGbgE3AJsQ2IHORDZZvsjGybMuWNZI1vz9OmAy6jqTR1Z/3i1cb5NFo5mjO8ZwP55yhTcMTFAAAAACAqHLVqSgEAAAAEIsERQAAAAAAAAAAAPEMARYAAAAAAAAAAMQ1BFgAAAAAAAAAABDXEGABAAAAAAAAAEBcQ4AFAAAAAAAAAABxDQEWAAAAAAAAAADENQRYAAAAAAAAAAAQ1xBgAQAAAAAAAABAXEOABQAAAAAAAAAAcQ0BFgAAAAAAAAAAxDUEWAAAAAAAAAAAENcQYAEAAAAAAAAAQFxDgAUAAAAAAAAAAHENARYAAAAAAAAAAMQ1BFgAAAAAAAAAABDXEGABAAAAAAAAAEBcQ4AFAAAAAAAAAABxDQEWAAAAAAAAAADENQRYAAAAAAAAAAAQ1xBgAQAAAAAAAABAXEOABQAAAAAAAAAAcQ0BFgAAAAAAAAAAxDUEWAAAAAAAAAAAENcQYAEAAAAAAAAAQFxDgAUAAAAAAAAAAHENARYAAAAAAAAAAMQ1BFgAAAAAAAAAABDXEGABAAAAAAAAAEBcQ4AFAAAAAAAAAABxDQEWAAAAAAAAAADENQRYAAAAAAAAAAAQ1xBgAQAAAAAAAABAXE', 'png', 'images', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `folderdata`
--

CREATE TABLE `folderdata` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `folderdata`
--

INSERT INTO `folderdata` (`id`, `name`, `description`, `users_id`) VALUES
(1, 'Internet Programming', 'Developing web application using PHP', 1),
(2, 'Advanced Programming', 'Developing web application using ASP.NET MVC', 1),
(3, 'Ubiquitous Computing', 'Developing mobile application using Android Java', 2),
(4, 'Web Application Development', 'Developing mobile application using ASP.NET Web Forms', 2),
(11, 'Software Testing', 'Testing softwares', 1),
(12, 'OOP', 'Developing system using Object-Oriented Approach', 1),
(13, 'SRS', 'Documenting with SRS', 1);

-- --------------------------------------------------------

--
-- Table structure for table `folderfile`
--

CREATE TABLE `folderfile` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `filename` varchar(20) DEFAULT NULL,
  `type` varchar(15) DEFAULT NULL,
  `icon` varchar(15) DEFAULT NULL,
  `folder_id` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `dateuploaded` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `folderfile`
--

INSERT INTO `folderfile` (`id`, `name`, `filename`, `type`, `icon`, `folder_id`, `users_id`, `dateuploaded`) VALUES
(1, 'readme', 'readme.txt', 'txt', 'txt', NULL, 1, NULL),
(2, 'Ubiquitous', NULL, NULL, 'folder', NULL, 1, NULL),
(3, 'CLP', 'clp.pdf', 'pdf', 'pdf', 2, 1, NULL),
(4, 'Chapter 1-3', NULL, NULL, 'folder', 2, 1, NULL),
(5, 'Chapter 1', 'chapter1.pdf', 'pdf', 'pdf', 4, 1, NULL),
(6, 'Chapter 2', 'chapter2.pdf', 'pdf', 'pdf', 4, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `master_customer`
--

CREATE TABLE `master_customer` (
  `customer_id` int(11) NOT NULL,
  `name_customer` varchar(20) DEFAULT NULL,
  `desc_customer` varchar(100) DEFAULT NULL,
  `created_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `master_customer`
--

INSERT INTO `master_customer` (`customer_id`, `name_customer`, `desc_customer`, `created_at`) VALUES
(1, 'lol', 'lol', '2020-01-15'),
(2, 'lol', 'lol', '0000-00-00'),
(3, 'lol', 'lol', '2020-01-23'),
(4, 'lol', 'lol', '0000-00-00'),
(5, 'lol', 'lol', '0000-00-00'),
(6, 'add', 's', '2020-01-25'),
(7, 'lol', 'lel', NULL),
(8, 'lol', 'lel', NULL),
(9, '{\"name\":\"15799767957', 'lel', NULL),
(10, '{', 'lel', NULL),
(11, 'a', 'a', '2020-01-27'),
(12, '', '', '2020-01-27'),
(13, '', '', '2020-01-27'),
(14, 'bruh', 'btuvv', '2020-01-27'),
(15, 'lol', 'lel', NULL),
(16, 'lol', 'lel', '2020-01-27'),
(17, '', 'lel', '2020-01-27'),
(18, '', 'lel', '2020-01-27'),
(19, 'lp', 'lel', '2020-01-27'),
(20, 'lp', 'lel', '2020-01-27'),
(21, 'lp', 'lel', '2020-01-27'),
(22, 'lp', 'lel', '2020-01-27'),
(23, 'Array', 'lel', '2020-01-27'),
(24, 'lp', 'lel', '2020-01-27'),
(25, 'lp', 'lel', '2020-01-27'),
(26, 'lp', 'lel', '2020-01-27'),
(27, 'lp', 'lel', '2020-01-27'),
(28, 'lp', 'lel', '2020-01-27'),
(29, 'Array', 'lel', '2020-01-27'),
(30, 'lp', 'lel', '2020-01-27'),
(31, 'bruh', 'btuvv', '2020-01-27'),
(32, 'bruh', 'btuvv', '2020-01-27'),
(33, 'k', 'h', '2020-01-27'),
(34, 'rd', 'yg', '2020-01-27'),
(35, '', '', '2020-01-27'),
(36, 'k', 'h', '2020-01-27'),
(37, 'h', 'k', '2020-01-27'),
(38, 'Array', '', '2020-01-27'),
(39, 'Array', 'd', '2020-01-27'),
(40, 'Array', 'd', '2020-01-27'),
(41, '{\"action\":\"add\"}', '', '2020-01-27'),
(42, '', '{\"action\":\"add\"}', '2020-01-27'),
(43, '', 'add', '2020-01-27'),
(44, 'dede', 'add', '2020-01-29'),
(45, 'dede', 'dede', '2020-01-29'),
(46, 'de', 'de', '2020-01-29'),
(47, 'a', 'b', '2020-02-05');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `studid` int(11) NOT NULL,
  `studname` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `id` int(11) NOT NULL,
  `tagname` varchar(30) DEFAULT NULL,
  `tagdesc` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tag`
--

INSERT INTO `tag` (`id`, `tagname`, `tagdesc`) VALUES
(1, 'mysql', 'About mysql'),
(2, 'sql', 'About sql'),
(3, 'java', 'About java'),
(4, 'javascript', 'About javascript'),
(5, 'java', 'About java'),
(6, 'c#', 'About c#'),
(7, 'python', 'About python'),
(8, 'php', 'About php'),
(9, 'android', 'About android'),
(10, 'jquery', 'About jquery'),
(11, 'html', 'About html'),
(12, 'c++', 'About c++'),
(13, 'css', 'About css');

-- --------------------------------------------------------

--
-- Table structure for table `tagcomment`
--

CREATE TABLE `tagcomment` (
  `id` int(11) NOT NULL,
  `comment_id` int(11) DEFAULT NULL,
  `tag_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tagcomment`
--

INSERT INTO `tagcomment` (`id`, `comment_id`, `tag_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 5, 1),
(4, 6, 1),
(5, 7, 1),
(6, 8, 1),
(7, 9, 1),
(8, 10, 1),
(9, 1, 2),
(10, 2, 2),
(11, 5, 2),
(12, 6, 2),
(13, 25, 1),
(15, 26, 1),
(19, 28, 1),
(24, 29, 1),
(26, 30, 1),
(28, 31, 1),
(30, 33, 1),
(36, 34, 1),
(37, 34, 2),
(40, 35, 1),
(41, 35, 2),
(44, 36, 1),
(45, 36, 2),
(48, 37, 1),
(49, 37, 2),
(51, 38, 1),
(55, 39, 2),
(58, 40, 1),
(59, 40, 2),
(66, 42, 1),
(67, 42, 2),
(70, 43, 1),
(71, 43, 2),
(78, 45, 1),
(79, 45, 2),
(82, 46, 1),
(83, 46, 2),
(86, 47, 1),
(87, 47, 2),
(90, 48, 1),
(91, 48, 2),
(94, 49, 2),
(95, 49, 1),
(98, 50, 1),
(99, 50, 2),
(102, 51, 1),
(103, 51, 2),
(106, 52, 1),
(107, 52, 2),
(110, 53, 1),
(111, 53, 2),
(114, 54, 1),
(115, 54, 2),
(118, 55, 1),
(119, 55, 2),
(120, 56, 1),
(121, 57, 1),
(122, 58, 1),
(123, 59, 1),
(124, 60, 1),
(125, 61, 1),
(126, 62, 1),
(127, 63, 1),
(128, 64, 1),
(129, 65, 1),
(130, 66, 1),
(131, 67, 1),
(132, 68, 1),
(133, 69, 1),
(134, 70, 1),
(135, 71, 1),
(136, 72, 1),
(137, 73, 1),
(138, 74, 1),
(139, 75, 1),
(141, 76, 1),
(144, 77, 1),
(147, 78, 1),
(150, 79, 1),
(151, 80, 1),
(153, 81, 1),
(154, 82, 1),
(155, 83, 1),
(160, 84, 1),
(161, 85, 1),
(163, 86, 1),
(164, 87, 1),
(165, 88, 1),
(166, 89, 1),
(167, 90, 1),
(168, 91, 1),
(169, 92, 1),
(170, 93, 1),
(171, 94, 1),
(172, 95, 1),
(173, 96, 1),
(174, 97, 1),
(175, 98, 1),
(176, 99, 1),
(177, 100, 1),
(178, 101, 1),
(179, 102, 1),
(180, 103, 1),
(181, 104, 1),
(182, 105, 1),
(183, 106, 1),
(184, 107, 1),
(185, 108, 1),
(186, 109, 1),
(187, 110, 1),
(188, 111, 1),
(189, 112, 1),
(190, 113, 1),
(191, 114, 1),
(192, 115, 1),
(193, 116, 1),
(194, 117, 1),
(195, 118, 1),
(196, 119, 1),
(197, 120, 1),
(198, 121, 1),
(199, 122, 1),
(200, 123, 1),
(201, 124, 1),
(202, 125, 1),
(203, 126, 1),
(204, 127, 1),
(205, 127, 2),
(206, 128, 1),
(207, 129, 1),
(208, 130, 1),
(209, 131, 1),
(210, 132, 1),
(211, 133, 1),
(212, 133, 2),
(213, 134, 1),
(214, 134, 1),
(215, 136, 1),
(216, 136, 2),
(217, 137, 1),
(218, 137, 2),
(219, 138, 1),
(220, 138, 2),
(221, 139, 1),
(222, 140, 2),
(223, 141, 1),
(224, 142, 2),
(225, 142, 1),
(226, 142, 2),
(227, 143, 1),
(228, 144, 1),
(229, 144, 1),
(230, 145, 1),
(231, 146, 1),
(232, 148, 1),
(233, 151, 1),
(234, 151, 2),
(235, 152, 1),
(236, 152, 2),
(237, 153, 1),
(238, 154, 1),
(239, 154, 1),
(240, 155, 1),
(241, 156, 2),
(242, 157, 1),
(243, 158, 1),
(244, 158, 2),
(245, 159, 1),
(250, 160, 1),
(251, 161, 1),
(252, 161, 2),
(253, 162, 1),
(254, 162, 2),
(258, 163, 1),
(259, 163, 1),
(264, 164, 1),
(267, 165, 1),
(268, 166, 1),
(270, 167, 1),
(272, 168, 1),
(273, 169, 1),
(274, 170, 1),
(275, 171, 1),
(276, 172, 2),
(278, 174, 1),
(280, 176, 1),
(281, 177, 1),
(282, 178, 1),
(283, 179, 1),
(399, 192, 5),
(400, 184, 11),
(401, 184, 13),
(402, 183, 4),
(403, 183, 11),
(404, 182, 10),
(405, 181, 7),
(408, 180, 3),
(409, 180, 9),
(464, 193, 1),
(465, 193, 8),
(562, 194, 12),
(563, 194, 13);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(15) DEFAULT NULL,
  `passwordhash` varchar(100) DEFAULT NULL,
  `displayname` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `passwordhash`, `displayname`) VALUES
(1, 'hafizshamsul', 'lolol', NULL),
(2, 'aminshamsul', 'lolol', NULL),
(4, 'user', 'pass', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`),
  ADD KEY `replyto` (`replyto`);

--
-- Indexes for table `filedata`
--
ALTER TABLE `filedata`
  ADD PRIMARY KEY (`id`),
  ADD KEY `folderdata_id` (`folderdata_id`);

--
-- Indexes for table `folderdata`
--
ALTER TABLE `folderdata`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`);

--
-- Indexes for table `folderfile`
--
ALTER TABLE `folderfile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_customer`
--
ALTER TABLE `master_customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`studid`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tagcomment`
--
ALTER TABLE `tagcomment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_id` (`comment_id`),
  ADD KEY `tag_id` (`tag_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;

--
-- AUTO_INCREMENT for table `filedata`
--
ALTER TABLE `filedata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=217;

--
-- AUTO_INCREMENT for table `folderdata`
--
ALTER TABLE `folderdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `folderfile`
--
ALTER TABLE `folderfile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `master_customer`
--
ALTER TABLE `master_customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `studid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tag`
--
ALTER TABLE `tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tagcomment`
--
ALTER TABLE `tagcomment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=564;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`replyto`) REFERENCES `comment` (`id`);

--
-- Constraints for table `filedata`
--
ALTER TABLE `filedata`
  ADD CONSTRAINT `filedata_ibfk_1` FOREIGN KEY (`folderdata_id`) REFERENCES `folderdata` (`id`);

--
-- Constraints for table `folderdata`
--
ALTER TABLE `folderdata`
  ADD CONSTRAINT `folderdata_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `tagcomment`
--
ALTER TABLE `tagcomment`
  ADD CONSTRAINT `tagcomment_ibfk_1` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`),
  ADD CONSTRAINT `tagcomment_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
