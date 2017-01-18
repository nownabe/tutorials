DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

INSERT INTO `users` (`name`) values
  ('matsuge'),
  ('mayuge'),
  ('kaminoke'),
  ('sunege'),
  ('wakige'),
  ('munage');
