# Mailgun API
Api is faster than SMTP and easy to use 

### Example from php(Laravel)
```php
<?php
/*
   Для работы с "Mailgun" нужно установить: 
   // SDK mailgun & adapter guzzle
   composer require mailgun/mailgun-php
   composer require php-http/guzzle6-adapter
*/
namespace App\Http\Support;

use Illuminate\Http\Request;
use Mailgun\Mailgun;

class MailSupport
{

     // sandbox
    // private $api_key     = 'key-XXXXXXXXXXXXXXXXXXXXXXXXXX';
    // private $domain_name = 'sandboxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

    // mail.foodcontrol.club
    private $api_key     = 'key-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
    private $domain_name = 'mail.foodcontrol.club';
    private $from        = 'foodcontrol@club.mail';


    /*******************************************************
    *    Забрать все письма (Log)
    *
    *******************************************************/
    public function getLogs(){

      # Instantiate the client.
       $mgClient = new Mailgun($this->api_key);
       $domain = $this->domain_name;

       // Get logs of sending
       $result = $mgClient->get("$domain/log");
       dd($result);
    }



    /*******************************************************
    *    Выслать письмо
    *
    *******************************************************/
    public function sendMail($to, $subject, $type, array $data, $html = false){

       // провереям какое письмо(содержимое для пиьсма) нам взять
       if(!$html){
          if($type == 'reset_password'){ $html = $this->ResetPasswordMail($data['new_pwd']); }
       }

       # Instantiate the client.
        $mgClient = new Mailgun($this->api_key);
        $domain = $this->domain_name;

        # Выслать сообщение
        $result = $mgClient->sendMessage($domain,
            [
               'from'    => $this->from,
               'to'      => $to,
              //  'cc'      => 'baz@example.com',
              //  'bcc'     => 'bar@example.com',
               'subject' =>  $subject,
               'html'    =>  $html
            ]

            // [
            //    'attachment' => array('/path/to/file.txt', '/path/to/file.txt')
            // ]
        );

        // $result->http_response_body->message;
        // $result->http_response_body->id;

        return  $result->http_response_code;
    }



    /*******************************************************
    *    Письмо для сброса пароля
    *
    *******************************************************/
    public function ResetPasswordMail($new_password){
      return '
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Новый пароль</title>
              </head>
              <body>

                <div >
                   <h2>Здравствуйте!</h2>
                   <p>Ваш пароль был сброшен!</p>
                   <p>Вы сможете изменить пароль в разделе <a href="'. route('settings.app') .'">"Настройки"</a></p>
                   <p>Новый пароль:</p>
                    <h2><strong>'. $new_password .'</strong><h2></p><br>
                </div>

                 <h4 style="color:rgb(159, 159, 159)">FoodControl Team</h4>
              </body>
            </html>
        ';
    }
}

```