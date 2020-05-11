/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/11/2020 4:08:14 AM                         */
/*==============================================================*/


/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   id_user              int not null auto_increment,
   id_media             int,
   user_username        varchar(128) not null,
   user_email           varchar(128) not null,
   user_password        varchar(512) not null,
   user_first_name      varchar(128) not null,
   user_last_name       varchar(128) not null,
   user_display_name    varchar(128) not null,
   user_description     varchar(255),
   user_about           text,
   primary key (id_user)
);

