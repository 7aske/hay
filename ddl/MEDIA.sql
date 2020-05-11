/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/11/2020 4:08:14 AM                         */
/*==============================================================*/


/*==============================================================*/
/* Table: media                                                 */
/*==============================================================*/
create table media
(
   id_media             int not null auto_increment,
   media_data           vbin not null,
   media_filename       varchar(1024) not null,
   primary key (id_media)
);

