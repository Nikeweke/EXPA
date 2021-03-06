# JS cases

#### Содержание
[[toc]]

---

### `array.map({...} => ...)` - забрать значение из массива

```js
// Допустим есть массив обьектов
let arr = [
  {name: 'vas', info: [...]},
  {name: 'vas', info: [...]},
  {name: 'vas', info: [...]},
  {name: 'vas', info: [...]},
];

// И надо забрать из массива все поля info и вернуть новый массив
// где только newArr = [[...],[...],[...]], [...] - это все что взяли из info
let newArr = arr.map(({info}) => info );
```

### `const, let {...} = some_object;` - забрать значение из обьекта

```js
// Допустим надо забрать из обьекта несколько полей
let someObj = {name:..., surname:..., age:...};

// Забираем ()
let {name, surname, age} = someObj;
// OR const {... 

// Используем как переменные 
console.log(name, surname, age);
```


### Получить дату по частям
```js
function GetDateInParts(){
  var d = new Date();
  var day   = d.getDate();
  var month = d.getMonth() + 1;
  var year  = d.getFullYear();
  var min   = d.getMinutes();
  var hours = d.getHours();

  if(min   < 10){ min   = '0' + min;   }
  if(hours < 10) { hours = '0' + hours; }
  if(day < 10){ day =  "0" + day   }
  if(month < 10){ month =  "0" + month   }

  partTime = {
                day: day,
                month: month,
                year: year,
                min:  min,
                hour: hours,
                time: hours +":"+ min
               }

  return partTime;
}
```

### AJAX запрос
``` javascript
function Ajaxik(postData, url, method){
  $.ajax({
           type: method,
           async: true,
           url: url,
         //  dataType: 'json',
           data : postData,
           success: function(data) {
                 // code here
                 // if(data['success']{ alert(data['message']; }   
           },
          error: function (xhr, ajaxOptions, thrownError){
            alert(xhr.status);  alert(thrownError);
         }
  })
}

```


### Закрыть все Tooltips
```js
function CloseAllTooltips()
{
  $('[rel="tooltip"], .tooltip').tooltip("hide"); // hide tooltips
}
```



### XSRF(Laravel) для Ajax запросов
```js
 $.ajaxSetup({
       headers: {
         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') // для работы Лары
       }
   });
```

### По нажатию Ентер когда фокус на поле запуск функции
```js 
$('#weight_field').keypress(function(e) {
   if(e.charCode == 13 || e.keyCode == 13) {
      AddWeight();
   }
})
```

###  MOMENT.js - как получить время словами и на русском
```javascript
function GiveRelativeTime(date)
 {
   // date  - 2016-12-20 14:33:22(YYYY-MM-DD HH:mm:ss)
   
   var now  =  moment().locale('ru');
   var date =  moment(date).locale('ru');
   return date.from(now) // "день назад или какая там дата"
 }
```

### Получение данных с формы(div, form)
```javascript

// также можно юзать вот эту функцию 
// $("form").serializeArray();
// $('input, textarea').not("input[type='submit']").serializeArray(); 
function GetData(obj_form)
  {
     var hData = {};

     $('input, select, textarea', obj_form).each(function()
     {
          if(this.name && this.name != '')
           {
             hData[this.name] = this.value;
             console.log('hData[' + this.name + '] = ' + hData[this.name]);
           }
     });
     return hData;
   }
```

### Функция для того чтобы взять значение из массива GET(localhost/?user=...)
``` javascript
function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
```

###  LET IT SNOW

``` javascript
// HOW TO USE in HTML: <canvas id="sky"></canvas>

window.onload = function(){

    // get the canvas and context and store in vars
    var canvas = document.getElementById("sky");
    var ctx    = canvas.getContext("2d");


    // set canvas dims to window height and width
    var W  =  window.innerWidth;
    var H  =  window.innerHeight;
    canvas.width    =   W;
    canvas.height   =   H;

    // generate the snowflakes and apply attributes
    var mf     =  100;  // max flakes
    var flakes = [];

    // loop through the empty flakes and apply attributes
    for(var i = 0; i < mf; i++)
     {
       snow = {
                x: Math.random()*W,
                y: Math.random()*H,
                r: Math.random()*5+2,  // min of 2px and max of 7px
                d: Math.random()*1,   // density of the flake
              }

       flakes.push(snow);
     }


     // dras flakes onto canvas
     function drawFlakes()
      {
        ctx.clearRect(0, 0, W, H)
        ctx.fillStyle = "white";
        ctx.beginPath();

        for(var i = 0; i < mf; i++)
         {
           var f = flakes[i];
           ctx.moveTo(f.x, f.y);
           ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
         }

         ctx.fill();
         moveFlakes();
      }


      // animate the flakes
      var angle = 0;

      function moveFlakes()
       {
         angle += 0.01;

         for(var i = 0; i < mf; i++)
          {
            var f = flakes[i];

            f.y  +=  Math.pow(f.d, 2) + 1;
            f.x  +=  Math.sin(angle) * 2;

            // if snowflake reaches the bottom , send a new one to the top
             if(f.y > H)
              {
                flakes[i] = {
                              x: Math.random()*W,
                              y: 0,
                              r: f.r,
                              d: f.d
                            }
              }
          }
       }

       setInterval(drawFlakes, 25);
}
```

