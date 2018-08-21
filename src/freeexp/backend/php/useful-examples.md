## Useful examples
#### Содержание 
* Подключение к MySQL(PDO)
* Переопределение поля в классе
* Liqpay example

---

### Подключение к MySQL(PDO)
```php
class Database {

  static private $host     = "localhost";
  static private $user     = "root";
  static private $password = "";
  static private $db_name  = "test";

  /*
  |--------------------------------------------------------------------------
  | Make connection
  |--------------------------------------------------------------------------
  */
  static public function connect()
   {
     try{
          $db = new PDO('mysql:host='.self::$host.';dbname='. self::$db_name , self::$user, self::$password);
          $db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
          $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
          $db->exec("SET NAMES utf8");

          if($db == true){
             return $db;
          }
          else {
           die('Cant connect to DB');
          }
        }

     catch(PDOException $e){ echo $e->getMessage();  }
   }
}
```

### Переопределение поля в классе
```php
class A {
  protected $word = 'hello ';
  public function Say(){
    echo $this->word;
  }
}

class B extends A {
   protected $word = 'you';
   public function Say(){
      echo parent::Say();
   }
}

(new A)->Say(); // hello 
(new B)->Say(); // you
```

### Liqpay example
https://github.com/liqpay/sdk-php/blob/master/LiqPay.php
```php
include 'liqpay.php'; // liqpay library api

// $url         = 'https://www.liqpay.ua/api/3/checkout';
$url = '3/checkout';

$public_key  = 'xxxxxxxxxxx';
$private_key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

$data = [
           'version'    =>  3,           // vers of api
          'public_key'  =>  $public_key,
          'private_key' =>  $private_key,
          'action'      => 'paydonate',  // pay, auth, hold
          'amount'      => '2',
          'currency'    => 'UAH',
          'description' => 'Пожертвование',
          'order_id'    => '000001'
        ];

// $data = json_encode($data);

$liqpay = new LiqPay($public_key, $private_key);
// $rez = $liqpay->api($url, $data);
$html = $liqpay->cnb_form(array(
'action'         => 'pay',
'amount'         => '1',
'currency'       => 'USD',
'description'    => 'description text',
'order_id'       => 'order_id_1',
'version'        => '3',
'server_url'     => 'localhost:8100/liqpay_test.php'
));

dd($html);
```