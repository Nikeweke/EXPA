(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{220:function(e,a,t){"use strict";t.r(a);var r=t(0),o=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),t("h4",{attrs:{id:"содержание"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#содержание","aria-hidden":"true"}},[e._v("#")]),e._v(" Содержание")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#как-уменьшить-размер-образа-допустим-nodejs-official-весит-400-мб-в-свернутом-состоянии"}},[e._v("Как уменьшить размер образа? допустим nodejs official весит 400 мб в свернутом состоянии.")])]),t("li",[t("a",{attrs:{href:"#можно-nи-из-контейнера-сдеnать-образ"}},[e._v("Можно ли из контейнера сделать образ?")])]),t("li",[t("a",{attrs:{href:"#есnи-не-удаеться-скачать-репозиторий-а-сеть-все-таки-есть-тогда-что"}},[e._v("Если не удаеться скачать репозиторий, а сеть все таки есть, тогда что?")])]),t("li",[t("a",{attrs:{href:"#под-windows-установиn-docker-toolbox-но-подкnючиться-могу-тоnько-через-ps-в-окне-toolbox-как-подкnючиться-через-cmd-иnи-cmder-exe"}},[e._v("Под Windows установил Docker-Toolbox. Но подключиться могу только через PS в окне Toolbox. Как подключиться через cmd или cmder.exe?")])]),t("li",[t("a",{attrs:{href:"#как-проверить-что-докер-запущен-на-windows"}},[e._v("Как проверить что докер запущен на Windows?")])])])]),t("p"),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"как-уменьшить-размер-образа-допустим-nodejs-official-весит-400-мб-в-свернутом-состоянии"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#как-уменьшить-размер-образа-допустим-nodejs-official-весит-400-мб-в-свернутом-состоянии","aria-hidden":"true"}},[e._v("#")]),e._v(" Как уменьшить размер образа? допустим nodejs official весит 400 мб в свернутом состоянии.")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("Использовать еще меньший отцовский образ, например: "),t("code",[e._v("ubuntu - 43mb")]),e._v(" или "),t("code",[e._v("alpine - 5mb")])]),e._v(" "),t("li",[e._v("Попробовать найти уже нужный образ с наименьшим размером, например: "),t("code",[e._v("alpine-node - 67mb")])]),e._v(" "),t("li",[e._v("Не устанавливать отладочные иструменты, например: "),t("code",[e._v("vim")]),e._v(" или "),t("code",[e._v("curl")])]),e._v(" "),t("li",[e._v("Больше здесь: https://hackernoon.com/tips-to-reduce-docker-image-sizes-876095da3b34")])])]),e._v(" "),t("h3",{attrs:{id:"можно-nи-из-контейнера-сдеnать-образ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#можно-nи-из-контейнера-сдеnать-образ","aria-hidden":"true"}},[e._v("#")]),e._v(" Можно ли из контейнера сделать образ?")]),e._v(" "),t("blockquote",[t("p",[e._v("Да можно: "),t("code",[e._v("docker commit [container-id] [image-name:tag]")])])]),e._v(" "),t("h3",{attrs:{id:"есnи-не-удаеться-скачать-репозиторий-а-сеть-все-таки-есть-тогда-что"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#есnи-не-удаеться-скачать-репозиторий-а-сеть-все-таки-есть-тогда-что","aria-hidden":"true"}},[e._v("#")]),e._v(" Если не удаеться скачать репозиторий, а сеть все таки есть, тогда что?")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker-machine restart default \ndocker login\n")])])]),t("h3",{attrs:{id:"под-windows-установиn-docker-toolbox-но-подкnючиться-могу-тоnько-через-ps-в-окне-toolbox-как-подкnючиться-через-cmd-иnи-cmder-exe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#под-windows-установиn-docker-toolbox-но-подкnючиться-могу-тоnько-через-ps-в-окне-toolbox-как-подкnючиться-через-cmd-иnи-cmder-exe","aria-hidden":"true"}},[e._v("#")]),e._v(" Под Windows установил Docker-Toolbox. Но подключиться могу только через PS в окне Toolbox. Как подключиться через cmd или cmder.exe?")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker-machine env --shell cmd default \n@FOR /f \"tokens=*\" %i IN ('docker-machine env --shell cmd default') DO @%i\n")])])]),t("h3",{attrs:{id:"как-проверить-что-докер-запущен-на-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#как-проверить-что-докер-запущен-на-windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Как проверить что докер запущен на Windows?")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker-machine active\n")])])])])},[],!1,null,null,null);a.default=o.exports}}]);