
CREATE TABLE IF NOT EXISTS `tbl_bordas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `id_pizza` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_pizza` (`id_pizza`),
  CONSTRAINT `tbl_bordas_ibfk_1` FOREIGN KEY (`id_pizza`) REFERENCES `tbl_pizzas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;


INSERT IGNORE INTO `tbl_bordas` (`id`, `name`, `price`, `id_pizza`, `createdAt`, `updatedAt`) VALUES
	(2, 'Sem borda', 0, 1, '2021-11-22 14:51:57', '2021-11-22 14:51:59'),
	(3, 'Requeijão', 1.5, 1, '2021-11-22 14:52:22', '2021-11-22 14:52:23'),
	(4, 'Cheddar', 2.5, 1, '2021-11-22 14:53:25', '2021-11-22 14:53:26');

CREATE TABLE IF NOT EXISTS `tbl_empresas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;


INSERT IGNORE INTO `tbl_empresas` (`id`, `name`, `slug`, `createdAt`, `updatedAt`) VALUES
	(1, 'Garcias Delivery', 'garcias', '2021-11-22 23:48:19', '2021-11-22 23:48:20'),
	(2, 'Restaurantes Costa Azul', 'costazul', '2021-11-23 11:01:47', '2021-11-23 11:01:48');


CREATE TABLE IF NOT EXISTS `tbl_pizzas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `id_empresa` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_empresa` (`id_empresa`),
  CONSTRAINT `tbl_pizzas_ibfk_1` FOREIGN KEY (`id_empresa`) REFERENCES `tbl_empresas` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;


INSERT IGNORE INTO `tbl_pizzas` (`id`, `name`, `id_empresa`, `createdAt`, `updatedAt`) VALUES
	(1, 'Pizzas', 1, '2021-11-22 23:49:34', '2021-11-22 23:49:35');


CREATE TABLE IF NOT EXISTS `tbl_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_product` varchar(255) NOT NULL,
  `id_empresa` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_empresa` (`id_empresa`),
  CONSTRAINT `tbl_products_ibfk_1` FOREIGN KEY (`id_empresa`) REFERENCES `tbl_empresas` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;


INSERT IGNORE INTO `tbl_products` (`id`, `name_product`, `id_empresa`, `createdAt`, `updatedAt`) VALUES
	(1, 'Cervejas', 1, '2021-11-22 23:48:45', '2021-11-22 23:48:45'),
	(2, 'Lanches', 1, '2021-11-22 23:48:59', '2021-11-22 23:48:59'),
	(6, 'Lanches', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(7, 'Refrigerantes', 1, '2021-11-23 20:20:23', '0000-00-00 00:00:00');


CREATE TABLE IF NOT EXISTS `tbl_products_itens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_item` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `ingredientes` varchar(255) NOT NULL,
  `tamanho` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `id_products` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_products` (`id_products`),
  CONSTRAINT `tbl_products_itens_ibfk_1` FOREIGN KEY (`id_products`) REFERENCES `tbl_products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;


INSERT IGNORE INTO `tbl_products_itens` (`id`, `name_item`, `img`, `ingredientes`, `tamanho`, `price`, `id_products`, `createdAt`, `updatedAt`) VALUES
	(1, 'X-Salada', 'https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/traillerdoserginho/76_55afa529b0ae0.jpg', 'Pão, Queijo, 2 Carnes, Salada, Pão Com Gergilim', '', 12.8, 2, '2021-11-22 20:43:04', '2021-11-22 20:43:05'),
	(2, 'X-Bacon', 'https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/traillerdoserginho/76_55afa529b0ae0.jpg', 'Pão, Queijo, 2 Carnes, Salada, Pão Com Gergilim', '', 13.2, 2, '2021-11-22 20:43:04', '2021-11-22 20:43:05'),
	(3, 'X-Egg', 'https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/traillerdoserginho/76_55afa529b0ae0.jpg', 'Pão, Queijo, 2 Carnes, Salada, Pão Com Gergilim', '', 12.7, 2, '2021-11-22 20:43:04', '2021-11-22 20:43:05'),
	(4, 'X-Tudo', 'https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/traillerdoserginho/76_55afa529b0ae0.jpg', 'Pão, Queijo, 2 Carnes, Salada, Pão Com Gergilim', '', 17.2, 2, '2021-11-22 20:43:04', '2021-11-22 20:43:05'),
	(5, 'Heineken', 'https://www.heineken.com/media-la/01pfxdqq/heineken-original-bottle.png?quality=85', '', '450ml', 15, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(6, 'Heineken', 'https://www.heineken.com/media-la/01pfxdqq/heineken-original-bottle.png?quality=85', '', '600ml', 15, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(7, 'Brahma', 'https://m.media-amazon.com/images/I/81m0v3+XiYL._AC_SY550_.jpg', '', '600ml', 12.3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(8, 'Brahma', 'https://m.media-amazon.com/images/I/81m0v3+XiYL._AC_SY550_.jpg', '', '450ml', 12.3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(9, 'Guarana Antarctica', 'https://m.media-amazon.com/images/I/811VnQ45oHS._AC_SY445_.jpg', '', '600ml', 6.5, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(10, 'Guarana Antarctica', 'https://m.media-amazon.com/images/I/811VnQ45oHS._AC_SY445_.jpg', '', '600ml', 6.5, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(11, 'Guarana Antarctica', 'https://m.media-amazon.com/images/I/811VnQ45oHS._AC_SY445_.jpg', '', '600ml', 6.5, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(12, 'Guarana Antarctica', 'https://m.media-amazon.com/images/I/811VnQ45oHS._AC_SY445_.jpg', '', '600ml', 6.5, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(13, 'Guarana Antarctica', 'https://m.media-amazon.com/images/I/811VnQ45oHS._AC_SY445_.jpg', '', '600ml', 6.5, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(14, 'Guarana Antarctica', 'https://m.media-amazon.com/images/I/811VnQ45oHS._AC_SY445_.jpg', '', '600ml', 6.5, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(15, 'Guarana Antarctica', 'https://m.media-amazon.com/images/I/811VnQ45oHS._AC_SY445_.jpg', '', '600ml', 6.5, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(16, 'Guarana Antarctica', 'https://m.media-amazon.com/images/I/811VnQ45oHS._AC_SY445_.jpg', '', '600ml', 6.5, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(17, 'Guarana Antarctica', 'https://m.media-amazon.com/images/I/811VnQ45oHS._AC_SY445_.jpg', '', '600ml', 6.5, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(18, 'Guarana Antarctica', 'https://m.media-amazon.com/images/I/811VnQ45oHS._AC_SY445_.jpg', '', '600ml', 6.5, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(19, 'Guarana Antarctica', 'https://m.media-amazon.com/images/I/811VnQ45oHS._AC_SY445_.jpg', '', '600ml', 6.5, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00');



CREATE TABLE IF NOT EXISTS `tbl_sabores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `tamanho_id` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tamanho_id` (`tamanho_id`),
  CONSTRAINT `tbl_sabores_ibfk_1` FOREIGN KEY (`tamanho_id`) REFERENCES `tbl_tamanhos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;


