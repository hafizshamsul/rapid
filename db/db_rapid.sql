-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2020 at 06:50 PM
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
-- Table structure for table `bookmark`
--

CREATE TABLE `bookmark` (
  `id` int(11) NOT NULL,
  `folderfile_id` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookmark`
--

INSERT INTO `bookmark` (`id`, `folderfile_id`, `users_id`) VALUES
(27, 194, 2),
(28, 219, 2),
(29, 220, 2),
(31, 194, 1),
(45, 375, 1),
(46, 221, 1),
(47, 219, 1);

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
(237, '<p><span style=\"color: rgb(36, 39, 41);\">Here is a piece of C++ code that shows some very peculiar behavior. For some strange reason, sorting the data miraculously makes the code almost six times faster:</span></p><pre class=\"ql-syntax\" spellcheck=\"false\">#include &lt;algorithm&gt;\n#include &lt;ctime&gt;\n#include &lt;iostream&gt;\n\nint main()\n{\n    // Generate data\n    const unsigned arraySize = 32768;\n    int data[arraySize];\n\n    for (unsigned c = 0; c &lt; arraySize; ++c)\n        data[c] = std::rand() % 256;\n\n    // !!! With this, the next loop runs faster.\n    std::sort(data, data + arraySize);\n\n    // Test\n    clock_t start = clock();\n    long long sum = 0;\n\n    for (unsigned i = 0; i &lt; 100000; ++i)\n    {\n        // Primary loop\n        for (unsigned c = 0; c &lt; arraySize; ++c)\n        {\n            if (data[c] &gt;= 128)\n                sum += data[c];\n        }\n    }\n\n    double elapsedTime = static_cast&lt;double&gt;(clock() - start) / CLOCKS_PER_SEC;\n\n    std::cout &lt;&lt', 1, NULL, 'Why is processing a sorted array faster than processing an unsorted array?', '2018-04-23 13:40:19', NULL, NULL, 237),
(238, '<p>I accidentally committed the wrong files to&nbsp;Git, but I haven\'t pushed the commit to the server yet.</p><p>How can I undo those commits from the local repository?</p>', 1, NULL, 'How do I undo the most recent local commits in Git?', '2020-02-23 13:42:06', NULL, NULL, 238),
(239, '<p>I want to delete a branch both locally and remotely.</p><h2>Failed Attempts to Delete a Remote Branch</h2><pre class=\"ql-syntax\" spellcheck=\"false\">$ git branch -d remotes/origin/bugfix\nerror: branch \'remotes/origin/bugfix\' not found.\n\n$ git branch -d origin/bugfix\nerror: branch \'origin/bugfix\' not found.\n\n$ git branch -rd origin/bugfix\nDeleted remote branch origin/bugfix (was 2a14ef7).\n\n$ git push\nEverything up-to-date\n\n$ git pull\nFrom github.com:gituser/gitproject\n\n* [new branch] bugfix -&gt; origin/bugfix\nAlready up-to-date.\n</pre><p>What should I do differently to successfully delete the&nbsp;<code style=\"background-color: var(--black-075);\">remotes/origin/bugfix</code>&nbsp;branch both locally and remotely?</p><p><br></p>', 1, NULL, 'How do I delete a Git branch locally and remotely?', '2020-04-13 13:43:15', NULL, NULL, 239),
(240, '<p><span style=\"color: rgb(36, 39, 41);\">What are the differences between&nbsp;</span><code style=\"color: rgb(36, 39, 41); background-color: var(--black-075);\">git pull</code><span style=\"color: rgb(36, 39, 41);\">&nbsp;and&nbsp;</span><code style=\"color: rgb(36, 39, 41); background-color: var(--black-075);\">git fetch</code><span style=\"color: rgb(36, 39, 41);\">?</span></p>', 1, NULL, 'What is the difference between git pull and git fetch?', '2020-04-21 13:46:14', NULL, NULL, 240),
(241, '<p>I\'ve been messing around with JSON for some time, just pushing it out as text and it hasn\'t hurt anybody (that I know of), but I\'d like to start doing things properly.</p><p>I have seen&nbsp;<em>so</em>&nbsp;many purported \"standards\" for the JSON content type:</p><pre class=\"ql-syntax\" spellcheck=\"false\">application/json\napplication/x-javascript\ntext/javascript\ntext/x-javascript\ntext/x-json\n</pre><p>But which one is correct, or best? I gather that there are security and browser support issues varying between them.</p><p>I know there\'s a similar question,&nbsp;What MIME type if JSON is being returned by a REST API?, but I\'d like a slightly more targeted answer.</p>', 1, NULL, 'What is the correct JSON content type?', '2020-04-26 12:47:46', NULL, NULL, 241),
(242, '<p>What is the use of the&nbsp;<code style=\"background-color: var(--black-075);\">yield</code>&nbsp;keyword in Python, and what does it do?</p><p>For example, I\'m trying to understand this code:</p><pre class=\"ql-syntax\" spellcheck=\"false\">def _get_child_candidates(self, distance, min_dist, max_dist):\n    if self._leftchild and distance - max_dist &lt; self._median:\n        yield self._leftchild\n    if self._rightchild and distance + max_dist &gt;= self._median:\n        yield self._rightchild  \n</pre><p><span style=\"color: rgb(36, 39, 41);\">And this is the caller:</span></p><pre class=\"ql-syntax\" spellcheck=\"false\">result, candidates = [], [self]\nwhile candidates:\n    node = candidates.pop()\n    distance = node._get_dist(obj)\n    if distance &lt;= max_dist and distance &gt;= min_dist:\n        result.extend(node._values)\n    candidates.extend(node._get_child_candidates(distance, min_dist, max_dist))\nreturn result\n</pre><p><span style=\"color: rgb(36, 39, 41);\">What happens when the method', 1, NULL, 'What does the yield keyword do?', '2018-04-23 13:49:14', NULL, NULL, 242),
(243, '<p><span style=\"color: rgb(36, 39, 41);\">I mistakenly added files to Git using the command:</span></p><pre class=\"ql-syntax\" spellcheck=\"false\">git add myfile.txt\n</pre><p><span style=\"color: rgb(36, 39, 41);\">I have not yet run&nbsp;</span><code style=\"color: rgb(36, 39, 41); background-color: var(--black-075);\">git commit</code><span style=\"color: rgb(36, 39, 41);\">. Is there a way to undo this, so these files won\'t be included in the commit?</span></p>', 1, NULL, 'How do I undo git add before commit?', '2018-04-23 13:50:09', NULL, NULL, 243),
(244, '<p>After reading&nbsp;Hidden Features and Dark Corners of C++/STL&nbsp;on&nbsp;<code style=\"background-color: var(--black-075);\">comp.lang.c++.moderated</code>, I was completely surprised that the following snippet compiled and worked in both Visual Studio 2008 and G++ 4.4.</p><p>Here\'s the code:</p><pre class=\"ql-syntax\" spellcheck=\"false\">#include &lt;stdio.h&gt;\nint main()\n{\n    int x = 10;\n    while (x --&gt; 0) // x goes to 0\n    {\n        printf(\"%d \", x);\n    }\n}\n</pre><p><span style=\"color: rgb(36, 39, 41);\">Output:</span></p><pre class=\"ql-syntax\" spellcheck=\"false\">9 8 7 6 5 4 3 2 1 0\n</pre><p><span style=\"color: rgb(36, 39, 41);\">I\'d assume this is C, since it works in GCC as well. Where is this defined in the standard, and where has it come from?</span></p>', 1, NULL, 'What is the --> operator in C++?', '2018-04-23 13:51:29', NULL, NULL, 244),
(245, '<p><span style=\"color: rgb(36, 39, 41);\">I don\'t want to rename a remote branch, as described in&nbsp;</span>Rename master branch for both local and remote Git repositories.</p><p>How can I rename a local branch which hasn\'t been pushed to a remote branch?</p><p>In case you need to rename&nbsp;<strong>remote</strong>&nbsp;branch as well:</p><p>How do I rename both a Git local and remote branch name</p>', 1, NULL, 'How do I rename a local Git branch?', '2020-02-23 13:52:50', NULL, NULL, 245),
(246, '<p>I have an array of numbers, and I\'m using the&nbsp;<code style=\"background-color: var(--black-075);\">.push()</code>&nbsp;method to add elements to it.</p><p>Is there a simple way to remove a specific element from an array?</p><p>The equivalent of something like -</p><pre class=\"ql-syntax\" spellcheck=\"false\">array.remove(number);\n</pre><p><span style=\"color: rgb(36, 39, 41);\">I have to use&nbsp;</span><em style=\"color: rgb(36, 39, 41);\">core</em><span style=\"color: rgb(36, 39, 41);\">&nbsp;JavaScript - frameworks are not allowed.</span></p>', 1, NULL, 'How can I remove a specific item from an array?', '2020-02-23 13:53:37', NULL, NULL, 246),
(247, '<p>Programming language books explain that value types are created on the&nbsp;<strong>stack</strong>, and reference types are created on the&nbsp;<strong>heap</strong>, without explaining what these two things are. I haven\'t read a clear explanation of this. I understand what&nbsp;<em>a stack</em>&nbsp;is. But,</p><ul><li>Where and what are they (physically in a real computer\'s memory)?</li><li>To what extent are they controlled by the OS or language run-time?</li><li>What is their scope?</li><li>What determines the size of each of them?</li><li>What makes one faster?</li></ul><p><br></p>', 1, NULL, 'What and where are the stack and heap?', '2020-02-23 13:54:13', NULL, NULL, 247),
(248, '<p><span style=\"color: rgb(36, 39, 41);\">How can I redirect the user from one page to another using jQuery or pure JavaScript?</span></p>', 1, NULL, 'How do I redirect to another webpage?', '2020-04-13 13:54:51', NULL, NULL, 248),
(249, '<p><span style=\"color: rgb(36, 39, 41);\">Is it possible to toggle the visibility of an element, using the functions&nbsp;</span><code style=\"color: rgb(36, 39, 41); background-color: var(--black-075);\">.hide()</code><span style=\"color: rgb(36, 39, 41);\">,&nbsp;</span><code style=\"color: rgb(36, 39, 41); background-color: var(--black-075);\">.show()</code><span style=\"color: rgb(36, 39, 41);\">&nbsp;or&nbsp;</span><code style=\"color: rgb(36, 39, 41); background-color: var(--black-075);\">.toggle()</code><span style=\"color: rgb(36, 39, 41);\">?</span></p><p><span style=\"color: rgb(36, 39, 41);\"><span class=\"ql-cursor\">﻿</span>How would you test if an element is&nbsp;</span><code style=\"color: rgb(36, 39, 41); background-color: var(--black-075);\">visible</code><span style=\"color: rgb(36, 39, 41);\">&nbsp;or&nbsp;</span><code style=\"color: rgb(36, 39, 41); background-color: var(--black-075);\">hidden</code><span style=\"color: rgb(36, 39, 41);\">?</span></p>', 1, NULL, 'How do I check if an element is hidden in jQuery?', '2020-04-13 13:55:25', NULL, NULL, 249),
(250, '<p>I wrote the wrong thing in a commit message.</p><p>How can I change the message? The commit has not been pushed yet.</p>', 1, NULL, 'How to modify existing, unpushed commit messages?', '2020-04-13 13:56:04', NULL, NULL, 250),
(251, '<p><span style=\"color: rgb(36, 39, 41);\">How would you explain JavaScript closures to someone with a knowledge of the concepts they consist of (for example functions, variables and the like), but does not understand closures themselves?</span></p><p><br></p><p><span style=\"color: rgb(36, 39, 41);\">I have seen&nbsp;</span>the Scheme example<span style=\"color: rgb(36, 39, 41);\">&nbsp;given on Wikipedia, but unfortunately it did not help.</span></p>', 1, NULL, 'How do JavaScript closures work?', '2020-04-21 14:00:27', NULL, NULL, 251),
(252, '<p>How do I revert from my current state to a snapshot made on a certain commit?</p><p>If I do&nbsp;<code style=\"background-color: var(--black-075);\">git log</code>, then I get the following output:</p><pre class=\"ql-syntax\" spellcheck=\"false\">$ git log\ncommit a867b4af366350be2e7c21b8de9cc6504678a61b`\nAuthor: Me &lt;me@me.com&gt;\nDate:   Thu Nov 4 18:59:41 2010 -0400\n\nblah blah blah...\n\ncommit 25eee4caef46ae64aa08e8ab3f988bc917ee1ce4\nAuthor: Me &lt;me@me.com&gt;\nDate:   Thu Nov 4 05:13:39 2010 -0400\n\nmore blah blah blah...\n\ncommit 0766c053c0ea2035e90f504928f8df3c9363b8bd\nAuthor: Me &lt;me@me.com&gt;\nDate:   Thu Nov 4 00:55:06 2010 -0400\n\nAnd yet more blah blah...\n\ncommit 0d1d7fc32e5a947fbd92ee598033d85bfc445a50\nAuthor: Me &lt;me@me.com&gt;\nDate:   Wed Nov 3 23:56:08 2010 -0400\n\nYep, more blah blah.\n</pre><p><span style=\"color: rgb(36, 39, 41);\">How do I revert to the commit from November 3, i.e. commit&nbsp;</span><code style=\"color: rgb(36, 39, 41); background-color: var(--black-075);', 1, NULL, 'How do I revert a Git repository to a previous commit?', '2020-04-21 14:01:45', NULL, NULL, 252),
(253, '<p><span style=\"color: rgb(36, 39, 41);\">Can I use comments inside a JSON file? If so, how?</span></p>', 1, NULL, 'Can comments be used in JSON?', '2020-04-21 14:11:55', NULL, NULL, 253),
(254, '<p>Recently, I ran some of my JavaScript code through Crockford\'s&nbsp;<a href=\"http://www.jslint.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--blue-700);\">JSLint</a>, and it gave the following error:</p><blockquote>Problem at line 1 character 1: Missing \"use strict\" statement.</blockquote><p>Doing some searching, I realized that some people add&nbsp;<code style=\"background-color: var(--black-075);\">\"use strict\";</code>&nbsp;into their JavaScript code. Once I added the statement, the error stopped appearing. Unfortunately, Google did not reveal much of the history behind this string statement. Certainly it must have something to do with how the JavaScript is interpreted by the browser, but I have no idea what the effect would be.</p><p>So what is&nbsp;<code style=\"background-color: var(--black-075);\">\"use strict\";</code>&nbsp;all about, what does it imply, and is it still relevant?</p><p>Do any of the current browsers respond to the&nbsp;<code style=\"background-co', 1, NULL, 'What does use strict do in JavaScript, and what is the reasoning behind it?', '2020-04-27 12:12:41', NULL, NULL, 254),
(255, '<p><span style=\"color: rgb(36, 39, 41);\">How come certain random strings produce colors when entered as background colors in HTML? For example:</span></p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;body bgcolor=\"chucknorris\"&gt; test &lt;/body&gt;\n</pre><p>...produces a document with a&nbsp;<strong>red background</strong>&nbsp;across all browsers and platforms.</p><p>Interestingly, while&nbsp;<code style=\"background-color: var(--black-075);\">chucknorri</code>&nbsp;produces a red background as well,&nbsp;<code style=\"background-color: var(--black-075);\">chucknorr</code>&nbsp;produces a yellow background.</p><p>What\'s going on here?</p>', 1, NULL, 'Why does HTML think chucknorris is a color?', '2020-04-27 12:14:12', NULL, NULL, 255),
(256, '<p>Usually I would expect a&nbsp;<code style=\"background-color: var(--black-075);\">String.contains()</code>&nbsp;method, but there doesn\'t seem to be one.</p><p>What is a reasonable way to check for this?</p>', 1, NULL, 'How to check whether a string contains a substring in JavaScript?', '2020-04-27 12:14:55', NULL, NULL, 256),
(257, '<pre class=\"ql-syntax\" spellcheck=\"false\">string hello = “hello world”;\n</pre><p>i have error here. Help.</p>', 1, NULL, 'Sarah try', '2020-04-23 19:32:20', NULL, NULL, 257),
(258, '<p>try testing</p><pre class=\"ql-syntax\" spellcheck=\"false\">int a = 55;\n</pre><p>terima kasih</p>', 1, NULL, 'Try test', '2020-04-27 14:42:23', NULL, NULL, 258),
(259, '<pre class=\"ql-syntax\" spellcheck=\"false\">int a = 2;\nstring b = “hello”;\n</pre><p>hello 2</p>', 1, NULL, 'Testingg', '2020-04-26 15:42:42', NULL, NULL, 259),
(261, '<p>Lololol</p><pre class=\"ql-syntax\" spellcheck=\"false\">echo “lel”;\n</pre><p>aahaja</p>', 1, NULL, 'Lololol', '2020-05-07 00:42:19', NULL, NULL, 261),
(265, '<p>e3e3e3e</p>', 1, NULL, 'e3e3e3', '2020-05-15 12:58:10', NULL, NULL, 265),
(266, '<p>dedededf</p>', 1, NULL, 'dededed', '2020-05-15 12:58:34', NULL, NULL, 266),
(268, '<p>huhu</p>', 1, NULL, 'HAHA', '2020-05-15 12:59:59', NULL, NULL, 268),
(270, '<p>Huji</p>', 1, NULL, 'Huji', '2020-05-15 13:03:36', NULL, NULL, 270),
(271, '<p>Frfrfr</p>', 2, NULL, 'Boy', '2020-05-15 13:04:04', NULL, NULL, 271),
(273, '', 1, NULL, '', '2020-05-30 17:53:24', NULL, NULL, 273),
(274, '', 1, NULL, '', '2020-05-30 17:53:25', NULL, NULL, 274),
(275, '', 1, NULL, '', '2020-05-30 17:53:27', NULL, NULL, 275),
(276, '', 1, NULL, '', '2020-05-30 17:53:30', NULL, NULL, 276),
(277, '', 1, NULL, '', '2020-05-30 17:53:30', NULL, NULL, 277),
(278, '', 1, NULL, '', '2020-05-30 17:53:31', NULL, NULL, 278),
(279, '', 1, NULL, '', '2020-05-30 17:53:31', NULL, NULL, 279),
(280, '', 1, NULL, '', '2020-05-30 17:53:31', NULL, NULL, 280),
(281, '', 1, NULL, '', '2020-05-30 17:53:31', NULL, NULL, 281),
(282, '', 1, NULL, '', '2020-05-30 17:53:31', NULL, NULL, 282),
(283, '', 1, NULL, '', '2020-05-30 17:53:32', NULL, NULL, 283),
(284, '', 1, NULL, '', '2020-05-30 17:53:32', NULL, NULL, 284),
(285, '<p>Huhu</p>', 1, NULL, 'Huhu', '2020-06-01 06:48:46', NULL, NULL, 285),
(290, '<p><span style=\"color: rgb(60, 60, 60);\">Complete this report and get approval and feedback from your supervisor.</span></p>', 1, NULL, 'a', '2020-10-01 18:28:27', NULL, NULL, 290),
(291, '<p><span style=\"color: rgb(60, 60, 60);\">Complete this report and get approval and feedback from your supervisor.</span></p>', 1, NULL, 'a', '2020-10-01 18:28:31', NULL, NULL, 291),
(301, '<p><span style=\"color: rgb(60, 60, 60);\">Complete this report and get approval and feedback from your supervisor.</span></p>', 1, NULL, 'ss', '2020-10-06 14:31:36', NULL, NULL, 301),
(302, '<p><span style=\"color: rgb(60, 60, 60);\">Complete this report and get approval and feedback from your supervisor.</span></p>', 1, NULL, 's', '2020-10-06 14:31:58', NULL, NULL, 302),
(303, '<p><span style=\"color: rgb(60, 60, 60);\">Complete this report and get approval and feedback from your supervisor.</span></p>', 1, NULL, 's', '2020-10-06 14:32:01', NULL, NULL, 303),
(304, '<p><span style=\"color: rgb(60, 60, 60);\">Complete this report and get approval and feedback from your supervisor.</span></p>', 1, NULL, 's', '2020-10-06 14:32:04', NULL, NULL, 304),
(306, '<p>trytest</p>', 1, NULL, 'Try', '2020-10-06 19:35:24', NULL, NULL, 306),
(307, '<p>Complete this report and get approval and feedback from your supervisor.</p><p>Due date is 23 September 2020.</p>', 1, NULL, 'try', '2020-10-06 19:36:39', NULL, NULL, 307),
(308, '<p>Complete this report and get approval and feedback from your supervisor.</p><p>Due date is 23 September 2020.</p>', 1, NULL, 'yu', '2020-10-06 19:37:11', NULL, NULL, 308),
(314, '<p>mysql</p>', 1, NULL, 'mysql', '2020-10-24 14:49:50', NULL, NULL, 314),
(315, '<p>sql</p>', 1, NULL, 'sql', '2020-10-24 14:51:40', NULL, NULL, 315),
(316, '<p>Hello</p>', 1, NULL, 'CLP ITPM', '2020-10-25 01:15:19', NULL, NULL, 316),
(317, '<p>Name: Sir Hafiz</p><p>Room no: 1234</p>', 1, NULL, 'Course Learning Outcome', '2020-10-25 02:28:04', NULL, NULL, 317),
(318, '<pre class=\"ql-syntax\" spellcheck=\"false\">ffrfrrf\n</pre>', 1, NULL, 'frfr', '2020-10-25 02:40:47', NULL, NULL, 318),
(319, 'lol', 1, NULL, 'gtgtgt', '2020-10-25 02:41:23', NULL, NULL, 319),
(320, '<p><span style=\"color: rgb(20, 23, 26);\">Wilfried Zaha has scored five goals in his last six Premier League games, as many as in his previous 41 combined. Upturn. Wilfried Zaha has scored five goals in his last six Premier League games, as many as in his previous 41 combined. Upturn.</span></p>', 1, NULL, 'frfr', '2020-10-25 18:20:27', NULL, NULL, 320),
(321, '<p><span style=\"color: rgb(20, 23, 26);\">Aboubakar Kamara is the first Fulham player to be sent off in the Premier League since André-Frank Zambo Anguissa versus Man Utd in December 2018. Dismissed. Aboubakar Kamara is the first Fulham player to be sent off in the Premier League since André-Frank Zambo Anguissa versus Man Utd in December 2018. Dismissed.</span></p>', 1, NULL, 'de', '2020-10-25 18:25:38', NULL, NULL, 321),
(322, '<p><span style=\"color: rgb(20, 23, 26);\">Jairo Riedewald has netted his first Premier League goal in his 33rd game in the competition, with what is his first-ever shot on target. Opener.</span></p>', 1, NULL, 'frc', '2020-10-25 18:46:25', NULL, NULL, 322),
(323, '<p><span style=\"color: rgb(20, 23, 26);\">Since the restart in June, only Harry Kane (12) has scored more Premier League goals than West Ham\'s Michail Antonio (11). Bicycle. Since the restart in June, only Harry Kane (12) has scored more Premier League goals than West Ham\'s Michail Antonio (11). Bicycle.</span></p>', 1, NULL, 'sw', '2020-10-25 18:46:56', NULL, NULL, 323),
(324, '<p><span style=\"color: rgb(20, 23, 26);\">Manchester City have named an unchanged line-up in consecutive games under Pep Guardiola for the first time since October 2017 (Stoke &amp; Napoli). Continuity.</span></p>', 1, NULL, 'swq', '2020-10-25 18:47:16', NULL, NULL, 324),
(332, '<p>real-time post 1</p>', 1, NULL, '', '2020-10-26 12:00:57', NULL, NULL, 332),
(333, '<p>real-time post 1</p>', 1, NULL, '', '2020-10-26 12:01:11', NULL, NULL, 333),
(334, '<p>fyp post 1</p>', 1, NULL, '', '2020-10-26 12:01:26', NULL, NULL, 334),
(335, '<p>ffrfrf</p>', 1, NULL, 'realtime & fyp post ', '2020-10-26 12:01:53', NULL, NULL, 335),
(336, '<p>dedede</p>', 1, NULL, 'dede', '2020-10-26 12:02:13', NULL, NULL, 336),
(342, '<p>lol</p>', 1, NULL, '', '2020-10-26 13:13:15', NULL, NULL, 342),
(343, '<p>ji</p>', 1, NULL, '', '2020-10-26 13:14:08', NULL, NULL, 343),
(344, '<p>der</p>', 1, NULL, '', '2020-10-26 13:15:02', NULL, NULL, 344),
(345, '<p>fr</p>', 1, NULL, '', '2020-10-26 13:15:06', NULL, NULL, 345),
(346, '<p>gt</p>', 1, NULL, '', '2020-10-26 13:15:09', NULL, NULL, 346),
(347, '<p>hy</p>', 1, NULL, '', '2020-10-26 13:15:11', NULL, NULL, 347),
(348, '<p>ju</p>', 1, NULL, '', '2020-10-26 13:15:13', NULL, NULL, 348),
(349, '<p>ki</p>', 1, NULL, '', '2020-10-26 13:15:15', NULL, NULL, 349),
(350, '<p>lo</p>', 1, NULL, '', '2020-10-26 13:15:18', NULL, NULL, 350),
(351, '<p>;p</p>', 1, NULL, '', '2020-10-26 13:15:21', NULL, NULL, 351),
(352, '<p>sw</p>', 1, NULL, '', '2020-10-26 13:15:25', NULL, NULL, 352),
(353, '<p>ko</p>', 1, NULL, '', '2020-10-26 13:35:07', NULL, NULL, 353),
(354, '<p>st</p>', 1, NULL, '', '2020-10-26 13:35:16', NULL, NULL, 354),
(355, '<p>ko</p>', 1, NULL, '', '2020-10-26 13:35:32', NULL, NULL, 355),
(356, '<p>ki</p>', 1, NULL, '', '2020-10-26 13:36:27', NULL, NULL, 356),
(357, '<p>lol</p>', 1, NULL, '', '2020-10-26 13:36:32', NULL, NULL, 357),
(358, '<p>er</p>', 1, NULL, '', '2020-10-26 13:36:39', NULL, NULL, 358),
(359, '<p>ki</p>', 1, NULL, '', '2020-10-26 13:39:43', NULL, NULL, 359),
(360, '<p><strong>cuba try test</strong></p><p><em>cuba try test</em></p><p><u>cuba try test</u></p><p>cuba try test</p>', 1, NULL, '', '2020-10-26 14:11:03', NULL, NULL, 360),
(363, '<p>Good morning everyone. Today we will have an online test on 2PM. Thank you.</p>', 1, NULL, '', '2020-10-26 19:18:51', NULL, NULL, 363),
(364, '<p>Good morning everyone. Today we will have an online test on 2PM. Thank you.</p>', 1, NULL, '', '2020-10-26 19:19:17', NULL, NULL, 364),
(365, '<p>Good morning everyone. Today we will have an online test on 2PM. Thank you.</p>', 1, NULL, '', '2020-10-26 19:19:26', NULL, NULL, 365),
(366, '<p>Good morning everyone. Today we will have an online test on 2PM. Thank you.</p>', 1, NULL, '', '2020-10-26 19:19:33', NULL, NULL, 366),
(367, '<p>Good morning everyone. Today we will have an online test on 2PM. Thank you.</p>', 1, NULL, '', '2020-10-26 19:19:38', NULL, NULL, 367),
(374, '<p>lel</p>', 1, NULL, '', '2020-10-27 12:07:42', NULL, NULL, 374),
(375, '<p>lol</p>', 1, NULL, '', '2020-10-27 12:13:49', NULL, NULL, 375),
(376, '<p>fr4</p>', 1, NULL, 'fr4', '2020-10-27 15:33:22', NULL, NULL, 376),
(378, '<p>Assalamualaikum students. I am not in campus today. TQ.</p>', 1, NULL, '', '2020-10-27 15:58:37', NULL, NULL, 378);

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
  `name` varchar(100) DEFAULT NULL,
  `filename` varchar(100) DEFAULT NULL,
  `type` varchar(15) DEFAULT NULL,
  `icon` varchar(15) DEFAULT NULL,
  `folder_id` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `dateuploaded` date DEFAULT NULL,
  `visibility` varchar(10) DEFAULT NULL,
  `originalname` varchar(50) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `folderfile`
--

INSERT INTO `folderfile` (`id`, `name`, `filename`, `type`, `icon`, `folder_id`, `users_id`, `dateuploaded`, `visibility`, `originalname`, `room_id`) VALUES
(194, 'Software Testing', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, 1),
(195, 'Advanced Programming', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, NULL),
(201, 'Chapter 1 - Fundamentals.pdf', '1588208091866.pdf', 'pdf', 'pdf', 194, 1, NULL, NULL, 'Chapter 1 - Fundamentals.pdf', 1),
(202, 'Chapter 2 - Lifecycle.pdf', '1588208101827.pdf', 'pdf', 'pdf', 194, 1, NULL, NULL, 'Chapter 2 - Lifecycle.pdf', 1),
(203, 'Chapter 3 - Static Test.pdf', '1588208110331.pdf', 'pdf', 'pdf', 194, 1, NULL, NULL, 'Chapter 3 - Static Test.pdf', 1),
(204, 'Chapter 4 - Black Box.pdf', '1588208117760.pdf', 'pdf', 'pdf', 194, 1, NULL, NULL, 'Chapter 4 - Black Box.pdf', 1),
(205, 'Chapter 5 - White Box.pdf', '1588208127499.pdf', 'pdf', 'pdf', 194, 1, NULL, NULL, 'Chapter 5 - White Box.pdf', 1),
(206, 'Chapter 6 - Test Management.pdf', '1588208138762.pdf', 'pdf', 'pdf', 194, 1, NULL, NULL, 'Chapter 6 - Test Management.pdf', 1),
(207, 'Chapter 7 - Tools.pdf', '1588208146859.pdf', 'pdf', 'pdf', 194, 1, NULL, NULL, 'Chapter 7 - Tools.pdf', 1),
(208, 'Lab Exercise 1 - Introduction to ASP.NET MVC.pdf', '1588208283229.pdf', 'pdf', 'pdf', 195, 1, NULL, NULL, 'Lab Exercise 1 - Introduction to ASP.NET MVC.pdf', NULL),
(209, 'Lab Exercise 2 - Creating a Simple Data-Entry Application.pdf', '1588208291786.pdf', 'pdf', 'pdf', 195, 1, NULL, NULL, 'Lab Exercise 2 - Creating a Simple Data-Entry Appl', NULL),
(210, 'Lab Exercise 3 - Array.pdf', '1588208299034.pdf', 'pdf', 'pdf', 195, 1, NULL, NULL, 'Lab Exercise 3 - Array.pdf', NULL),
(211, 'Lab Exercise 4 - Collection.pdf', '1588208306136.pdf', 'pdf', 'pdf', 195, 1, NULL, NULL, 'Lab Exercise 4 - Collection.pdf', NULL),
(212, 'Lab Exercise 5 - ADO.NET - Displaying List and Details.pdf', '1588208312929.pdf', 'pdf', 'pdf', 195, 1, NULL, NULL, 'Lab Exercise 5 - ADO.NET - Displaying List and Det', NULL),
(213, 'Lab Exercise 6 - ADO.NET - Creating, Editing and Deleting.pdf', '1588208319792.pdf', 'pdf', 'pdf', 195, 1, NULL, NULL, 'Lab Exercise 6 - ADO.NET - Creating, Editing and D', NULL),
(214, 'Lab Exercise 7 - LINQ.pdf', '1588208326736.pdf', 'pdf', 'pdf', 195, 1, NULL, NULL, 'Lab Exercise 7 - LINQ.pdf', NULL),
(215, 'Lab Exercise 8 - Entity Framework - Displaying List.pdf', '1588208334242.pdf', 'pdf', 'pdf', 195, 1, NULL, NULL, 'Lab Exercise 8 - Entity Framework - Displaying Lis', NULL),
(216, 'Lab Exercise 9 - Entity Framework - Paging, Searching and Details.pdf', '1588208343051.pdf', 'pdf', 'pdf', 195, 1, NULL, NULL, 'Lab Exercise 9 - Entity Framework - Paging, Search', NULL),
(217, 'Lab Exercise 10 - Entity Framework - Creating, Editing and Deleting Data.pdf', '1588208351992.pdf', 'pdf', 'pdf', 195, 1, NULL, NULL, 'Lab Exercise 10 - Entity Framework - Creating, Edi', NULL),
(219, 'Ubiquitous Computing', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, NULL),
(220, 'Research Methodology', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, NULL),
(221, 'Web Application Development', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, NULL),
(222, 'Internet Programming', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, NULL),
(354, 'setA.png', '1590903548536.png', 'png', 'images', NULL, NULL, NULL, NULL, 'setA.png', 1),
(355, 'setB.png', '1590903554743.png', 'png', 'images', NULL, 1, NULL, NULL, 'setB.png', 1),
(356, 'Week 1', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, 2),
(357, 'Week 2', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, 2),
(358, 'Week 3', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, 2),
(359, 'Week 4', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, 2),
(360, 'Week 5', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, 2),
(361, 'Week 6', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, 2),
(370, 'Untitled', NULL, NULL, 'folder', 369, 1, NULL, NULL, NULL, NULL),
(375, 'Untitled', NULL, NULL, 'folder', 194, 1, NULL, NULL, NULL, 1),
(376, 'Untitledko', NULL, NULL, 'folder', 375, 1, NULL, NULL, NULL, NULL),
(392, 'CLP', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, 1),
(393, 'fyp 1 present.pdf', '1590986590690.pdf', 'pdf', 'pdf', NULL, 1, NULL, NULL, 'fyp 1 present.pdf', 1),
(394, 'Untitled', NULL, NULL, 'folder', NULL, 1, NULL, NULL, NULL, 1),
(397, 'diagram test.png', '1598279043335.png', 'png', 'images', NULL, 1, NULL, NULL, 'diagram test.png', 1),
(399, 'rainbow2.jpg', '1601106002913.jpeg', 'jpeg', 'images', NULL, 1, NULL, NULL, 'rainbow2.jpg', 1),
(404, 'Hafiz SQ Lab 6.pptx', '1601130141482.pptx', 'pptx', 'presentation', NULL, 1, NULL, NULL, 'Hafiz SQ Lab 6.pptx', 1),
(419, 'ISB 42703 - GroupProject.docx', '1603204751809.docx', 'docx', 'doc', NULL, 1, NULL, NULL, 'ISB 42703 - GroupProject.docx', 18),
(420, 'Untitled2', NULL, NULL, 'folder', 194, 1, NULL, NULL, NULL, 1),
(422, 'Deliverables.txt', '1603589865983.txt', 'txt', 'doc', NULL, 1, NULL, NULL, 'Deliverables.txt', 1),
(423, 'ISB 42703 - GroupProject.docx', '1603589879901.docx', 'docx', 'doc', NULL, 1, NULL, NULL, 'ISB 42703 - GroupProject.docx', 1),
(424, 'Deliverables.txt', '1603589992396.txt', 'txt', 'doc', NULL, 1, NULL, NULL, 'Deliverables.txt', 1);

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
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`id`, `name`, `description`) VALUES
(1, 'Real-Time and Embedded', 'lol'),
(2, 'Final Year Project 1', 'lol'),
(3, 'Research Methodology', 'lol'),
(4, 'IT Project Management', 'lol'),
(5, 'Software Testing', 'lol'),
(17, 'efref', 'erferferf'),
(18, 'dede', 'deded');

