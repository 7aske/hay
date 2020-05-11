/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/11/2020 4:08:14 AM                         */
/*==============================================================*/


/*==============================================================*/
/* Table: contact_type                                          */
/*==============================================================*/
create table contact_type
(
   id_contact_type      int not null auto_increment,
   contact_type_name    varchar(128) not null,
   primary key (id_contact_type)
);

