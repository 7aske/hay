/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/11/2020 4:08:14 AM                         */
/*==============================================================*/


/*==============================================================*/
/* Table: post                                                  */
/*==============================================================*/
create table post
(
   id_post              int not null auto_increment,
   id_user              int,
   post_title           varchar(255) not null,
   post_excerpt         text not null,
   post_body            text not null,
   post_date_posted     timestamp,
   post_deleted         bool default 0,
   post_published       bool default 0,
   primary key (id_post)
);

