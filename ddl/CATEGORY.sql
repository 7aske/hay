/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/11/2020 4:08:14 AM                         */
/*==============================================================*/


/*==============================================================*/
/* Table: category                                              */
/*==============================================================*/
create table category
(
   id_category          int not null auto_increment,
   category_name        varchar(64) not null,
   primary key (id_category)
);

