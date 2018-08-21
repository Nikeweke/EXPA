# Expirience from Symfony

#### Содержание
* Установка и запуск
* Создание контроллера и маршрута

---

### Установка и запуск
```
composer create-project symfony/framework-standard-edition my_project_name # Installing
php bin/console server:run # Running
```

### Создание контроллера и маршрута
* Контроллеры находяться - **/src/AppBundle/Controller**
* Маршрут пишеться в описании метода(комменте сверху) 

###### IndexController.php
```php
<?php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

class IndexController
{
    /**
     * @Route("/" , name="homepage")
     */
    public function numberAction()
    {
        $number = mt_rand(0, 100);

        return new Response(
            '<html><body>Lucky number: '.$number.'</body></html>'
        );
    }
}
```
