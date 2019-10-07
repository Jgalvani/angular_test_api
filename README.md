# angular_test_api
An API created for using with the project angular_test

This API request a mysql database created with this statement:
```
CREATE TABLE `tests` (
  `id_test` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id_test`),
  UNIQUE KEY `id_test` (`id_test`) USING BTREE,
  UNIQUE KEY `name` (`name`) USING BTREE)
  ENGINE=MyISAM AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;
```
and another created with this statement:
```
CREATE TABLE `users` (
  `id_user` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `drink` varchar(50) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `id_user` (`id_user`) USING BTREE,
  UNIQUE KEY `email` (`email`) USING BTREE)
  ENGINE=MyISAM AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;
```
