## Вопросы и Ответы
**1)** Как уменьшить размер образа? допустим nodejs official весит 400 мб в свернутом состоянии. 
> * Использовать еще меньший отцовский образ, например: `ubuntu - 43mb` или `alpine - 5mb`
> * Попробовать найти уже нужный образ с наименьшим размером, например: `alpine-node - 67mb`
> * Не устанавливать отладочные иструменты, например: `vim` или `curl`
> * Больше здесь: https://hackernoon.com/tips-to-reduce-docker-image-sizes-876095da3b34

**2)** Можно ли из контейнера сделать образ?
> Да можно: `docker commit [container-id] [image-name:tag]`

**3)** Если не удаеться скачать репозиторий, а сеть все таки есть, тогда что?
```
docker-machine restart default 
docker login
```

**4)** Под Windows установил Docker-Toolbox. Но подключиться могу только через PS в окне Toolbox. Как подключиться через cmd или cmder.exe?
```
docker-machine env --shell cmd default 
@FOR /f "tokens=*" %i IN ('docker-machine env --shell cmd default') DO @%i
```

**5)** Как проверить что докер запущен на Windows?
```
docker-machine active
```