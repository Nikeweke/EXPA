# Intro
Содержание
[[toc]]

---

### Что такое CI?

Коротко - главное это тесты в проекте, а потом уже предпочтения к окружению, желание после тестов деплоить на сервер. CI запускает тесты и ставит статусы каждому пушу.

Continuous Integration — это практика разработки программного обеспечения, которая заключается в слиянии рабочих копий в общую основную ветвь разработки несколько раз в день и выполнении частых автоматизированных сборок проекта для скорейшего выявления потенциальных дефектов и решения интеграционных проблем. В обычном проекте, где над разными частями системы разработчики трудятся независимо, стадия интеграции является заключительной. Она может непредсказуемо задержать окончание работ. Переход к непрерывной интеграции позволяет снизить трудоёмкость интеграции и сделать её более предсказуемой за счет раннего обнаружения и устранения ошибок и противоречий. Основным преимуществом является сокращение стоимости исправления дефекта, за счёт раннего его выявления.

* Continuous Integration (CI)
* Continuous Delivery (CD)
* Continuous Deployment (CD)


### Зачем это нужно?

В процессе работы мне часто приходится обновлять сервисы и разворачивать их на конечные сервера. Когда проектов было мало, это не составляло особых проблем, т.к. релизы были редкими, развертывания выполнялись довольно редко. Тесты выполнялись вручную. Со временем, проектов и задач становилось больше, и выполнение однотипных задач стало занимать больше времени. Рассмотрим классический процесс решения задачи, подходящий для большинства компаний:

* Берем задачу из списка/Получаем от начальства
* Создаем новую ветку в git и открываем пул реквест
* Пишем код
* Лично или с помощью коллеги выполняем код-ревью (code review — обзор/проверку кода)
* Запускаем тесты
* Сливаем ветку в мастер
* Выполняем сборку проекта
* Публикуем новую сборку


Этот процесс повторяется для каждой задачи, если вы 10 дней писали код и на сборку/развертывание потратили 1 час, то это выглядит разумно и не трудозатратно. Но что если вы поправили мелкий баг за 1 минуту, но на развертывание потратите тот же час? В этой ситуации это выглядит довольно расточительно. А если вам нужно выполнять в день 10 — 20 багфиксов (bugfix, исправление ошибки)?

Первый путь, укрупнять пул реквесты и делать объединение в мастер как можно реже. Второй путь настроить CI чтобы процесс тестирования/построения/развертывания выполнялся автоматически. Делать ревью больших пул реквестов неудобно, поэтому мы пойдем вторым путем.

### Сервисы CI/CD

* [TravisCI](https://travis-ci.org/)
* [GitlabCI](https://docs.gitlab.com/ee/ci/)
* [CircleCI](https://circleci.com/)
* [CodeShip](https://codeship.com/)


### Пример 

```yaml
# .travis.yml

language: node_js
node_js:
  - "8"

branches:
  only:
    - master
```


```yaml
 # .gitlab-ci.yml

 # The configuration file starts by declaring a docker image that 
 # allows you to specify a certain version of NodeJS you want to use during build time.
 image: node:latest

  # we define the different continuous integration process it will run.
  stages:
    - build
    - test

  # we’ve defined the stages, the configuration includes a cache 
  # that specifies files that should be saved for later to be used between runs or stages.
  cache:
    paths:
      - node_modules/

  # install_dependencies, in the process of demonstrating the interaction between stages, 
  # we are extracting this step to run its own stage. 
  # Typically, running npm install can be combined with the next testing stages. 
  install_dependencies:
    stage: build
    script:
      - npm install
    artifacts:
      paths:
        - node_modules/

  # testing_testing(you can name as u want) declares the command that will run the test suit, 
  # Since this is the last stage, it will access what 
  # is been produced by the build stage, which are the project dependencies in our case.
  testing_testing:
    stage: test
    script: npm test
```