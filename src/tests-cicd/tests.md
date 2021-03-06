# Tests

[[toc]]

--- 

### Какие бывают тесты?
* **Интеграционное тестирование**, предназначено для проверки связи между компонентами, а также взаимодействия с различными частями системы (операционной системой, оборудованием либо связи между различными системами).
* **Модульное(Unittest) тестирование** - когда тестируем один класс или функцию. 
* **Системное тестирование**, тестирование когда тест пронизывает все слои приложения.
* **Приемочное тестирование** – исполняемые процедуры для установления факта соответствия требованиям заказчика. Актуально в тех случаях, когда требования к коду и работающему приложению описаны заказчиком в ТЗ или в любой другой письменной форме. На основании этого создаётся либо сценарий, либо простой перебор отдельных значений, чтобы наглядно показать возможность выполнения поставленной задачи. В частном случае, это привычный нам demo-mode, демонстрирующий возможности ПО.
* **Регрессионное тестирование** – оценка работоспособности уже проверенного кода после внесения в него изменений. Актуально для динамических систем, где появление новых данных может реально повлиять на работоспособность всего кода. Логично, что для элементарного заполнения БД создавать регрессионное тестирование не имеет смысла, но для полноценного ПО в состоянии вечной доработки – вполне.


### Методологии разработки ПО?

[Methodologies](https://geekbrains.ru/posts/methodologies)

* **TDD** - Разработка через тестирование (англ. test-driven development, TDD) — техника разработки программного обеспечения, которая основывается
 на повторении очень коротких циклов разработки: сначала пишется тест, покрывающий желаемое изменение, затем пишется код, который позволит пройти тест,
  и под конец проводится рефакторинг нового кода к соответствующим стандартам.
* **BDD**( Behavior-driven development, дословно «разработка через поведение») - BDD методология является расширением TDD в том смысле, 
что перед тем как написать какой-либо тест необходимо сначала описать желаемый результат
от добавляемой функциональности на предметно-ориентированном языке. 
После того как это будет проделано, конструкции этого языка переводятся специалистами или 
специальным программным обеспечением в описание теста. 
* Waterfall — традиционный подход.
* RUP (Rational Unified Process) — рациональный.
* Agile — общая методология гибкой разработки.
* Crystal Clear — подход с уравниванием разработчиков в коллективе.
* Spiral — спиральный метод.
* DSDM (Dynamic Systems Development Model) — динамическая модель.
* FDD (Feature Driven Development) — методология, рассматривающая будущие изменения.
* JAD (Joint Application Development) — ориентированный на пользователя подход.
* RAD (Rapid Application Development) — модель быстрой разработки.
* Scrum — концепция работы в условиях сорванных сроков и идеологического кризиса.
* XP (Extreme Programming) — экстремальная разработка в динамической среде.
* LD (Lean Development) — метод, предполагающий бережное отношение ко всем участникам процесса.




### Зачем тестировать?
* **Быстрое тестирование после изменений** 
* **Доказательство корректности кода**
* **Возможность лучше разобраться в коде**

### Пример - тестирование API expressjs
Тесты должны находитсья в папке "test"

```json
{
  "name": "testing",
  "version": "1.0.0",
  "description": "",
  "main": "test.js",
  "scripts": {
    "test": "mocha --exit"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "chai": "^4.1.1",
    "mocha": "^3.5.0",
    "chai-http": "^4.2.1"
  }
}
```

```js
// index.spec.js
//During the test the env variable is set to test
process.env.NODE_ENV = 'test'

// exporting express server
let server = require('../settings/bootstrap.js')()

// running tests (pass server to test)
require('./api.spec')(server)
```

```js
// api.spec.js
//Require the dev-dependencies
let chai     = require('chai')
let chaiHttp = require('chai-http')
let should   = chai.should()

chai.use(chaiHttp)

module.exports = function (server) {

  const TEST_API = '/api/check'

  describe('API', () => {
  
    describe(`{GET} ${TEST_API}`, () => {
      it('it should GET object with {message: ...}', (done) => {
        chai.request(server)
          .get(TEST_API)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('message').eql('That is API, Hello from Bully')
            done()
          })
      })
    })

    describe(`{POST} ${TEST_API}`, () => {
      it('it should GET object with {message: ...}', (done) => {
        chai.request(server)
          .post(TEST_API)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('message').eql('That is API, Hello from Bully')
            done()
          })
      })
    })
  })
}
```