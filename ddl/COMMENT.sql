/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/11/2020 4:08:14 AM                         */
/*==============================================================*/


/*==============================================================*/
/* Table: comment                                               */
/*==============================================================*/
create table comment
(
   id_comment           int not null auto_increment,
   id_post              int not null,
   comment_body         text not null,
   comment_date_posted  timestamp,
   primary key (id_comment)
);

