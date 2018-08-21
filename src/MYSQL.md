## MySQL
#### Содержание 
* Комманды для консоли
* СОЗДАНИЕ ПРОЦЕДУР
* СОЗДАНИЕ ТРИГЕРА
* СОЗДАНИЕ ТАБЛИЦ

---

### Комманды для консоли
* `mysql -u root -p '2222'` - Вход в Mysql
* `USE my_DB;` - Выбрать БД
* `SELECT * FROM TABLE` - Показать записи из таблицы
* `SOURCE /home/database/file.sql` - Импорт данных из файла
* `SHOW VARIABLES LIKE 'char%';` -  Показать кодировки системы Mysql
* `SHOW WARNINGS;` -  Показать уведомления
* `SHOW VARIABLES LIKE "collation_datbase"; ` - Показать кодировку
* `SHOW VARIABLES LIKE "character_set_database"; ` - Показать кодировку
* `SHOW FULL COLUMNS FROM table ` - Показать полностью структуру по таблице 
* `SET NAMES "utf8" COLLATE "utf8_general_ci"` - Установить кодировку



### СОЗДАНИЕ ПРОЦЕДУР
```sql
/************************************************************
*   Вызов процедуры в php
*
***********************************************************/
 CALL ins_EMP('$pass');




/************************************************************
*  Выполнение 1 комманд в процедуре
*
***********************************************************/
CREATE PROCEDURE ins_del(vall varchar(200))
insert into kod(kod) values (vall)




/************************************************************
*  Выполнение 2 комманд в процедуре (После каждой комманды - ;)
*
***********************************************************/
DELIMITER //
CREATE PROCEDURE insert_emp(var1 varchar(50),var2 varchar(50),var3 varchar(50),var4 varchar(50),var5 varchar(50))
BEGIN
INSERT INTO employees(surname, name, posada, kraina) VALUES(var1, var2, var3, var4);
INSERT INTO kod(kod) VALUES(var5);
END //




/************************************************************
*  Выполнение 3 комманд в процедуре (После каждой комманды - ;)
*
***********************************************************/
DELIMITER //
CREATE TRIGGER `del_user_with_diaries_and_settings` BEFORE DELETE ON `foodcontrol`.`users`
FOR EACH ROW
BEGIN
INSERT INTO log(action, table_name, user) VALUES('user was deleted', 'Users', OLD.email);
DELETE FROM diaries WHERE diaries.user_id = OLD.id;
DELETE FROM user_settings WHERE user_settings.user_id = OLD.id;
END //



/************************************************************
*  Процедура вставки с параметрами 1 - 4 ШТ. (После каждой комманды - ;)
*
***********************************************************/
DELIMITER //
CREATE PROCEDURE inserter(choice int,

                          table_var varchar(400),

                          field_1 varchar(400),
                          field_2 varchar(400),
                          field_3 varchar(400),
                          field_4 varchar(400),

                          valu_1 varchar(400),
                          valu_2 varchar(400),
                          valu_3 varchar(400),
                          valu_4 varchar(400))

BEGIN

IF(choice = 1) THEN
INSERT INTO table_var(field_1) VALUES(valu_1) ;

ELSEIF(choice = 2) THEN
INSERT INTO table_var(field_1,field_2) VALUES(valu_1, valu_2) ;

ELSEIF(choice = 3) THEN
INSERT INTO table_var(field_1,field_2,field_3) VALUES(valu_1, valu_2, valu_3) ;

ELSEIF(choice = 4) THEN
INSERT INTO table_var(field_1, field_2, field_3, field_4) VALUES(valu_1, valu_2, valu_3, valu_4) ;

END IF;

END //



/************************************************************
*  Процедура вывода с параметром (После каждой комманды - ;)
*
***********************************************************/
DELIMITER //
CREATE PROCEDURE selecter(choice int, var1 varchar(50), var2 varchar(50))

-- var 1 - current user
-- var 2 - another member
-- choice - selector

BEGIN

-- TODOIST
IF(choice = 1) THEN
SELECT todoist_id, todoist_article, todoist_done, date_format(todoist_time,'%b. %e, %Y, %k:%i') as time FROM todoist WHERE todoist_visible = 1 AND todoist_user = var1 ORDER BY todoist_id DESC ;

-- MESSAGES
ELSEIF(choice = 2) THEN
SELECT messages.author, date_format(time,'%T (%e-%m-%y)') as time, messages.towho, messages.message FROM messages WHERE author = var1 AND towho = var2 OR author = var2 AND towho = var1 ORDER BY messages.id ;

-- FRIENDS (1 Request: All members)
ELSEIF(choice = 3) THEN
SELECT members.id, members.nickname, members.email, images.img_name FROM members,images WHERE members.id = images.id_user AND members.id != var1 ;


-- FRIENDS (2 Request: Friendships)
ELSEIF(choice = 4) THEN
(SELECT user, friend, status, notice FROM friends WHERE user = var1 AND friend = var2 ORDER BY id DESC LIMIT 2)
 UNION
 (SELECT user, friend, status, notice FROM friends WHERE user = var2 AND friend = var1 ORDER BY id DESC LIMIT 2);


-- MEMBERS (1 Request: All members)
ELSEIF(choice = 5) THEN
SELECT members.id, members.nickname, members.email, images.img_name FROM members,images WHERE members.id = images.id_user AND members.id != var1 ;


-- MEMBERS (2 Request: Current user's requests for frienship)
ELSEIF(choice = 6) THEN
SELECT user,friend FROM friends WHERE user = var1 AND friend = var2 ;


-- MEMBERS (3 Request: Friendships)
ELSEIF(choice = 7) THEN
(SELECT user, friend, status, notice FROM friends WHERE user = var1 AND friend = var2 ORDER BY id DESC LIMIT 2)
 UNION
(SELECT user, friend, status, notice FROM friends WHERE user = var2 AND friend = var1 ORDER BY id DESC LIMIT 2) ;

END IF;

END //


!!! USING : $query = $db->query("CALL selecter(1,$current_user,0)");
        бЕЗ КАВЫЧЕК

```

