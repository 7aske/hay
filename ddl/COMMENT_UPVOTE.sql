/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/11/2020 4:08:14 AM                         */
/*==============================================================*/


/*==============================================================*/
/* Table: comment_upvote                                        */
/*==============================================================*/
create table comment_upvote
(
   comment_upvote_hash  varchar(128) not null,
   id_comment           int not null,
   primary key (comment_upvote_hash)
);

