## Git solutions
##### Содержание
* Git Reset
* Как скачать с репозитория определнную ветку
* Как сделать пуш из тестовой(new_feature, etc.) в ветку dev(master, основная)

---


### Git Reset
Вы сделали пулл, размержели файлы, делаете пуш, НО вам пишет что вы не размержили файл который вы уже и так размержили, решение:

```bash
git reset /app/file/that/not/want/to/merge
git add /app/file/that/not/want/to/merge
``` 

#### Как скачать с репозитория определнную ветку
more info - https://stackoverflow.com/questions/1911109/how-to-clone-a-specific-git-branch

```bash
git clone -b <branch> <remote_repo>
```
 

#### Как сделать пуш из тестовой(new_feature, etc.) в ветку dev(master, основная)

Допустим у вас есть ветка `development` - где лежит проект основной. И допустим другая ветка - `new_features`. Вы хотите сделать еще ветку и там делать новые вещи или чтобы кто то не сломал код, и пушил в свою ветку. Потом когда вы захотите взять изменения с ветки `new_features` и применить на `development`. Как это сделать? Решение:

```bash
# проверяем на какой ветки стоим 
git branch

# 1) Переходим с ветки new_features -> development
git checkout development

# 2) Забираем изменения с ветки new_features
git pull origin new_features

# 3) Мержим конфликты если есть и пушим в development
git add -A
git commit -m 'merge new_features to dev br'
git push origin development
``` 