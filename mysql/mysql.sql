create table if not exists user_tbl(
   id int unsigned auto_increment,
   name varchar(100) not null,
   password varchar(100) not null,
   primary key (id)
)engine=InnoDB default charset=utf8;

insert into user_tbl(name,password) values('user1','111');

select t.* from user_tbl t;