# SOLVES                                            

* Все файли должны быть .php
* "ЕСЛИ ЧТО ТО НЕ РАБОТАЕТ ЗНАЧИТ ЕСТЬ ОШИБКА , И ОНА СКОРО ПОКАЖЕТ СЕБЯ , НАДО ИСКАТЬ И ЖДАТЬ". ОСОБЕННО ЭТО ПРАВИЛО КАСАЕТЬСЯ ПРИ ПЕРЕНОСЕ С ЛОКАЛЬНОГО СЕРВА НА УДАЛЕННЫЙ.
```
     КАКИЕ ОШЫБКИ ВСТРЕТИЛ Я :

        1. Создал новое поле на локальной БД , а потом переместил проект на удалленый серв и там перестала работать страница ,
           оказалось надо было ДОБАВИТЬ ПОЛЕ В УДАЛЕННУЮ БД !!

        2. Использовал функцию стандартную - PHP для проверок : if(!empty(var)) и из-за неё не работало ,
           заменил на: if(var != "") - все заработало
```	   




### Для работы с AJAX нужно :
```
1.Чтобы функции из подключаемого файла работали и значит Ajax оттуда будет работать
2.в движке который на php надо писать: setcookie("id",$a,time()+8600*30,"/");
3.Удаление кук так :  document.cookie = "id = ; expires = Thu, 01 Jan 1970 00:00:01 GMT; path = /;";
4.Надо ставить на клик вызов AJAX и вставлять поле с типом HIDDEn для того чтобы ловить переменную isset... или по методу MVC
```



###  Запомнить(Javascript and AJAX) :
```
вот здесь # не нужна -> document.getElementById("msg_success").innerHTML = ....  - Javascript
а тут нужна -> $("#msg_success").show('blind',600,funct.....  - JQuery
```


### Функция для странички message как пример с обновой через каждые 3 сек. (Но лучше юзать сокеты)
```javascript
setInterval('AjaxOut(\'tasks\')',3000);

DivOut('msges_div', $towho_id, '$towho_nick');
setInterval(DivOut,60000,'msges_div', $towho_id, '$towho_nick');
```


### По нажатию кнопка ЕНТЕР выполнить функцию
```html
<body onkeydown="if ( event.which == 13 ){myFunction();}">
```

### Очистка поля
```javascript
$('#textarea_msg').val('');
```

### Разница между таблицами MYIsam and InnoDB:
```
1. InnoDb - лучше для транзакций
2.MyIsam - быстрее
```

### Финт для НОВОСТНЫХ ПОРТАЛОВ
```php
//чтобы вывести название статьи в <title>
//просто поставь в цикл вывод её
//вот так:

			while($data = ...)
			 {
			  <title>$data['article']</title>
			 }

//а вообще надо юзать шаблонизатор
```
---







#   "Xampp" и инфа по настройки серва и т.д.                              


* Все файлы должны быть .php
* Нельзя ставить в phpMyAdmin пароли на root потом не заходит
* Дата вбиваеться в запросах так : 2012-04-14
* Настроить рута можно файлом в phpMyAdmin : config.inc.php
* Для того что бы сделать войти в phpMyAdmin и увидеть форму для пропуска к базе данных
```
   надо : в "config.inc.php"

           $cfg['Servers'][$i]['auth_type'] = 'config';

            config -> cookie   ;
                   -> http
                   -> signon
```		   

* .HTACCESS (ЧПУ)   (структура папок: nameproject/config,library....., index.php, .htaccess)

При переносе на сервер удостоверится в правильности путей к стилям: например:  файл называеться "w3.css", а в путях(src) - "W3.css", на системах Windows будет работать, но не на сервере где система Unix
				   
```
               Настройка .HTACCESS для ЧПУ
		AddDefaultCharset utf-8

		RewriteEngine On
		Options +FollowSymLinks
		RewriteCond %{REQUEST_FILENAME} !-d
		RewriteCond %{REQUEST_FILENAME} !-f

		RewriteRule ^([a-z]+)/([0-9]+)$ index.php?con=$1&id=$2&%{QUERY_STRING} [NS,L]
		RewriteRule ^index$ index.php [QSA,L]
```


---




##  PHP - SOLUTIONS  
###  FROM MySQLi - TO PDO
```php
mysqli_query($db,"...") = $db->query("...")
mysqli_fetch_array($query) = $query->fetch(PDO::FETCH_ASSOC)
mysqli_real_string_escape = prepare($query); $query->execute();
mysqli_nums_row = $query->countRow()
```


###  Перехват ошибок
```php
<?php

try { throw new Exception ('Это ошибка епты'); }

catch(Exception $e)
 {
  echo "Исключение " . $e->getCode() . ": " . $e->getMessage() . "<br>" . " в " . $e->getFile() . ", строка "  . $e->getLine() . "<br>";
  }
?>
```



###   Передача переменных между PHP-файлами посредством сессии
####   Можно использовать сессии, которые в отличие от cookie, храняться на сервере, и стираються после закрития браузера
####  session_start() - на каждой странице где юзаеться сессия 
```php
 <?php
  session_start();
  $_SESSION['user'] = 'bonskii';
?>

//Обращаться к значению, сохранённому в сессии можно используя суперглобальный массив:

 <?php
  echo $_SESSION['user'];
?>
```


###  Функция ругалась что не видела переменных $user_data, $e_password, $e_login
####  и через global все работает
```php
<?php

function checkForPass()
 {
	global $user_data;
	global $e_password;  // or like that -> $GLOBALS['e_password'];
	global $e_login;


	  if($user_data['pass'] == $e_password)  // ** $e_password = $GLOBALS['e_password']
						  {
						   echo "<h2> You exist in database. </h2>";
							echo "<h3> Welcome $e_login. </h3>";
						  }

						else
						  {
						  echo "Wrong password";
                      }
	}
```
