## ElasticSearch

Это БД которая очень быстро исчет данные.

### API

##### Структура данных
```json

```

#### Добавить данные
```json
[{
  "city": "New york",
  "name": "Wild fox",
},
{
  "city": "New Trans",
  "name": "Graugs",
}]
```
```
{POST} http://localhost:9200/places/restoraunts
```


#### Получить данные по БД все
```
# hits - это и есть записи
http://localhost:9200/_search?q=*:*
http://localhost:9200/_search
```

#### Получить данные по какому то индексу (Simple url)
```
# example schema {GET}
http://localhost/index/type/_search?q=some_field_in_source:some_value


# Вывод всех записей с таким индексом
http://localhost:9200/some_index_name/_search/

# Вывод всех записей с таким индексом или где встечаеться
http://localhost:9200/some_index_name*/_search/

# Вывод всех записей с таким индексом или где встечаеться + где тип
http://localhost:9200/some_index_name*/type_name/_search/
```

#### Поиск по документу(записи)` _source`
```
http://localhost:9200/some_index_name/type_name/_search?q=some_var_will_search_in_source
```

#### Вывод всех записей (DSL - domain specific lang)
```js
var postData = {
  query:{
    match_all: {}
  }
}

var data = await helpers.req('http://localhost:9200/_search', 'post', postData); // 'post' - method
```

#### Вывод записей по критерию исчет в `_source` (DSL)
```js
var postData = {
  query:{
    match: {
       duration: 35
    }
  }
}
```