INSERT IGNORE INTO `tbl_sabores` (`id`, `name`, `descricao`, `tamanho_id`, `price`, `createdAt`, `updatedAt`) VALUES
	(1, 'Atum', 'muçarela, atum e azeitonas', 1, 25.50, '2021-11-22 14:56:39', '2021-11-22 14:56:40'),
	(2, 'Atum', 'muçarela, atum e azeitonas', 2, 38.90, '2021-11-22 14:59:28', '2021-11-22 14:59:29'),
	(3, 'Atum', 'muçarela, atum e azeitonas', 3, 48.80, '2021-11-22 14:59:28', '2021-11-22 14:59:28'),
	(4, 'Calabresa', 'Muçarela, calabresa e cebola', 1, 29.70, '2021-11-22 15:02:06', '2021-11-22 15:02:07'),
	(5, 'Calabresa', 'Muçarela, calabresa e cebola', 2, 38.50, '2021-11-22 15:02:06', '2021-11-22 15:02:07'),
	(6, 'Calabresa', 'Muçarela, calabresa e cebola', 3, 49.90, '2021-11-22 15:02:06', '2021-11-22 15:02:07'),
	(7, 'Portugues', 'Muçarela, presunto, ovos, calabresa, cebola, bacon e azeitonas', 1, 32.80, '2021-11-22 15:03:59', '2021-11-22 15:04:00'),
	(8, 'Portugues', 'Muçarela, presunto, ovos, calabresa, cebola, bacon e azeitonas', 2, 45.00, '2021-11-22 15:03:59', '2021-11-22 15:04:00'),
	(9, 'Portugues', 'Muçarela, presunto, ovos, calabresa, cebola, bacon e azeitonas', 3, 52.30, '2021-11-22 15:03:59', '2021-11-22 15:04:00');

CREATE TABLE IF NOT EXISTS `tbl_tamanhos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_width` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `id_pizza` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_pizza` (`id_pizza`),
  CONSTRAINT `tbl_tamanhos_ibfk_1` FOREIGN KEY (`id_pizza`) REFERENCES `tbl_pizzas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;


INSERT IGNORE INTO `tbl_tamanhos` (`id`, `name_width`, `descricao`, `id_pizza`, `createdAt`, `updatedAt`) VALUES
	(1, 'Pequena', '2 Sabores - 4 Fatias - 25cm', 1, '2021-11-22 14:49:11', '2021-11-22 14:49:12'),
	(2, 'Média', '2 Sabores - 6 Fatias - 30cm', 1, '2021-11-22 14:49:36', '2021-11-22 14:49:37'),
	(3, 'Grande', '2 Sabores - 8 Fatias - 35cm', 1, '2021-11-22 14:50:03', '2021-11-22 14:50:04');