### СОЗДАНИЕ ТРИГЕРА
```sql
/************************************************************
*  Триггер с 1 коммандой
*
***********************************************************/
CREATE TRIGGER `ins_employees` AFTER INSERT ON `employees`
FOR EACH ROW
   INSERT INTO trigga Set text = 'insert in employees'



/************************************************************
*  Триггер с 2 коммандами (Связь между двумя таблами на удаление) (после каждой комманды ставить - ;)
*
***********************************************************/
DELIMITER //
CREATE TRIGGER `del_emp1`BEFORE DELETE ON `employees`
FOR EACH ROW
BEGIN
INSERT INTO log Set action = 'delete in employees';
DELETE FROM kod WHERE kod.id = OLD.id;
END //


/************************************************************
*  Удаление первой записи
*
***********************************************************/
DELETE FROM trigga LIMIT 1



/************************************************************
*  Триггер с IF clause
*
***********************************************************/
DELIMITER $$
CREATE TRIGGER `likes_recounter` AFTER INSERT ON `likes` FOR EACH ROW BEGIN

  DECLARE likes_count integer;
  
 IF NEW.article_id <> 0 THEN BEGIN
    -- INSERT INTO logs (table_name, user) VALUES(NEW.article_id, 'here');
    SET @likes_count := (SELECT count(*) FROM likes WHERE article_id = NEW.article_id);
    UPDATE articles SET likes = @likes_count WHERE articles.id = NEW.article_id;
  END;  END IF;
  
 IF NEW.answer_id <> 0 THEN BEGIN
    -- INSERT INTO logs (table_name, user) VALUES(NEW.article_id, 'here1');
    SET @likes_count := (SELECT count(*) FROM likes WHERE answer_id = NEW.answer_id);
    UPDATE answers SET likes = @likes_count WHERE answers.id = NEW.answer_id;
  END; END IF; 

 
  IF NEW.question_id <> 0  THEN BEGIN
    -- INSERT INTO logs (table_name, user) VALUES(NEW.article_id, 'here2');
    SET @likes_count := (SELECT count(*) FROM likes WHERE question_id = NEW.question_id);
    UPDATE articles SET likes = @likes_count WHERE question.id = NEW.question_id;
  END; END IF;
   
    -- INSERT INTO logs (table_name, user) VALUES(NEW.article_id, 'here3');
    
END
$$
DELIMITER ;
```

### СОЗДАНИЕ ТАБЛИЦ
```sql
--------------------------------------------------
// Таблица "Просмотренные страницы"

CREATE TABLE viewed_pages(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
user VARCHAR( 255 ) ,
page int,
time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------

--------------------------------------------------
// Таблица "Список дел"

CREATE TABLE todoist (
todoist_id  INT NOT NULL AUTO_INCREMENT,
todoist_user INT NOT NULL ,
todoist_article varchar(70),

todoist_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    todoist_done int DEFAULT 0,
todoist_visible INT DEFAULT 1,
PRIMARY KEY(todoist_id)
) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------



--------------------------------------------------
// Таблица "Комментарии"

CREATE TABLE coments (
id  INT NOT NULL,
id_u INT NOT NULL ,
id_page INT NOT NULL,
text VARCHAR(255) NOT NULL,
time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
publish INT DEFAULT 0,
PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------


--------------------------------------------------
// Таблица "Картинки"(хранит пути к картинкам)

CREATE TABLE images (
id_user INT NOT NULL ,
img_name VARCHAR(100) NOT NULL,
type VARCHAR(30) NOT NULL,
size INT NOT NULL,
PRIMARY KEY(id_user)
) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------


--------------------------------------------------
// Таблица "Картинки"(хранит картинки, а не пути к ним)

CREATE TABLE images (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
type VARCHAR(30) NOT NULL,
size INT NOT NULL,
content MEDIUMBLOB NOT NULL,
PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------

--------------------------------------------------
// Таблица "Статьи"

CREATE TABLE stati(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
article VARCHAR( 255 ) ,
body LONGTEXT,
sfera INT NOT NULL,
ptime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
s_img   VARCHAR( 255 )

) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------

--------------------------------------------------
// Таблица "Пользователи"

CREATE TABLE users(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
login VARCHAR( 50 ) ,
pass VARCHAR( 50 ),
time_reg TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------
```
