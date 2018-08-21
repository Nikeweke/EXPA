# Expirience from PHP

### Useful links
* Composer CheatSheet - http://composer.json.jolicode.com/
* PHP.su - http://www.php.su/phphttp/forms/?elements
* Дмитрий Афанасьев - http://simple-training.com/category/php-tips/
* ReactPHP - https://reactphp.org/
* Patterns - http://designpatternsphp.readthedocs.io/ru/latest/README.html


#### Содержание 

* Как запустить встроенный сервер PHP
* Из массива в строку и ставим в Cookies
* Closure(Anonymys func) and Reference vars
* Traits
* Namespace and Use
* Objects of stdClass
* __autoload
* FROM MySQLi - TO PDO
* Перехват ошибок
* Передача переменных между PHP-файлами посредством сессии
* Функция ругалась что не видела переменных $user_data, $e_password, $e_login
* Connection to DB
* Генератор паролей
* Delete Cookies
* Добавляет запись про просмотр статьи
* Считает количество лайков на заданную страницу
* Функция для получение рандомных имен для картинок
* Действие : Удаление опасного кода в переменных от пользователей и хакеристов
* Проверяет заполнена ли форма
* Действие : Проверяет почты на допустимость по знакам.

---




### Как запустить встроенный сервер PHP:
```
php -S localhost:8000
```

### Из массива в строку и ставим в Cookies

* **index.php** - из массива делает строку и записывает в куку
* **page.php** - из строки которая в куке делает массив
* **off.php** - удаляет массив

###### index.php
```php
<?php
// МАссив
$arr = [
         'email' => 'Driver3@meta.ua',
         'password' => '12345'
       ];
// Делаем строку
$rez = serialize($arr);
// Вывод строки полученной
var_dump($rez);
// SET 
setcookie("nabor",$rez,time()+8600*30,"/");
 ?>

<a href="page.php">See cooka</a>
<a href="off.php">DElete cooka</a>

```


###### page.php
```php
<?php

$nabor = $_COOKIE['nabor'];

//var_dump($nabor);

$rez = unserialize($nabor);


echo $rez['email'] . "<br>";
echo $rez['password'] . "<br>";

```


###### off.php
```php
<?php
setcookie('nabor', "", time() - 86400*100, "/");
//header("Location:page.php");

```

### Closure(Anonymys func) and Reference vars

###### index.php
```php
<?php
 
// reference by var 
 $var = 2;
 function foo(&$var)
 {
   $var++;
 }

 foo($var);
 echo $var;
 
 
 // Closure
$message = 'hello';
 
// No "use" out - NULL
$example = function () {
  echo "first -> ";
    var_dump($message);
};
$example();
 
// Inherit $message - out - hello
$example = function () use ($message) {
    echo "<br>second -> ";
    echo($message);
};
$example();
 
```


### Traits

Трейт (англ. trait) - это механизм обеспечения повторного использования кода в языках с поддержкой единого наследования, 
таких как PHP. Трейт очень похож на класс, но предназначен для групирования функционала хорошо структурированым и
последовательным образом. Невозможно создать самостоятельный экземпляр трейта. Это дополнение к обычному наследованию 
и позволяет сделать горизонтальную композицию поведения, то есть применение членов класса без необходимости наследования. 

###### Traits.php
```php
trait MyTrait
{
  public function Bye()
   { echo "Its method from trait - Bye()"; }

}
```


###### Index.php
```php
class A {
    
    // including Traits.php
    use MyTrait;

   function Hello(){ echo "Its A method - Hello()"; }
}

$some = new A;
$some->Hello();
$some->Bye();

```





### Namespace and Use

Файлы могут быть в одной папке, но иметь разные пространства имен. Например если в файлах одинаковые классы, то в таком случае зарешают пространства. В данном примере все файлы находяться в одной папке.


###### class1.php
```php
<?php

namespace App;

class Index {

	function Index(){
	  echo "Hello dude, its App space";
	  return ;  
	}
}

```


###### class2.php
```php
<?php

namespace App\Models;

class Index {
	
	function Index(){
	  echo "Hello dude, its App\Models space";
	  return; 
	}
}

```


###### index.php
```php
<?php

include 'class1.php'; // тут класс с названием Index 
include 'class2.php';  // и тут класс с таким же названием

// без "use" классы не будут видны здесь, хоть они и подключены свыше
use App\Index;
use App\Models\Index as IndexModel;

$index = new Index();
$index->index();

$grand = new IndexModel();
$grand->index();
```