-- --------------------------------------------------------

--
-- Table structure for table `roomusers`
--

CREATE TABLE `roomusers` (
  `id` int(11) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(1, 'Real-time and Embedded', 'About Real-time and Embedded'),
(2, 'Final Year Project 1', 'About  Final Year Project 1'),
(3, 'Research Methodology', 'About Research Methodology'),
(4, 'IT Project Management', 'About IT Project Management'),
(5, 'Software Testing', 'About Software Testing'),
(6, 'c#', 'About c#'),
(7, 'python', 'About python'),
(8, 'php', 'About php'),
(9, 'json', 'About json'),
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
(635, 237, 3),
(636, 237, 12),
(637, 242, 7),
(638, 244, 12),
(639, 246, 4),
(640, 248, 4),
(641, 248, 10),
(642, 249, 4),
(643, 249, 10),
(644, 251, 4),
(645, 252, 5),
(646, 250, 5),
(647, 247, 5),
(648, 245, 5),
(649, 238, 5),
(650, 239, 5),
(651, 240, 5),
(652, 243, 5),
(653, 241, 9),
(654, 253, 9),
(655, 254, 4),
(656, 255, 11),
(657, 256, 4),
(658, 257, 6),
(659, 258, 8),
(660, 259, 9),
(663, 261, 1),
(664, 261, 8),
(668, 265, 1),
(669, 266, 2),
(671, 268, 1),
(674, 270, 8),
(675, 271, 1),
(678, 285, 1),
(685, 314, 1),
(686, 315, 2),
(687, 316, 4),
(688, 317, 1),
(689, 317, 2),
(690, 317, 3),
(691, 317, 4),
(692, 317, 5),
(693, 318, 1),
(694, 319, 1),
(695, 320, 1),
(696, 321, 1),
(697, 322, 1),
(698, 323, 1),
(699, 324, 1),
(707, 332, 1),
(708, 333, 1),
(709, 334, 2),
(710, 335, 1),
(711, 335, 2),
(712, 336, 1),
(713, 336, 2),
(719, 342, 2),
(720, 343, 1),
(721, 344, 1),
(722, 345, 1),
(723, 346, 1),
(724, 347, 1),
(725, 348, 1),
(726, 349, 1),
(727, 350, 1),
(728, 351, 1),
(729, 352, 1),
(730, 353, 1),
(731, 354, 5),
(732, 355, 5),
(733, 356, 5),
(734, 357, 5),
(736, 359, 1),
(737, 360, 1),
(740, 363, 1),
(741, 364, 2),
(742, 365, 3),
(743, 366, 4),
(744, 367, 5),
(754, 375, 1),
(755, 376, 1),
(756, 376, 2),
(766, 378, 1),
(767, 378, 2);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `name`, `start`, `end`, `room_id`) VALUES
(1, 'Quiz 1', NULL, NULL, 1),
(2, 'Quiz 2', NULL, NULL, 1),
(6, 'Test', NULL, NULL, 1),
(40, 'Assignment', NULL, NULL, 1),
(41, 'Project', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(15) DEFAULT NULL,
  `passwordhash` varchar(100) DEFAULT NULL,
  `displayname` varchar(20) DEFAULT NULL,
  `role` varchar(10) DEFAULT NULL,
  `dateregistered` date DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `passwordhash`, `displayname`, `role`, `dateregistered`, `status`) VALUES
