/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/11/2020 4:08:14 AM                         */
/*==============================================================*/


/*==============================================================*/
/* Table: post_media                                            */
/*==============================================================*/
create table post_media
(
   id_media             int not null,
   id_post              int not null,
   primary key (id_media, id_post)
);

