## ApiDOC - документирование функций проекта
### Установка:
```
npm i apidoc -g
```

### Сделать в проекте **apidoc.json**:
```
{
  "title":       "NameProject - ApiDoc",
  "name":        "NameProject - project",
  "version":     "0.0.1",
  "description": "Документация"
}
```

### В проекте через консоль:
```
cmd> apidoc -i myapp/ -o apidoc/ -e node_modules
```
* выбор папки **myapp** для документирования
* выбор папки для документации - **apidoc**
* исключить папку **node_modules** из документирования


