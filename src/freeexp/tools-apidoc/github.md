## Git
#### Содержание
* Links
* Top commands
* Pusher batch files
* Создаем пользователя глобального с именем и почтой
* Показать настройки
* Игнорирование файлов (.gitignore)
* ADD .
* COMMIT
* CHECKOUT
* REMOTE
* PUSH 
* LOG
* BRANCHES
* MERGE


---

### Links
* [RawGit](https://rawgit.com/) - возможность закинуть на гит стили и еще что-то и потом достать из гита как cdn.

### Top commands
* `git add -A` - добавить все файлы для отслеживания
* `git add .` - добавить все файлы для отслеживания
* `git commit -m 'new'` - сделать подтверждение изменение с комментарием (комментарий обязательно)
* `git push origin master` - сделать закачку файлов в репозиторий
* `git config --list` - настройки git
* `git remote add origin https://github.com/someRepo.git` - добавление адреса 
* `git remote -v` - просмотр данных от адресах
* `git checkout -b trunk` - создание ветки "trunk"  и переход на нёё
* `git branch` - просмотр веток



### Example of files
###### pusher.bat
```
cd D:\path\to\project
git init
git remote add origin https://Nickname:password@bitbucket.org/Nickname/project.git
git add .
git commit -m"new coomit"
git push -u origin master
```



###### push.bat
```
cd D:\path\to\project
git add .
git commit -m"new coomit"
git push
```


### Создаем пользователя глобального с именем и почтой
```
git config --global user.name "nikeweke"
git config --global user.email jxammet@gmail.com
```


###  Игнорирование файлов (.gitignore)
Создаем файл без расширения с названием `.gitignore` и там например:
```bash                     
   # папка лог и файле в ней игнориться
   logs/

    # файлы с расширением .txt игноряться в папке docs
    docs/*.txt
```

###  ADD .
```
// Добавить все файлы проекта под контроль Git
git add .
git add filename

// Файлы которые не проиндексированные не могут быть коммит сделать
// если файл был изменен и его надо потом закомитить то, индиксируем
git add "*.php"
git add .

// удаление файла из под контролЯ Git
git rm --cached filename
```

###  COMMIT
```
// Закомитить файлы которы были изменены и проиндексированы
git commit -m"commit"

// Коммит файлов и индексирование их(Инициализация файлов проекта)
git commit -a -m"init"


// Эта комманда вызывает VIM, в нем в начале можно написать комментарий , 
// чтобы сохранить надо нажать ESC и в конце написать - ":x" - сохранить
git commit


// Вместо VIM - можно юзать Notepad++
// в файле .gitconfig прописывает секцию [core] и это для того чтобы открывался не VIM, а Notepad для написанния комментария
git config --global core.editor "'C:\Program Files\Notepad++\notepad++.exe' - multiInst -notabbar -nosession -noPlugin"

// то что прописивает в файле .gitconfig(путь к файлу:C:\Users\NameUser\...)
[core]
   editor = 'C:\\Program Files\\Notepad++\\notepad++.exe' - multiInst -notabbar -nosession -noPlugin
```

## CHECKOUT
```
// Получить файл из репозитория или откатить локальный файл до файла как на репозиторие
git checkout -- filename
```

##  REMOTE
```
// Добавить удаленный репозиторий для проекта(origin - это название)
git remote add origin https://github.com/Nikeweke/Portal_News.git

// Добавить на удаленный репозитарий без запроса пароля
git remote add origin https://Nickname:Password@bitbucket.org/Nickname/Project.git 

// Посмотреть доступные репизитории удаленные
git remote
git remote -v
```

##  PUSH
```
// Закачать файлы на GitHGub в репозиторий
git push -u origin master // один раз так, так как здесь ключ: -u
git push                 // второй раз так можно
```


##  LOG
```
// Лог действией ( Если много записей то чтобы потом выйти если знак ":" - Q)
git log

// Вывести лог в отфарматированном виде - в красивом так сказать
// %h - № коммита;  %an  - афтар;  %ar  - дата;  %s -  комментарий;
git log --pretty=format:"%h - %an, %ar : %s"  


// Показать за последние 2 недели
git log --since=2.weeks

// Показать изменение с прошлой версией 
git log -p -2
```


## BRANCHES
```
// Создание новой ветки - trunk и сразу переключються на неё
git checkout -b trunk
git branch trunker // создание без переключение на ветку

// Просмотр веток и на какой находимся
git branch
git branch -v

// Переключение между ветками
git checkout name_branch
```





## MERGE
```
// Например мы находимся на ветке trunk - и мержим себе ветку master
git merge master

// выбираем инструмент для решение конфликтов при мерженге и это пишеться .gitconfig
git config --global merge.tool kdiff3

// .ginconfig
[merge]
    tool = kdiff3

// показать инструмент для разрешение конфликтов в мержинге,
// если нет kadiff3 - его надо скачать
git mergetool 

// добавляет в .gitconfig расположение редактора kdiff3
git config --global mergetool.kdiff3.cnd '"C:\Program Files\KDiff3\kdiff3"' $BASE $LOCAL $REMOTE -o $MERGED

// .ginconfig
[mergetool "kdiff3"]
    cmd = \"C:\\\\Program Files\\\\KDiff3\\\\kdiff3\" $BASE $LOCAL $REMOTE -o $MERGED 
    
// После разрешение кофликтов, можно перейти в ту ветку которой нужен апдейт
// мы например в ветке trunk сделали мерже с веткой master, и хотим апдейтнуть master
git checkout master
git branch -v
git merge trunk
git status
git branch -v
```







