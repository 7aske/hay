/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/11/2020 4:08:14 AM                         */
/*==============================================================*/


/*==============================================================*/
/* Table: contact                                               */
/*==============================================================*/
create table contact
(
   id_contact           int not null auto_increment,
   id_user              int not null,
   id_contact_type      int not null,
   contact_value        varchar(128) not null,
   primary key (id_contact)
);

