# Expa from Golang

### Useful links
* [MYSQL tut](https://blog.maddevs.io/golang-mysql-9aa09cdbb666)
* [GORM](http://jinzhu.me/gorm/models.html)
* [Tut](https://www.youtube.com/watch?v=ldNzI0EYWKU&index=5&list=PL2ANXDJvvFeJLRIL_8NZl5LGtrRE3sE_E)
* [Revel](https://revel.github.io/)
* [MYSQL tut 2](https://www.slideshare.net/vividcortex/using-my-sql-with-go)
* [Chat with Go](https://scotch.io/bar-talk/build-a-realtime-chat-server-with-go-and-websockets)
* [JOBS CRON](https://godoc.org/github.com/robfig/cron)
* [Telegram bot](https://medium.com/golang-notes/%D0%BF%D0%B8%D1%88%D0%B5%D0%BC-%D0%B1%D0%BE%D1%82%D0%B0-%D0%B4%D0%BB%D1%8F-telegram-%D0%BD%D0%B0-go-71c9acd102d1)
* [BeeGo framework](https://medium.com/@richardeng/a-word-from-the-beegoist-d562ff8589d7)


---

### [Пакеты для Golang](https://godoc.org/)

* Websockets - `go get github.com/gorilla/websocket`
* Jobs - `go get github.com/robfig/cron`
* Gorm(ORM for DB) - `go get github.com/drgomesp/gorm`
* Mysql driver - `go get github.com/go-sql-driver/mysql`
* Fresh (Hot reloader) - `go get github.com/pilu/fresh`

###### run.bat
```batch
@ECHO OFF

REM по стандарту должна уже стоять
REM SET GOROOT=C:\GO
SET GOPATH=%CD%

REM путь к бинарникам проекта
SET PATH=%GOPATH%\BIN;%PATH%;

REM SET GOOS=linux
REM SET GOARCH=amd64
REM SET CGO_ENABLED=0

REM go get github.com/pilu/fresh
REM fresh 

go run index.go

REM go build index.go
REM go build -o build/index index.go
REM go build -o build/index.exe index.go
pause
```


  
  
