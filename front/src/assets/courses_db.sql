-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2022 at 02:45 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `courses_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_start` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_end` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_instructor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_videos` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`course_videos`)),
  `course_grade` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `course_name`, `course_description`, `course_category`, `course_start`, `course_end`, `course_image`, `course_instructor`, `course_videos`, `course_grade`, `created_at`, `updated_at`) VALUES
(1, 'laravel', 'laravel tutorial', 'Hardware,Software Development', '2022-02-20T11:09', '2022-02-28T11:09', 'C:\\fakepath\\Logo-05.png', 'Dr.Ali', '[{\"video\":\"C:\\\\fakepath\\\\1 Book store Login Register .mp4\"},{\"video\":\"C:\\\\fakepath\\\\1- Online Session Laravel CRUD  Eng Tariq.mp4\"},{\"video\":\"C:\\\\fakepath\\\\1- project structure & db design.mp4\"},{\"video\":\"C:\\\\fakepath\\\\authentication (Db and User classes).mp4\"},{\"video\":\"C:\\\\fakepath\\\\Laravel 2  CRUD.mp4\"},{\"video\":\"C:\\\\fakepath\\\\Laravel Intro install migration MVC  films.mp4\"},{\"video\":\"C:\\\\fakepath\\\\products CRUD 1.mp4\"}]', '30', '2022-02-20 07:11:52', '2022-02-20 07:11:52'),
(2, 'laravel', 'laravel tutorial', 'Hardware,Software Development', '2022-02-20T17:07', '2022-02-28T17:07', 'C:\\fakepath\\Logo-05.png', 'Dr.Ali', '[{\"video\":\"C:\\\\fakepath\\\\1 Book store Login Register .mp4\"},{\"video\":\"C:\\\\fakepath\\\\1- Online Session Laravel CRUD  Eng Tariq.mp4\"},{\"video\":\"C:\\\\fakepath\\\\1- project structure & db design.mp4\"},{\"video\":\"C:\\\\fakepath\\\\Laravel 2  CRUD.mp4\"},{\"video\":\"C:\\\\fakepath\\\\products CRUD 2.mp4\"},{\"video\":\"C:\\\\fakepath\\\\validation.mp4\"}]', '24', '2022-02-20 13:10:12', '2022-02-20 13:10:12'),
(3, 'php', 'php tutorial', 'Hardware,Software Development', '2022-02-20T19:04', '2022-02-28T19:04', 'C:\\xampp\\tmp\\php4BD8.tmp', 'Dr.Ali', '[{\"video\":\"C:\\\\fakepath\\\\1 Book store Login Register .mp4\"},{\"video\":\"C:\\\\fakepath\\\\1- Online Session Laravel CRUD  Eng Tariq.mp4\"},{\"video\":\"C:\\\\fakepath\\\\1- project structure & db design.mp4\"},{\"video\":\"C:\\\\fakepath\\\\authentication (Db and User classes).mp4\"},{\"video\":\"C:\\\\fakepath\\\\Laravel 2  CRUD.mp4\"}]', '31', '2022-02-20 15:07:42', '2022-02-20 15:07:42'),
(4, 'css3', 'css3 Tutorial', 'Hardware,Software Development', '2022-02-20T19:09', '2022-02-28T19:09', 'C:\\xampp\\tmp\\php925B.tmp', 'Dr.Ali', '[{\"video\":\"C:\\\\fakepath\\\\1 Book store Login Register .mp4\"},{\"video\":\"C:\\\\fakepath\\\\1- Online Session Laravel CRUD  Eng Tariq.mp4\"},{\"video\":\"C:\\\\fakepath\\\\1- project structure & db design.mp4\"},{\"video\":\"C:\\\\fakepath\\\\authentication (Db and User classes).mp4\"},{\"video\":\"C:\\\\fakepath\\\\Laravel 2  CRUD.mp4\"},{\"video\":\"C:\\\\fakepath\\\\validation.mp4\"}]', '22', '2022-02-20 15:11:16', '2022-02-20 15:11:16'),
(5, 'Html5', 'Html5 Tutorial', 'Hardware,Software Development', '2022-02-20T19:13', '2022-02-28T19:13', 'C:\\xampp\\tmp\\phpEA2C.tmp', 'Dr.Ali', '[{\"video\":\"C:\\\\fakepath\\\\1 Book store Login Register .mp4\"},{\"video\":\"C:\\\\fakepath\\\\products CRUD 1.mp4\"},{\"video\":\"C:\\\\fakepath\\\\Laravel Intro install migration MVC  films.mp4\"},{\"video\":\"C:\\\\fakepath\\\\validation.mp4\"}]', '19', '2022-02-20 15:14:52', '2022-02-20 15:14:52'),
(6, 'javascript', 'javascript tutorial', 'Midicine,Software Development', '2022-02-20T19:16', '2022-02-28T19:16', 'C:\\xampp\\tmp\\php7A1C.tmp', 'Dr.Ali', '[{},{},{},{},{},{}]', '20', '2022-02-20 15:18:49', '2022-02-20 15:18:49');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2022_02_19_145915_courses', 1),
(3, '2022_02_19_161526_users', 1);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `confirmPassword` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `confirmPassword`, `role`, `created_at`, `updated_at`) VALUES
(1, 'mai mohamed', 'mai@gg.com', '$2y$10$ImzzZ5xC1s7daDPvaU9AxemrbLqxdGrJ1u27HBf1w2uYkZ5WYrwpy', '12345678', 'instructor', '2022-02-20 07:14:58', '2022-02-20 07:14:58'),
(2, 'bread', 'b@g.com', '$2y$10$HX4.GtMPuI7gq6M3qvZMp.1K78Ql8BHD8/KmqlYK9D/pR8qnuxVsW', '12345678', 'instructor', '2022-02-20 07:22:39', '2022-02-20 07:22:39'),
(3, 'sara', 's@g.com', '$2y$10$ot4PDkrMeBtpn.A23iqG6edt/uFjbJ7wuB0xYfvyP2ybcylGPgD2q', '123456', 'student', '2022-02-20 07:24:16', '2022-02-20 07:24:16'),
(4, 'ahmed', 'a@g.com', '$2y$10$yCdiQ.00pTvdDbu.OIPUje0VZoGGuKMFc61ki8qDZwRwvhxfVHfGK', '12345678', 'student', '2022-02-20 08:06:05', '2022-02-20 08:06:05'),
(5, 'emy', 'e@g.com', '$2y$10$p76DlRq/wyVgX7CopLDVGOGz3DfrW0N25y0Tu5/Zu1lBd4pNxOj2u', '123456789', 'instructor', '2022-02-20 08:08:04', '2022-02-20 08:08:04'),
(6, 'mai01', 'mai@gk.com', '$2y$10$ffCzYd8oC6I9XtMFqlNBHenYyHjc4fzX9dPUzuNC4j8Wovxzvhosu', 'AuthServi', 'instructor', '2022-02-20 08:18:16', '2022-02-20 08:18:16'),
(7, 'mai0101', 'mm@gg.com', '$2y$10$3SvAiswM646mEYQo0P2nRu2VS7dl5ZYM8WKqZH99H/O6VIVxE4Hpy', '12345678', 'instructor', '2022-02-20 08:26:42', '2022-02-20 08:26:42'),
(8, 'mai', 'maisabek01@gmail.com', '$2y$10$.zjzcrFvpfkPNamO.7UDIe8qeWXZC2KrWrYFe3IyfNlyiEZxDkhda', '12345678', 'instructor', '2022-02-20 08:43:51', '2022-02-20 08:43:51'),
(9, 'mai', 'mmm@gg.com', '$2y$10$uUW9yWtd4AWl/JdL7mUFN.RCtyIWVaxb5roM5S4kcV90Ytel882S6', '12345678', 'instructor', '2022-02-20 09:01:26', '2022-02-20 09:01:26'),
(10, 'mai9898', 'mc@w.com', '$2y$10$d.ruPam7Z3DIvfBH75H40uvqarywGKmskDXXH12My0XnN1leAXIwy', '123456789', 'instructor', '2022-02-20 10:03:38', '2022-02-20 10:03:38'),
(11, 'Program-Task', 'mkl@w.com', '$2y$10$yuTOxnU0654NiYz4C34pROPr5AXvjxUtYdLi0cdlrMT66WlZgI/vS', '123456789', 'instructor', '2022-02-20 10:05:09', '2022-02-20 10:05:09'),
(12, 'Program-Task', 'mklo@gg.com', '$2y$10$EgkoxvHn/J4HjmFle/WWkuZ2797hrAzSgW4aaBUP6OY5hHmnk.AMq', '12345678', 'student', '2022-02-20 10:08:00', '2022-02-20 10:08:00'),
(13, 'mai mohamed', 'a7medfci2020@gmail.com', '$2y$10$IVyCKiyIiuw/uEQXLsUI3uBbw2zTouKopDwkL8SbPNf8fKNDEL4YK', 'nnnnnnnnnnn', 'instructor', '2022-02-20 10:13:35', '2022-02-20 10:13:35'),
(14, 'mai mohamed', 'mmmjk@g.com', '$2y$10$E.iPaQ8ofztLKlwszc04Nuwr7HMjVyWCyAyRMNQWNLho9CD8bTyLK', 'mnjkioploi', 'instructor', '2022-02-20 10:23:38', '2022-02-20 10:23:38'),
(15, 'bread', 'mnjk@a.com', '$2y$10$tAbRccaRcUZ.6lJTgZIIWef8IBx3PXUSatQPcsZ/nTTkrRxZY.NTe', 'mmkkkkooo', 'instructor', '2022-02-20 10:25:32', '2022-02-20 10:25:32'),
(16, 'nn', 'maisabek01@gmail.com', '$2y$10$RN1J/ACsAibXuMUlP/fnpOpH2TsryzjZvDSZ4Pnz7FDAWnUN27lCO', 'mnjklopiu', 'instructor', '2022-02-20 10:42:58', '2022-02-20 10:42:58'),
(17, 'mai65', 'nm@g.com', '$2y$10$kQzIGUy5PDMJoE8eyqqRv.1KU/Rtv649tNQI5sxsTGYN9U1iMwyUi', 'mmnnnbbjjjk', 'student', '2022-02-20 10:58:53', '2022-02-20 10:58:53'),
(18, 'Program-Task', 'a7medfci2020@gmail.com', '$2y$10$9AVLfpFGbk3.r0CDFG0GVeZjJUY4wPgk9ZJY477PCnEBEzPxpmw.G', '12345678', 'instructor', '2022-02-20 12:44:33', '2022-02-20 12:44:33'),
(19, 'mai mohamed', 'a7medfci2020@gmail.com', '$2y$10$jWBbiAicR8cEuNeAvwWaheYCdt1of25Go1cM0BLOEkSe5knPjcKLq', '8888888888888', 'student', '2022-02-20 12:46:46', '2022-02-20 12:46:46'),
(20, 'mai mohamed', 'maisabek01@gmail.com', '$2y$10$SNQJp13RWUPEKjWF9WkNzuWEHhX9UlnFnQKgozoIrHHaH2J2BGC32', '87654321', 'instructor', '2022-02-21 07:07:52', '2022-02-21 07:07:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
