# Unix
#### Содержание
[[toc]]

---

### Packages(Ubuntu - apt-get)
* **sudo apt-get install pkg_name** - установка пакета
* **sudo apt-get remove pkg_name** - удаление пакета
* **sudo apt-get install nano** - текстовий редактор который откроет файл в консоли(**Ctrl+W - search, Ctrl+X - save**)

### Commands
* **sudo su** - получени прав root
* **killall name_proccess** - убить процесс
* **top** - действующие процессы
* **uptime** - сколько в работе 
* **sudo apt-get update** - обновить установщик
* **ls -A** - показать все файлы в текущей директории (**-А** - включая скрытые)
* **cd /path/to/dir/** - перейти в директорию
* **cd ..** - спуститься на 1 папку вниз
* **sudo mkdir nameOfDir** - сделать папку 
* **sudo atom index.php** - открыть файл с помощью Атома, если такого файла нет -то создаст
* **sudo rm filename** - удалить файл
* **sudo rm directory -r** -  удалить папку
* **(cd /path/to/filename) sudo chmod +x filename.sh** - сделать файл допустимым для запуска
* **./filename** - запуск файла(без разширения)
* **bash filename.sh** - запуск с разширением
* **dpkg -s filename** - установлен ли пакет ?
* **whereis filename** - где пакет
* **du -hs /path/to/directory** - вес папки
* **lsof -i:80** - список приложений которые на 80 порту
* **netstat  -p** - список приложений и их порты
* **netstat  -lp** - список приложений и их порты + активные подкючения


### Launching files
* Launch file without **.sh** - `./filename`
* Launch **file.sh** - `bash filename.sh`

### Права на папку и переименование
* `sudo chmod -R a+wx folder` - все права на папку для исполнения там действий
* `sudo mv robot robot_new` - переименовать папку
* `HELP commands  when HOLD windows button

### Удаление Nginx под чистую 
```bash
apt-get remove --purge nginx nginx-full nginx-common
apt-get install nginx
```

### Kill process in top(task manager)
```bash
top
kill -9 [PID]

# OR

top
k -> [PID]
signal -> 9
```

### Remove folder with files
```bash
rm -rf name_folder
```

### Deploying Laravel on VPS, LEMP(Linux, Nginx, MySQL, PHP)
[DevMarketer guide](http://devmarketer.io/learn/deploy-laravel-5-app-lemp-stack-ubuntu-nginx/)