### COOKIES

``` javascript
 /***********************************************************
 *  Получить куки
 *
 *  @param string - name - имя куки которого хотим получить
 *******************************************************/
 function GetCookie(name)
 {
      var matches = document.cookie.match(new RegExp(
         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
       ));
       return matches ? decodeURIComponent(matches[1]) : undefined;
 }




/***********************************************************
*  Удалить куки
*
*  @param string - name - имя куки которого хотим удалить
*******************************************************/
function DelCookie(name)
{
   document.cookie = name + "=" + "; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
}




/***********************************************************
*  Поставить куки
*
*  @param string - name  - имя куки
*  @param string - value - значение
*******************************************************/
function SetCookie(name,value)
 {
   var now = new Date();

//   now.setMinutes(  + now.getMinutes()); // минуты
   now.setDate( 1 + now.getDate()); //дни
   document.cookie = name + "=" + value +"; path=/; expires="+ now.toGMTString();
 }
 
  
 
/***********************************************************
*  Выход из системы (Очищение куков)
*
*******************************************************/
function Logout()
  {
     DelCookie('Uid');
     DelCookie('Login');
     location.href = "login.html";
  }



/***********************************************************
*   Шифриуем куки
*
*   @param array - Cookies - наши куки для шифра
********************************************************/
function CookieEncoder(Cookies)
 {
    Cookies = JSON.stringify(Cookies); // в одну строку с помощью JSON
    Cookies = btoa(Cookies);          // шифр
    return Cookies;                    // возврат
 }



/***********************************************************
*   Дешифриуем куки
*
*   @param array - Cookies - наши куки для розшифра
********************************************************/
function CookieDecoder(Cookies)
{
  Cookies = atob(Cookies);          // дешифр
  Cookies = JSON.parse(Cookies);    // из JSON в массив
  return Cookies;                    // возврат
 }
```




### Получить дату сегодня 
```js
function GetCurrentDate()
 {
   d = new Date();

   curr_date          =         d.getDate() > 9 ? d.getDate() : '0'  + d.getDate() ;
   curr_month         =         d.getMonth() > 9 ? (d.getMonth()+1) : '0'  + (d.getMonth()+1) ;
   curr_year          =         d.getFullYear();
   curr_hour          =         d.getHours() > 9 ? d.getHours() : '0'  + d.getHours() ;
   curr_minutes       =         d.getMinutes() > 9 ? d.getMinutes() : '0'  + d.getMinutes() ;

   return curr_date + "." + curr_month + "." + curr_year + " " + curr_hour + ":" + curr_minutes;
 }
```



### Проверка почты на валидность
```js
function isValidEmailAddress(emailAddress)
 {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
 }
```





### Проверка объекта на пустоту
```js
function isEmpty(object)
{
  return JSON.stringify(object) == "{}";
}
```



### Jump to top
``` javascript
$(document).ready(function(){
      $('body').append('<div id="toTop" class="btn ma-btn"><span class="glyphicon glyphicon-chevron-up"></span> Наверх</div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
```


### Проверка на сложность пароля

