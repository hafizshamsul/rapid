-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2020 at 06:09 PM
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
  `textcmt` varchar(200) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `replyto` int(11) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `dateuploaded` datetime NOT NULL DEFAULT current_timestamp(),
  `upvote` int(11) DEFAULT NULL,
  `downvote` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `textcmt`, `users_id`, `replyto`, `title`, `dateuploaded`, `upvote`, `downvote`) VALUES
(1, 'The CREATE DATABASE statement is used to create a new SQL database.', 1, NULL, 'How to Create DB', '2020-02-07 04:12:53', 500, 136),
(2, 'The DROP DATABASE statement is used to drop an existing SQL database.', 2, NULL, 'How to Drop DB', '2020-02-06 23:13:10', 500, 264),
(5, 'The BACKUP DATABASE statement is used in SQL Server to create a full back up of an existing SQL database.', 2, NULL, 'How to backup DB', '2020-02-06 11:13:32', 500, 171),
(6, 'The CREATE TABLE statement is used to create a new table in a database.', 2, NULL, 'How to create DB table', '2020-02-05 04:13:57', 500, 262),
(7, 'The DROP TABLE statement is used to drop an existing table in a database.', 2, NULL, 'How to drop DB table', '2020-01-17 04:14:20', 500, 222),
(8, 'The ALTER TABLE statement is used to add, delete, or modify columns in an existing table. The ALTER TABLE statement is also used to add and drop various constraints on an existing table.', 2, NULL, 'How to alter DB table', '2019-01-12 04:14:45', 500, 249),
(9, 'SQL constraints are used to specify rules for data in a table. Constraints can be specified when the table is created with the CREATE TABLE statement, or after the table is created with the ALTER TABL', 2, NULL, 'SQL Constraints', '2019-07-07 04:15:19', 500, 98),
(10, 'By default, a column can hold NULL values. The NOT NULL constraint enforces a column to NOT accept NULL values. This enforces a field to always contain a value, which means that you cannot insert a ne', 2, NULL, 'SQL NOT NULL', '2017-02-07 04:15:29', 500, 85);

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
(215, '1580392878794.jpeg', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QMKRXhpZgAATU0AKgAAAAgABwEPAAIAAAAGAAAAYgEQAAIAAAAZAAAAaAEaAAUAAAABAAAAggEbAAUAAAABAAAAigEoAAMAAAABAAIAAAEyAAIAAAAUAAAAkodpAAQAAAABAAAApgAAAABDYW5vbgBDYW5vbiBQb3dlclNob3QgU1g3NDAgSFMAAAAAAEgAAAABAAAASAAAAAEyMDE5OjEyOjI2IDEzOjE2OjMwAAAjgpoABQAAAAEAAAJQgp0ABQAAAAEAAAJYiCIAAwAAAAEAAQAAiCcAAwAAAAEAZAAAiDAAAwAAAAEAAgAAiDIABAAAAAEAAABkkAAABwAAAAQwMjMxkAMAAgAAABQAAAJgkAQAAgAAABQAAAJ0kQEABwAAAAQBAgMAkgEACgAAAAEAAAKIkgIABQAAAAEAAAKQkgQACgAAAAEAAAKYkgUABQAAAAEAAAKgkgcAAwAAAAEAAgAAkgkAAwAAAAEAAAAAkgoABQAAAAEAAAKokpAAAgAAAAM3NAAAkpEAAgAAAAM3NAAAkpIAAgAAAAM3NAAAoAAABwAAAAQwMTAwoAEAAwAAAAEAAQAAoAIABAAAAAEAAAk+oAMABAAAAAEAAAbuog4ABQAAAAEAAAKwog8ABQAAAAEAAAK4ohAAAwAAAAEAAgAApAEAAwAAAAEAAAAApAIAAwAAAAEAAQAApAMAAwAAAAEAAQAApAQABQAAAAEAAALApAYAAwAAAAEAAAAAp', 'jpeg', 'images', 2);

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
(1, 'sql', 'About sql'),
(2, 'database', 'About database');

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
(12, 6, 2);

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
(2, 'aminshamsul', 'lolol', NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `filedata`
--
ALTER TABLE `filedata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=216;

--
-- AUTO_INCREMENT for table `folderdata`
--
ALTER TABLE `folderdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tagcomment`
--
ALTER TABLE `tagcomment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
