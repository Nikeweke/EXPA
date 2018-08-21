## VPS

* Host 1 Plus - good vps with good prices
* [How to setup LEMP and start Laravel](http://devmarketer.io/learn/deploy-laravel-5-app-lemp-stack-ubuntu-nginx/)

--- 

#### Install LEMP script
###### install_lemp.sh
```bash
# cd /path/to/file
# chmod +x filename.sh
# ./filename.sh

sudo apt-get update
sudo apt-get install nginx
sudo apt-get install mysql-server
sudo mysql_secure_installation
sudo apt-get install php-fpm php-mysql php-mbstring
sudo nano /etc/php/7.0/fpm/php.ini

```