```js
function PowerPass(field){

            $(document).ready(function(){
                var object = "#" + field;
                
            //minimum 8 characters
            var bad = /(?=.{8,}).*/;
            //Alpha Numeric plus minimum 8
            var good = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{8,}$/;
            //Must contain at least one upper case letter, one lower case letter and (one number OR one special char).
            var better = /^(?=\S*?[A-Z])(?=\S*?[a-z])((?=\S*?[0-9])|(?=\S*?[^\w\*]))\S{8,}$/;
            //Must contain at least one upper case letter, one lower case letter and (one number AND one special char).
            var best = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[^\w\*])\S{8,}$/;

            $(object).on('keyup', function () {
                var password = $(this);
                var pass = password.val();
                var passLabel = $('[for="password"]');
                var stength = 'Слабый';
                var pclass = 'danger';
                if (best.test(pass) == true) {
                    stength = 'Очень сильный';
                    pclass = 'success';
                } else if (better.test(pass) == true) {
                    stength = 'Сильный';
                    pclass = 'warning';
                } else if (good.test(pass) == true) {
                    stength = 'Почти хороший';
                    pclass = 'warning';
                } else if (bad.test(pass) == true) {
                    stength = 'Слабый';
                } else {
                    stength = 'Ты шутишь ?';
                }

                var popover = password.attr('data-content', stength).data('bs.popover');
                popover.setContent();
                popover.$tip.addClass(popover.options.placement).removeClass('danger success info warning primary').addClass(pclass);

            });

            $('input[data-toggle="popover"]').popover({
                placement: 'top',
                trigger: 'focus'
            });

            })
}

```





### SIMPLE FUNCTIONS
``` javascript

//Показывает обьект который пришел как атрибут (JQUERY)
function ShowObject(el){ $("#"+el).show('blind',600); }

function ShowObject1(el){ $("#"+el).show();  }

// Скрывает обьект который пришел как атрибут (JQUERY)
function HideObject(el){ $("#"+el).hide('blind',600); }

 // Скрывает обьект который пришел как атрибут (без JQ)
 function HideObject1(obj)
  {
    var el = document.getElementById(obj);
    el.style.display = "none";

  }

// Скрывает или показывает обьект который пришел как атрибут (JQUERY)
function ToggleObject(el){ $("#"+el).toggle('blind',600);

 }

// Скрывает или показывает обьект который пришел как атрибут (без JQ)
function ToggleObject1(obj)
 {
      var el = document.getElementById(obj);

      if( el.style.display == "none"){ el.style.display = "";}
      else{ el.style.display = "none"; }
 }

// Направляет на страницу
function HeadPage(page)
 {
   document.location.href = page;
 }

```




### AJAX load html
``` javascript
/* **************** Функция для действий от которых не надо ответ (Likes , Viewed pages)  */

/* Функция для вывода данных  */
function DivOut(obj,page_id)
 {
     var msg = 0;

     if(obj == "top_news_1")  { msg = 1; } //Top News 1
     if(obj == "top_news_1_indicators")  { msg = 7; } //Top News 1 Indicators
     if(obj == "games_div")   { msg = 2; }  //Games
     if(obj == "software_div"){ msg = 3; }  //Soft
     if(obj == "hardware_div"){ msg = 4; }  //HARD
     if(obj == "it_div")      { msg = 5; }  //IT
     if(obj == "top_news_2")  { msg = 6; } //Top News 2
     if(obj == "coments_div")  { msg = 8; } //Top News 2

     $.ajax({
             url:     "inc/out.php", //Адрес подгружаемой страницы
             type:     "post", //Тип запроса
             dataType: "html", //Тип данных
             data:     ({a : msg, id: page_id}) ,
             success: function(response) {
                                         var resp = $.trim(response); // VERY important thing , do not touch !!!
                                          ///alert(resp);

                                         //Вывод в див
                                          $("#"+obj).html(resp);
                                         },

         error: function(response) { alert("ERROR!!"); }
      });
}
```









### Alerts
``` javascript
function Alertik(msg, type)
 {
   // DANGER
   if(type == "D"){ var dom = '<div class="top-alert"><div class="alert alert-danger alert-dismissible fade in " role="alert"><i class="glyphicon glyphicon-exclamation-sign"></i> ' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></div></div>'; }
   // Warning
   if(type == "W"){ var dom = '<div class="top-alert"><div class="alert alert-warning alert-dismissible fade in " role="alert"><i class="glyphicon glyphicon-question-sign"></i> ' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></div></div>'; }
   // SUCCESS
   if(type == "S"){ var dom = '<div class="top-alert"><div class="alert alert-success alert-dismissible fade in " role="alert"><i class="glyphicon glyphicon-ok"></i> ' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></div></div>'; }
   // INFO
   if(type == "I"){ var dom = '<div class="top-alert"><div class="alert alert-info alert-dismissible fade in " role="alert"><i class="glyphicon glyphicon-info-sign"></i> ' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></div></div>'; }

  var jdom = $(dom);
	jdom.hide();
	$("body").append(jdom);
	jdom.fadeIn();
	setTimeout(function() {
		jdom.fadeOut(function() {
			jdom.remove();
		});
	}, 6000);
}
```



