/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/11/2020 4:08:14 AM                         */
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

mysql> source <file_name>;

mysql> source <file_name>;

mysql> source <file_name>;

mysql> source <file_name>;

mysql> source <file_name>;

mysql> source <file_name>;

mysql> source <file_name>;

mysql> source <file_name>;

mysql> source <file_name>;

mysql> source <file_name>;

mysql> source <file_name>;

mysql> source <file_name>;

mysql> source <file_name>;

mysql> source <file_name>;

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

