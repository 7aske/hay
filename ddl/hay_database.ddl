/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     8/7/2020 5:55:59 PM                          */
/*==============================================================*/


drop table if exists category;

drop table if exists comment;

drop table if exists comment_upvote;

drop table if exists contact;

drop table if exists contact_type;

drop table if exists media;

drop table if exists post;

drop table if exists post_tag2;

drop table if exists post_upvote;

drop table if exists role;

drop table if exists tag;

drop table if exists user;

drop table if exists user_role;

/*==============================================================*/
/* Table: category                                              */
/*==============================================================*/
create table category
(
   id_category2         int not null auto_increment,
   category_name        varchar(64) not null,
   primary key (id_category2)
);

/*==============================================================*/
/* Table: comment                                               */
/*==============================================================*/
create table comment
(
   id_comment           int not null auto_increment,
   id_user              int not null,
   id_post              int,
   comment_body         text not null,
   comment_date_posted  timestamp,
   primary key (id_comment)
);

/*==============================================================*/
/* Table: comment_upvote                                        */
/*==============================================================*/
create table comment_upvote
(
   comment_upvote_hash2 varchar(128) not null,
   id_comment           int not null,
   primary key (comment_upvote_hash2)
);

/*==============================================================*/
/* Table: contact                                               */
/*==============================================================*/
create table contact
(
   id_contact           int not null auto_increment,
   id_contact_type      int,
   id_user              int,
   value                varchar(256) not null,
   primary key (id_contact)
);

/*==============================================================*/
/* Table: contact_type                                          */
/*==============================================================*/
create table contact_type
(
   id_contact_type      int not null auto_increment,
   name                 varchar(64) not null,
   value_type           varchar(32) not null,
   primary key (id_contact_type)
);

/*==============================================================*/
/* Table: media                                                 */
/*==============================================================*/
create table media
(
   id_media             int not null auto_increment,
   media_filepath       varchar(1024) not null,
   primary key (id_media)
);

/*==============================================================*/
/* Table: post                                                  */
/*==============================================================*/
create table post
(
   id_post              int not null auto_increment,
   id_user              int,
   id_category2         int not null,
   id_media             int,
   post_title           varchar(255) not null,
   post_excerpt         text not null,
   post_body            text not null,
   post_date_posted     timestamp,
   post_deleted         bool default 0,
   post_published       bool default 0,
   views                bigint,
   primary key (id_post)
);

/*==============================================================*/
/* Table: post_tag2                                             */
/*==============================================================*/
create table post_tag2
(
   id_tag2              int not null,
   id_post              int not null,
   primary key (id_tag2, id_post)
);

/*==============================================================*/
/* Table: post_upvote                                           */
/*==============================================================*/
create table post_upvote
(
   post_upvote_hash2    varchar(128) not null,
   id_post              int not null,
   primary key (post_upvote_hash2)
);

/*==============================================================*/
/* Table: role                                                  */
/*==============================================================*/
create table role
(
   id_role              int not null auto_increment,
   role_name            varchar(32) not null,
   primary key (id_role)
);

/*==============================================================*/
/* Table: tag                                                   */
/*==============================================================*/
create table tag
(
   id_tag2              int not null auto_increment,
   tag_name             varchar(64) not null,
   primary key (id_tag2)
);

/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   id_user              int not null auto_increment,
   user_username        varchar(128) not null,
   user_email           varchar(128) not null,
   user_password        varchar(512) not null,
   user_first_name      varchar(128) not null,
   user_last_name       varchar(128) not null,
   user_address         varchar(128),
   user_about           text,
   display_name         varchar(64) not null,
   date_created         datetime,
   primary key (id_user)
);

/*==============================================================*/
/* Table: user_role                                             */
/*==============================================================*/
create table user_role
(
   id_role              int not null,
   id_user              int not null,
   primary key (id_role, id_user)
);

alter table comment add constraint fk_post_comment2 foreign key (id_post)
      references post (id_post) on delete restrict on update restrict;

alter table comment add constraint fk_user_comment2 foreign key (id_user)
      references user (id_user) on delete restrict on update restrict;

alter table comment_upvote add constraint fk_comment_upvote2 foreign key (id_comment)
      references comment (id_comment) on delete restrict on update restrict;

alter table contact add constraint fk_contact_contact_type foreign key (id_contact_type)
      references contact_type (id_contact_type) on delete restrict on update restrict;

alter table contact add constraint fk_user_contact foreign key (id_user)
      references user (id_user) on delete restrict on update restrict;

alter table post add constraint fk_post_author2 foreign key (id_user)
      references user (id_user) on delete restrict on update restrict;

alter table post add constraint fk_post_category2 foreign key (id_category2)
      references category (id_category2) on delete restrict on update restrict;

alter table post add constraint fk_post_media foreign key (id_media)
      references media (id_media) on delete restrict on update restrict;

alter table post_tag2 add constraint fk_post_tag2 foreign key (id_tag2)
      references tag (id_tag2) on delete restrict on update restrict;

alter table post_tag2 add constraint fk_post_tag3 foreign key (id_post)
      references post (id_post) on delete restrict on update restrict;

alter table post_upvote add constraint fk_post_upvote2 foreign key (id_post)
      references post (id_post) on delete restrict on update restrict;

alter table user_role add constraint fk_user_role foreign key (id_role)
      references role (id_role) on delete restrict on update restrict;

alter table user_role add constraint fk_user_role2 foreign key (id_user)
      references user (id_user) on delete restrict on update restrict;

