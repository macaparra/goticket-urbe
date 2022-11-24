-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2022 a las 02:07:26
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `goticketbdd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id` int(3) NOT NULL,
  `nombre_usuario_adm` varchar(16) NOT NULL,
  `cedula_adm` varchar(13) NOT NULL,
  `fecha_nacimiento_adm` date NOT NULL,
  `telefono_adm` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `nombre_usuario_adm`, `cedula_adm`, `fecha_nacimiento_adm`, `telefono_adm`, `email`, `password`) VALUES
(1, 'admincarlos', 'V-28326446', '2002-07-20', '0424-6565200', 'ceferrer1@urbe.edu.ve', '$2a$08$RJfAIXucthK5lQ9V9CGSwevpMhW950zPiBjaOfD3bIpP30haQwg8q'),
(8, 'adminmacarena', '30682886', '2002-02-09', '0424-6992967', 'msparra@urbe.edu.ve', '$2a$08$ljj0fbA9YZT3G9tyZc6AJOe9fb0g7F/NZbO4KrGkGrwcTm4BNIhFa'),
(9, 'admingioanny', '30181664', '2003-04-04', '0424-6855898', 'grlopez@urbe.edu.ve', '$2a$08$1XomR98JCfQr5m.8yv.uuewCeHRJSeQeA0H8olTV1Z1iPS7zcMLBG'),
(10, 'adminjuan', '28000574', '2000-11-11', '0424-6884582', 'jdvillasmil1@urbe.edu.ve', '$2a$08$kSJ5WNCjjMDsLPZ9nvKgeOFGNeZKTnodfPS66NlHcn.oNHfdSJfvC'),
(11, 'adminandres', '29811222', '2002-11-22', '0412-1202696', 'aegil@urbe.edu.ve', '$2a$08$p1/76M0TyZ9Hb7xxCMp9EutcBMyKPhvdqclsV6hBTM0ZtZSrFpdyS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(3) NOT NULL,
  `username` varchar(16) NOT NULL,
  `ncedula` text NOT NULL,
  `cedula` varchar(13) NOT NULL,
  `fnacimiento` date NOT NULL,
  `codetelefono` varchar(5) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `direccion` varchar(30) NOT NULL,
  `gender` text NOT NULL,
  `ciudad` text NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `username`, `ncedula`, `cedula`, `fnacimiento`, `codetelefono`, `telefono`, `direccion`, `gender`, `ciudad`, `email`, `password`) VALUES
(105, 'macaparra', 'V', '29454262', '2002-09-15', '+58', '4246789983', 'Calle H', 'F', 'Maracaibo', 'macarenaparra@gmail.com', '$2a$08$Wl9/xD8CSzYS0t3UIYA/le5UXSe2LPfg9gkBWige2TldLFBZ2gX0O'),
(106, 'carloseferrer', 'V', '28326444', '2002-07-20', '+58', '424-6565200', 'Calle H', 'M', 'Maracaibo', 'carlosferrerobert2o@gmail.com', '$2a$08$Vd9ncSKTwaM3YMgnD4in9ul86hArJ85mCdjuvB9WEz.sHEIcsfNp6'),
(107, 'macarena123', 'V', '28326443', '2002-07-20', '+58', '424-6565000', 'Calle H', 'M', 'aaa', 'macarena23213332@gmail.com', '$2a$08$bix/Ht.hUz9cryzpmZhEg.R.D7pSfN83XI/cBQr/3Nd9RZwg37lwO'),
(108, 'ferrercarlitos', 'V', '28326446', '2002-07-20', '+58', '424-6565201', 'Calle H', 'M', 'Maracaibo', 'carlosferreroberto@gmail.com', '$2a$08$64Rgxt2o8X5XZEynZ4/pYuQVgL5TUPvMJnDmUGPBT5IYwLoMMfPiK'),
(110, 'maca1test', 'V', '30605325', '2002-07-20', '+58', '414-6154558', 'Calle h', 'M', 'Maracaibo', 'macarena2321322@gmail.com', '$2a$08$eBlsYzHaPfPaWjIBd3ovXu2e.oVO/LhNp9AHSTT3cTJ5qjyJWUY/O');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprapm`
--

CREATE TABLE `comprapm` (
  `id` int(3) NOT NULL,
  `email` varchar(30) NOT NULL,
  `ncedula` text NOT NULL,
  `cedula` varchar(13) NOT NULL,
  `banco` text NOT NULL,
  `codetelefono` varchar(5) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `ubicacion` text NOT NULL,
  `cantidad_asientos` int(4) NOT NULL,
  `monto` double(10,2) NOT NULL,
  `sevento` text NOT NULL,
  `fecha_compra` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comprapm`
