/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/11/2020 4:13:03 AM                         */
/*==============================================================*/


drop table if exists category;

drop table if exists comment;

drop table if exists comment_upvote;

drop table if exists contact;

drop table if exists contact_type;

drop table if exists media;

drop table if exists post;

drop table if exists post_category;

drop table if exists post_media;

drop table if exists post_tag;

drop table if exists post_upvote;

drop table if exists tag;

drop table if exists user;

drop table if exists user_comment;

/*==============================================================*/
/* Table: category                                              */
/*==============================================================*/
create table category
(
   id_category          int not null auto_increment,
   category_name        varchar(64) not null,
   primary key (id_category)
);

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

/*==============================================================*/
/* Table: comment_upvote                                        */
/*==============================================================*/
create table comment_upvote
(
   comment_upvote_hash  varchar(128) not null,
   id_comment           int not null,
   primary key (comment_upvote_hash)
);

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

/*==============================================================*/
/* Table: contact_type                                          */
/*==============================================================*/
create table contact_type
(
   id_contact_type      int not null auto_increment,
   contact_type_name    varchar(128) not null,
   primary key (id_contact_type)
);

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

/*==============================================================*/
/* Table: post_category                                         */
/*==============================================================*/
create table post_category
(
   id_category          int not null,
   id_post              int not null,
   primary key (id_category, id_post)
);

/*==============================================================*/
/* Table: post_media                                            */
/*==============================================================*/
create table post_media
(
   id_media             int not null,
   id_post              int not null,
   primary key (id_media, id_post)
);

/*==============================================================*/
/* Table: post_tag                                              */
/*==============================================================*/
create table post_tag
(
   id_tag               int not null,
   id_post              int not null,
   primary key (id_tag, id_post)
);

/*==============================================================*/
/* Table: post_upvote                                           */
/*==============================================================*/
create table post_upvote
(
   post_upvote_hash     varchar(128) not null,
   id_post              int not null,
   primary key (post_upvote_hash)
);

/*==============================================================*/
/* Table: tag                                                   */
/*==============================================================*/
create table tag
(
   id_tag               int not null auto_increment,
   tag_name             varchar(64) not null,
   primary key (id_tag)
);

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

/*==============================================================*/
/* Table: user_comment                                          */
/*==============================================================*/
create table user_comment
(
   id_comment           int not null,
   id_user              int not null,
   primary key (id_comment, id_user)
);

alter table comment add constraint fk_post_comment foreign key (id_post)
      references post (id_post) on delete restrict on update restrict;

alter table comment_upvote add constraint fk_comment_upvote foreign key (id_comment)
      references comment (id_comment) on delete restrict on update restrict;

alter table contact add constraint fk_contact_type foreign key (id_contact_type)
      references contact_type (id_contact_type) on delete restrict on update restrict;

alter table contact add constraint fk_user_contact foreign key (id_user)
      references user (id_user) on delete restrict on update restrict;

alter table post add constraint fk_post_author foreign key (id_user)
      references user (id_user) on delete restrict on update restrict;

alter table post_category add constraint fk_post_category foreign key (id_category)
      references category (id_category) on delete restrict on update restrict;

alter table post_category add constraint fk_post_category2 foreign key (id_post)
      references post (id_post) on delete restrict on update restrict;

alter table post_media add constraint fk_post_media foreign key (id_media)
      references media (id_media) on delete restrict on update restrict;

alter table post_media add constraint fk_post_media2 foreign key (id_post)
      references post (id_post) on delete restrict on update restrict;

alter table post_tag add constraint fk_post_tag foreign key (id_tag)
      references tag (id_tag) on delete restrict on update restrict;

alter table post_tag add constraint fk_post_tag2 foreign key (id_post)
      references post (id_post) on delete restrict on update restrict;

alter table post_upvote add constraint fk_post_upvote foreign key (id_post)
      references post (id_post) on delete restrict on update restrict;

alter table user add constraint fk_user_picture foreign key (id_media)
      references media (id_media) on delete restrict on update restrict;

alter table user_comment add constraint fk_user_comment foreign key (id_comment)
      references comment (id_comment) on delete restrict on update restrict;

alter table user_comment add constraint fk_user_comment2 foreign key (id_user)
      references user (id_user) on delete restrict on update restrict;