(1, 'hafizshamsul', 'lolol', 'Muhammad Hafiz', 'User', '2020-02-07', 'Active'),
(2, 'aminshamsul', 'lolol', 'Muhammad Amin', 'User', '2020-02-07', 'Active'),
(4, 'user', 'pass', 'User1', 'User', '2020-02-07', 'Active'),
(5, 'admin', 'lolol', 'Muhammad Admin', 'Admin', '2020-04-07', 'Active'),
(6, 'sarahshamsul', 'lolol', 'Siti Sarah', 'User', '2020-04-07', 'Active'),
(7, 'aishahshamsul', 'lolol', 'Siti Aishah', 'User', '2020-04-07', 'Inactive'),
(8, 'shahidshamsul', 'lolol', 'Muhammad Shahid', 'User', '2020-03-07', 'Inactive');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookmark`
--
ALTER TABLE `bookmark`
  ADD PRIMARY KEY (`id`),
  ADD KEY `folderfile_id` (`folderfile_id`),
  ADD KEY `users_id` (`users_id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`),
  ADD KEY `replyto` (`replyto`);
ALTER TABLE `comment` ADD FULLTEXT KEY `textcmt_2` (`textcmt`);
ALTER TABLE `comment` ADD FULLTEXT KEY `title` (`title`);
ALTER TABLE `comment` ADD FULLTEXT KEY `textcmt` (`textcmt`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indexes for table `master_customer`
--
ALTER TABLE `master_customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roomusers`
--
ALTER TABLE `roomusers`
  ADD KEY `users_id` (`users_id`),
  ADD KEY `room_id` (`room_id`);

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
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `users` ADD FULLTEXT KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookmark`
--
ALTER TABLE `bookmark`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=379;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=425;

--
-- AUTO_INCREMENT for table `master_customer`
--
ALTER TABLE `master_customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=768;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookmark`
--
ALTER TABLE `bookmark`
  ADD CONSTRAINT `bookmark_ibfk_1` FOREIGN KEY (`folderfile_id`) REFERENCES `folderfile` (`id`),
  ADD CONSTRAINT `bookmark_ibfk_2` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

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
-- Constraints for table `folderfile`
--
ALTER TABLE `folderfile`
  ADD CONSTRAINT `folderfile_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`);

--
-- Constraints for table `roomusers`
--
ALTER TABLE `roomusers`
  ADD CONSTRAINT `roomusers_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `roomusers_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`);

--
-- Constraints for table `tagcomment`
--
ALTER TABLE `tagcomment`
  ADD CONSTRAINT `tagcomment_ibfk_1` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`),
  ADD CONSTRAINT `tagcomment_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`);

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