--

INSERT INTO `comprapm` (`id`, `email`, `ncedula`, `cedula`, `banco`, `codetelefono`, `telefono`, `ubicacion`, `cantidad_asientos`, `monto`, `sevento`, `fecha_compra`) VALUES
(36, 'carlosferreroberto@gmail.com', 'V', '28326446', 'Provincial', '+58', '424-6565200', 'General', 2, 1600.00, 'Los Mesoneros', '2022-11-23'),
(37, 'carlosferreroberto@gmail.com', 'V', '28326446', 'BNC', '+58', '424-6565200', 'VIP', 2, 7000.00, 'Las Inmamables', '2022-11-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compraz`
--

CREATE TABLE `compraz` (
  `id` int(3) NOT NULL,
  `email` varchar(30) NOT NULL,
  `referencia` varchar(15) NOT NULL,
  `titular_cuenta` text NOT NULL,
  `ubicacionz` text NOT NULL,
  `cantidad_asientosz` int(4) NOT NULL,
  `monto` double(10,2) NOT NULL,
  `sevento` text NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `compraz`
--

INSERT INTO `compraz` (`id`, `email`, `referencia`, `titular_cuenta`, `ubicacionz`, `cantidad_asientosz`, `monto`, `sevento`, `fecha_compra`) VALUES
(14, 'carlosferreroberto@gmail.com', '#dsadadassad', 'Carlos Ferrer', 'General', 2, 160.00, 'Guaco', '2022-11-23'),
(15, 'carlosferreroberto@gmail.com', '#dsadadassad', 'Carlos Ferrer', 'General', 2, 160.00, 'Motherflowers', '2022-11-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(4) NOT NULL,
  `titulo_evento` text NOT NULL,
  `categoria` text NOT NULL,
  `asientos_grada` int(5) NOT NULL,
  `asientos_pista` int(5) NOT NULL,
  `asientos_vip` int(4) NOT NULL,
  `ubicacion` text NOT NULL,
  `hora` time NOT NULL,
  `fecha_evento` date NOT NULL,
  `precio_grada` double(10,2) NOT NULL,
  `precio_pista` double(10,2) NOT NULL,
  `precio_vip` double(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `titulo_evento`, `categoria`, `asientos_grada`, `asientos_pista`, `asientos_vip`, `ubicacion`, `hora`, `fecha_evento`, `precio_grada`, `precio_pista`, `precio_vip`) VALUES
(8, 'Bad Bunny', 'Musica', 2222, 2222, 22, 'Palacio de Eventos', '20:00:00', '2002-07-20', 1002.00, 1002.00, 5004.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturasbs`
--

CREATE TABLE `facturasbs` (
  `id` int(5) NOT NULL,
  `banco` text NOT NULL,
  `ubicacion` text NOT NULL,
  `cantidad_asientos` int(4) NOT NULL,
  `monto` double(10,2) NOT NULL,
  `sevento` text NOT NULL,
  `fecha_compra` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `facturasbs`
--

INSERT INTO `facturasbs` (`id`, `banco`, `ubicacion`, `cantidad_asientos`, `monto`, `sevento`, `fecha_compra`) VALUES
(1, 'Provincial', 'General', 2, 1600.00, 'Los Mesoneros', '2022-11-23'),
(2, 'BNC', 'VIP', 2, 7000.00, 'Las Inmamables', '2022-11-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturasusd`
--

CREATE TABLE `facturasusd` (
  `id` int(11) NOT NULL,
  `referencia` varchar(15) NOT NULL,
  `ubicacionz` text NOT NULL,
  `cantidad_asientosz` int(4) NOT NULL,
  `monto` double(10,2) NOT NULL,
  `sevento` text NOT NULL,
  `fecha_compra` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `facturasusd`
--

INSERT INTO `facturasusd` (`id`, `referencia`, `ubicacionz`, `cantidad_asientosz`, `monto`, `sevento`, `fecha_compra`) VALUES
(2, '#dsadadassad', 'General', 2, 160.00, 'Motherflowers', '2022-11-23');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comprapm`
--
ALTER TABLE `comprapm`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compraz`
--
ALTER TABLE `compraz`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `facturasbs`
--
ALTER TABLE `facturasbs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `facturasusd`
--
ALTER TABLE `facturasusd`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT de la tabla `comprapm`
--
ALTER TABLE `comprapm`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `compraz`
--
ALTER TABLE `compraz`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `facturasbs`
--
ALTER TABLE `facturasbs`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `facturasusd`
--
ALTER TABLE `facturasusd`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
