/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/11/2020 4:08:14 AM                         */
/*==============================================================*/


/*==============================================================*/
/* Table: post_category                                         */
/*==============================================================*/
create table post_category
(
   id_category          int not null,
   id_post              int not null,
   primary key (id_category, id_post)
);

