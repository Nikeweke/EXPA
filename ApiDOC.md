## ApiDOC - документирование функций проекта
1.Установка:
```
npm i apidoc -g
```

2. В проекте через консоль:
```
cmd> apidoc -i myapp/ -o apidoc/ -e node_modules
```
* выбор папки **myapp** для документирования
* выбор папки для документации - **apidoc**
* исключить папку **node_modules** из документирования

3. Сделать в проекте **apidoc.json**:
```
{
  "title":       "NameProject - ApiDoc",
  "name":        "NameProject - project",
  "version":     "0.0.1",
  "description": "Документация"
}
```
