create database if not exists hay_database;
create user 'hay_root'@'localhost' identified by 'hay_root';
grant all on hay_database.* to 'hay_root'@'localhost';
