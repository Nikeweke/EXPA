(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{219:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[t._v("#")]),t._v(" Git")]),t._v(" "),s("h4",{attrs:{id:"содержание"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#содержание","aria-hidden":"true"}},[t._v("#")]),t._v(" Содержание")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#git-reset"}},[t._v("git reset")])]),s("li",[s("a",{attrs:{href:"#git-bisect"}},[t._v("git bisect")])]),s("li",[s("a",{attrs:{href:"#как-скачать-с-репозитория-опредеnнную-ветку"}},[t._v("Как скачать с репозитория определнную ветку")])]),s("li",[s("a",{attrs:{href:"#как-сдеnать-пуш-из-тестовой-new-feature-etc-в-ветку-dev-master-основная"}},[t._v("Как сделать пуш из тестовой(new_feature, etc.) в ветку dev(master, основная)")])])])]),s("p"),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"git-reset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-reset","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("git reset")])]),t._v(" "),s("p",[t._v("Вы сделали пулл, размержели файлы, делаете пуш, НО вам пишет что вы не размержили файл который вы уже и так размержили, решение:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset /app/file/that/not/want/to/merge\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" /app/file/that/not/want/to/merge\n")])])]),s("br"),t._v(" "),s("h3",{attrs:{id:"git-bisect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-bisect","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("git bisect")])]),t._v(" "),s("p",[t._v("Вы замечаете что на текущем этапе разработки приложение сломалось. Можно использовать "),s("strong",[t._v("git bisect")]),t._v(" - оно помогает найти сломанный коммит с помощью бинарного поиска.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start bisecting")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" bisect\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# specifying that current state(commit) is not working")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" bisect bad\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# checkout wokring commit and specify it like working ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit-SHA"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" bisect good \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR specify working commit right away")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" bisect good "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit-SHA"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# After commands above, you launch this searching, ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git automatically will switch branches")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# and you will need mark them as "bad" or "good"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" bisect good "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if all works")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" bisect bad "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if nothing works")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# exit bisecting ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" bisect reset\n")])])]),s("br"),t._v(" "),s("h3",{attrs:{id:"как-скачать-с-репозитория-опредеnнную-ветку"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#как-скачать-с-репозитория-опредеnнную-ветку","aria-hidden":"true"}},[t._v("#")]),t._v(" Как скачать с репозитория определнную ветку")]),t._v(" "),s("p",[t._v("more info - https://stackoverflow.com/questions/1911109/how-to-clone-a-specific-git-branch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote_repo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("br"),t._v(" "),s("h3",{attrs:{id:"как-сдеnать-пуш-из-тестовой-new-feature-etc-в-ветку-dev-master-основная"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#как-сдеnать-пуш-из-тестовой-new-feature-etc-в-ветку-dev-master-основная","aria-hidden":"true"}},[t._v("#")]),t._v(" Как сделать пуш из тестовой(new_feature, etc.) в ветку dev(master, основная)")]),t._v(" "),s("p",[t._v("Допустим у вас есть ветка "),s("code",[t._v("development")]),t._v(" - где лежит проект основной. И допустим другая ветка - "),s("code",[t._v("new_features")]),t._v(". Вы хотите сделать еще ветку и там делать новые вещи или чтобы кто то не сломал код, и пушил в свою ветку. Потом когда вы захотите взять изменения с ветки "),s("code",[t._v("new_features")]),t._v(" и применить на "),s("code",[t._v("development")]),t._v(". Как это сделать? Решение:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# проверяем на какой ветки стоим ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1) Переходим с ветки new_features -> development")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout development\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2) Забираем изменения с ветки new_features")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin new_features\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3) Мержим конфликты если есть и пушим в development")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'merge new_features to dev br'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin development\n")])])]),s("br")])},[],!1,null,null,null);e.default=n.exports}}]);