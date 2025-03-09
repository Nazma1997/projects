-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 09, 2025 at 04:59 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `complaint-management-system`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(180) NOT NULL,
  `user_id` int(180) NOT NULL,
  `ticket_id` int(180) NOT NULL,
  `parent_id` int(180) DEFAULT NULL,
  `is_reply` tinyint(1) DEFAULT 0,
  `is_seen` tinyint(1) NOT NULL DEFAULT 0,
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(180) NOT NULL,
  `user_id` int(180) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `is_submitted` tinyint(1) NOT NULL DEFAULT 1,
  `status` varchar(180) NOT NULL DEFAULT 'Not_submitted',
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `user_id`, `subject`, `description`, `is_submitted`, `status`, `created_at`, `updated_at`) VALUES
(1, 7, 'sdfgfrtghgjtghjfghfgh', 'fghftgthrdsfgbgvbhngjuvhrfcbfgvn', 1, 'Closed', '2025-03-01 04:34:50.000000', '2025-03-01 04:34:50.000000'),
(2, 7, 'w2qCVBCBVCVX', 'qesaDASDSA', 1, 'Closed', '2025-03-01 04:37:48.000000', '2025-03-01 04:37:48.000000'),
(3, 7, 'sdfadsfsdfdsgv', 'zcfdszfgvry5rtvdfgvdfg', 1, 'Closed', '2025-03-01 04:38:23.000000', '2025-03-01 04:38:23.000000'),
(4, 7, 'Autem consectetur ad', 'Aperiam quisquam eaq', 1, 'Closed', '2025-03-01 04:45:44.000000', '2025-03-01 04:45:44.000000'),
(5, 7, 'Non exercitation qui', 'Pariatur Repellendu', 1, 'Closed', '2025-03-01 04:46:52.000000', '2025-03-01 04:46:52.000000'),
(26, 8, 'Esse aliquam vel am', 'Dolores anim ad ut s', 1, 'Closed', '2025-03-01 10:22:17.000000', '2025-03-01 10:22:17.000000'),
(28, 8, 'Sint quis elit ani', 'Ullam veniam laudan', 1, 'Closed', '2025-03-01 11:44:49.000000', '2025-03-01 11:44:49.000000'),
(29, 8, 'Nostrud nobis adipis', 'Atque unde ut quia e', 1, 'Closed', '2025-03-01 11:46:47.000000', '2025-03-01 11:46:47.000000'),
(30, 8, 'Consequatur Et aute', 'Deserunt tempora qui', 1, 'Closed', '2025-03-01 11:53:09.000000', '2025-03-01 11:53:09.000000'),
(31, 8, 'Amet praesentium an', 'In officia minus des', 1, 'Closed', '2025-03-01 11:54:26.000000', '2025-03-01 11:54:26.000000'),
(32, 5, 'In perspiciatis ani', 'Et provident offici', 1, 'Closed', '2025-03-01 12:58:59.000000', '2025-03-01 12:58:59.000000'),
(33, 5, 'Tenetur animi bland', 'Dolore corrupti obc', 1, 'Resolved', '2025-03-01 12:59:06.000000', '2025-03-01 12:59:06.000000'),
(34, 5, 'Sit ut debitis est v', 'Amet ea a expedita ', 1, 'Open', '2025-03-01 13:04:03.000000', '2025-03-01 13:04:03.000000'),
(35, 8, 'Vel doloribus repell', 'Autem magna in totam', 1, 'Open', '2025-03-01 13:15:48.000000', '2025-03-01 13:15:48.000000'),
(36, 8, 'Amet amet quis est', 'Facilis accusamus in', 1, 'Open', '2025-03-01 13:16:00.000000', '2025-03-01 13:16:00.000000'),
(37, 8, 'Labore atque est po', 'Doloribus cupidatat ', 1, 'Open', '2025-03-01 13:16:36.000000', '2025-03-01 13:16:36.000000'),
(38, 8, 'Velit eu placeat n', 'Esse vel veniam ea', 1, 'Open', '2025-03-01 13:20:14.000000', '2025-03-01 13:20:14.000000');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(180) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` varchar(180) NOT NULL DEFAULT 'CUSTOMER',
  `notifications_count` int(180) NOT NULL DEFAULT 0,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `user_type`, `notifications_count`, `created_at`, `updated_at`) VALUES
(5, 'Admin', 'admin@gmail.com', '$scrypt$n=16384,r=8,p=1$VR8wGk1JegSj9yankL0TJw$xN9EkPUl3QL3baFrEgHhPxWS8fRTSMcYXpg3Ufuek2Nx0mvZCFC5jIuQiW6wFhIODqyLhl6gIw4LRF1MVzADLQ', 'ADMIN', 0, '2025-02-28 16:37:53.000000', '2025-02-28 16:37:53.000000'),
(6, 'Test user two', 'testu2@gmail.com', '$scrypt$n=16384,r=8,p=1$l78T7MDsqxtdGGjXrBKOgA$vdUPciJ/iVjdfxJbZCwQBAxdOJj+wVf/nwHY0zjKadxqUb1+cUTCMp7RplgioM9YqII36LiB+kPpUt+xefYzfw', 'CUSTOMER', 0, '2025-02-28 16:41:26.000000', '2025-02-28 16:41:26.000000'),
(7, 'Test user ', 'testuser@gmail.com', '$scrypt$n=16384,r=8,p=1$xJNmGvXYziJDp90mUn5G1Q$t1vyfe2ior1goARKJlBKsAGP5x+Q/If+tCeSpNRwHw2OklUMANG0Oa0g905CYKg1ZooCyxEvP6vNIIwLfOrfCw', 'CUSTOMER', 0, '2025-02-28 16:51:19.000000', '2025-02-28 16:51:19.000000'),
(8, 'Test user 1', 'user1@gmail.com', '$scrypt$n=16384,r=8,p=1$7h3fQFQbNozichYIDTTkrg$Aox2XYNKcPC9YMDyb2unGkVqaZ4Z1uqh+CDbz2ha7Qc7kvEOZMwdYNuAcJcnTEkA1vZiv/j2pAlUzcZHc81rUw', 'CUSTOMER', 0, '2025-03-01 05:25:06.000000', '2025-03-01 05:25:06.000000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(180) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(180) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(180) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
