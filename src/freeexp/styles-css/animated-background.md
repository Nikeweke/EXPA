### Переливающийся задний фон
```html
<!DOCTYPE html>
<html  lang="en">

<head>

  <!-- HEAD
  ===========================================================================-->
  <title>BARSETKA</title>

  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
  <link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
  <meta name="viewport" content="width=device-width" />

  <link href="assets/css/booter/css/bootstrap.css"               rel="stylesheet" /> <!-- Bootstrap  CSS  -->
  <link href="assets/css/paper-dashboard.css"                    rel="stylesheet" /> <!--  Paper Dashboard CSS -->
  <link href="assets/css/w3.css"                                 rel="stylesheet" /> <!--  Paper Dashboard CSS -->
  <link href="assets/css/font-awesome/css/font-awesome.min.css"  rel="stylesheet" /> <!--  Font-awesome icons   -->
  <!-- ===========================================================================- HEAD-->

    <style>
       .content{ padding-top: 20vh; }
        body,
        html {
            height: 100%;
            margin: 0;
            height: 100vh;
        }
        #divLogin{
          background-color: #F4F3EF;
        }
        #container {
            min-width: 100%;
            min-height: 100%;
            text-align: center;
            background: linear-gradient(230deg, #a24bcf, #4b79cf, #4bc5cf);
            background-size: 300% 300%;
            -webkit-animation:  60s ease infinite;
            -moz-animation:  60s ease infinite;
            -o-animation:  60s ease infinite;
            animation:  60s ease infinite;
            background: transparent linear-gradient(47deg, rgb(147, 39, 143), rgb(0, 169, 157)) repeat scroll 0% 0% / 200% 200%;
            animation: 30s ease 0s normal none infinite running CustomAnimation;
        }
        @keyframes CustomAnimation {
            0% {
                background-position: 0% 53%;
            }
            50% {
                background-position: 100% 48%;
            }
            100% {
                background-position: 0% 53%;
            }
        }
    </style>

</head>

<body>
    <div style="" id="container">

      <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                            <div id="EnterForm">
                                <div id="divLogin" class="card w3-card-4">
                                    <div class="header">
                                        <h3 class="font2">Barsetka</h3>
                                        <h4>Вход</h4>
                                        <p id="alertEnter" class="w3-text-red font3"></p>
                                    </div>
                                    <div class="content">
                                        <div class="form-group">
                                            <label>Email адресс</label>
                                            <input placeholder="Введите email" name="email" class="form-control" type="email">
                                        </div>
                                        <div class="form-group">
                                            <label>Пароль</label>
                                            <input placeholder="Введите пароль" name="pwd" class="form-control" type="password">
                                        </div>
                                    </div>
                                    <div class="footer text-center">
                                      <button type="button" onclick="SendForm(1);" class="btn btn-success  btn-wd"> Let's go!</button><br><br>
                                        <div class="forgot">
                                            <a href="#pablo">Забыли пароль?</a>
                                        </div>
                                    </div>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>


</body>

  <!--  JAVASCRIPT
===========================================================================--->
<script type="text/javascript" src="assets/js/jquery-1.10.2.js"                    ></script><!--  JQ   -->
<script type="text/javascript" src="assets/js/sweetalert.js"   ></script><!-- Sweet Alert 2 plugin -->
<script type="text/javascript" src="assets/js/ma-js.js"></script>
<script type="text/javascript" src="assets/js/pages/log_reg_contact.js"></script>
<!-- ===========================================================================- JAVASCRIPT -->

</html>
```
