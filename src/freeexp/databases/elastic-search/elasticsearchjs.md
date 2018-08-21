## Elasticsearch.js - package for ElasticSearch
https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html

#### Connection
```js
var elasticsearch = require('elasticsearch');
Connect: function () {
   this.conn = new elasticsearch.Client({
     host: 'http://130.211.69.140:9200',
     // log: 'trace'
   });
 },
```