### Objects of stdClass
Обьект класса `stdClass` это как объект в JS. После создания объекта внутри пусто , но это как объект(объект класса).
```php
 // создание обьекта
$obj = new stdClass;

// добавляем переменные
$obj->name    = 'Joker';
$obj->surname = 'Petrovich';

// добавление ф-ции
$obj->calc = function(){ echo 1 + 1; };

print_r($obj);

// вызов ф-ции
$func = $obj->calc;
$func(); 
// OR
($obj->calc)(); 
```

### __autoload
Автоматичское подключение файлов с классами в которых есть нужные экземпляры
###### ./index.php
```php
spl_autoload_register(function($class_name){
	$filename = './ctrls/'.$class_name.'.php';
	   // echo $class_name . PHP_EOL;
	 include($filename);  
});

$obj = new Freak;
$obj->Say();
```

###### ./ctrls/freak.php
```php
<?php
class Freak{
   public function Say(){ echo $this->words; }
}
```

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
######   Можно использовать сессии, которые в отличие от cookie, храняться на сервере, и стираються после закрития браузера. session_start() - на каждой странице где юзаеться сессия 
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
######  и через global все работает
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

## Connection to DB
```php
function Connect_db()
 {
	 include 'connect.php'; // Data of Connection
	 try{
	      $db = new PDO("mysql:host=$host;dbname=$db_name", $user, $password);
	      $db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
        $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	      $db->exec("SET NAMES utf8");
        if($db == true){ return $db ; }
				else { die('Cant connect to DB'); }
	    }

	 catch(PDOException $e){ echo $e->getMessage();  }
 }
$db =  Connect_db();  // CONNECT VAR
```



## Генератор паролей
```php
function Generator()
{
  // Символы, которые будут использоваться в пароле.
  $chars="qazxswedcvfrtgbnhyujmkiolp1234567890QAZXSWEDCVFRTGBNHYUJMKIOLP";
  // Количество символов в пароле.
  $max=20;
  // Определяем количество символов в $chars
  $size=StrLen($chars)-1;
  // Определяем пустую переменную, в которую и будем записывать символы.
  $password=null;
  // Создаём пароль.
  while($max--)
  $password.=$chars[rand(0,$size)];
  return $password;
}
```


## Delete Cookies
```php
function DelCookie($cook)
 {
   setcookie($cook, "", time() - 86400*100, "/");
 }
```




## Добавляет запись про просмотр статьи
```php
function ViewedPage($page)
 {
    $db = Connect_db();

		// Ловим IP- человека который смотрел статью
		 $ip = $_SERVER["REMOTE_ADDR"];

		// Запрос на запись есть ли уже такая же запись
    $query_is_exist = $db->query("SELECT * FROM viewed_pages WHERE user = '$ip' AND page = $page");
		$kol_vo = $query_is_exist->rowCount();

    // Если нашло хоть 1 запись
	  if($kol_vo <= 0) { $db->query("INSERT INTO viewed_pages(user, page) VALUES( '$ip', $page )"); }
 }
```



## Считает количество лайков на заданную страницу
```php
function CounterLikes($page)
 {
   $db = Connect_db();

   $query_likes = $db->query("SELECT * FROM likes WHERE likes_page = $page");
	 $likes =  $query_likes->rowCount() ;

	 return $likes;
  }
```



## Функция для получение рандомных имен для картинок
```php
class DFileHelper
{
    public static function getRandomFileName($path, $extension='')
    {
        $extension = $extension ? '.' . $extension : '';
        $path = $path ? $path . '/' : '';

        do {
            $name = md5(microtime() . rand(0, 9999));
            $file = $path . $name . $extension;
        } while (file_exists($file));

        return $name;
    }
}
````


## Действие : Удаление опасного кода в переменных от пользователей и хакеристов
```php
function StringCleaner($var)
 {
   $var = strip_tags($var);
   $var = htmlentities($var);
   $var = addslashes($var); // Против - апострофа '
   $var = trim($var);
   return $var;
}
```



## Проверяет заполнена ли форма
```php
function filled_out($form_var)
 {
    if((!isset($form_var)) or ($form_var == ''))
       {
           return false;
       }
       return true;
 }
```




## Действие : Проверяет почты на допустимость по знакам.
```php
function valid_email($adress)
 {
	  //Проверить допустимость адреса
    if(ereg('^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA=z0-9\-\.]+$',$adress)){ return true; }
    else { return false; }
 }
```

