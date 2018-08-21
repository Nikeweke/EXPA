## [ElasticSearch](https://www.elastic.co/products/elasticsearch) 
#### Содержание 
* Схема запросов
* Connection
* Examples of DSL Queries
* Вывод записей по критерию исчет в _source (simple)
* Построение запроса с bodybuilder

--- 

Это БД или поисковое ядро в котором сделано упор на индексы, то есть поиск данных это его основная цель. Сама БД написана на JAVa, работает стандартно на 9200 порту.

* [My Postman Docs](https://documenter.getpostman.com/view/3277814/elastic-search/7LnB418#)
* [Kibana](https://www.elastic.co/products/kibana) is browser for ElasticSearch 
* [ES API reference](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html)


#### Схема запросов примерно такая при поиске:
```batch
# Без параметров
http://localhost:9200/index_name/type_name/number_id/_search

# С параметрами
http://localhost:9200/index_name/type_name/number_id/_search?q=name:vasya&size=2
# искать где поле name = vasya и вывод только 2 записей
```


#### Connection
```js
const elasticsearch = require('elasticsearch');
Connect: function () {
   this.conn = new elasticsearch.Client({
     host: 'http://130.211.69.140:9200',
     // log: 'trace'
   });
 },
```

### Examples of DSL Queries (DSL - domain specific language)
Если вы хотите используете DSL, тогда запросы надо делать методом `POST` и в спец. структуре. 
[Bodybuilder.js](http://bodybuilder.js.org/) -  помогает строит тело(body) запроса DSL

#### Постройка запроса
```js
let url      = 'http://localhost:9200/_search';
let options = {
  q    : '*:*',     // optional
  index: '',        // optional
  type : '',       // optional
  body : {}          // optional
}

await helpers.req(url, 'post', options);
```

#### Вывод записей по критерию исчет в `_source` (simple)
```js
var postData = {
  query:{
    match: {
       duration: 35
    }
  }
}
```


#### Построение запроса с bodybuilder
```js
var bodybuilder = require('bodybuilder');
...
var body = bodybuilder()
                .size(5)                                           // amount of entries

                // not strict match (should)
                .query('match', 'keywords_checked', true)      

                 // strict term (must)
                .query('term', 'keywords_checked', true)     

                 // strict terms (must)
                .query('terms', 'keywords_checked', [true, ''])     

                // range
                // gte - greater then or equals
                // lte - less then or Equals
                // gt - greater then
                // lt - less then
                .query('range', '@timestamp', {                    
                       "gte" : from_utc,
                       "lt" : to_utc
                    })

                // must not
                .notQuery('match', 'name', 'kraken')  

                // filter if exist field
                .filter('exists', 'price')   

                .build();  // makes object body



                // .filter('term', 'user', 'kimchy')
                // .filter('term', 'user', 'herald')
                // .orFilter('term', 'user', 'johnny')
                // .notFilter('term', 'user', 'cassie')
                // .aggregation('terms', 'user')


console.log( JSON.stringify(body) )

var options =  {
    // q: '*:*'
    // index: '',
    // type: '',
    body: body
}


return database.conn.search(options)
   .then( body => {
     // console.log(body)
      // var hits = body.hits.hits;
      return body.hits.hits;
    },
    (error) => {
       console.trace(error.message);
});
```










