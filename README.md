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
