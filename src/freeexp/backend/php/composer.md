### Установка **Composer**
###### Скачать файл composer.phar  (локально)  
```
curl -sS https://getcomposer.org/installer | php
```

###### Установка через инсталятор (глобально). Также делает глобальной "php" комманду.
```
https://getcomposer.org/download/
```

### Установка пакета
```
php composer.phar require vendor-name/package-name
composer require vendor-name/package-name
```

### Установка пакета как для разработки
```
php composer.phar require vendor-name/package-name --dev
composer require vendor-name/package-name --dev
```

### Установка всех пакетов из composer.json
```
php composer.phar install
composer install
composer install --no-dev
```


### Удаление пакета
```
php composer.phar remove vendor-name/package-name
composer remove vendor-name/package-name
```

