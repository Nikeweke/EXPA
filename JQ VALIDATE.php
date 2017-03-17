<!DOCTYPE html>
<html>
    <head>
    	<title>Test Validate</title>
        
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/3/w3.css">
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
       
        <!-- https://jqueryvalidation.org/validate/ -->
        <script type="text/javascript" src="jq.validate.js"></script>
        <script type="text/javascript" src="jq.validate.local-ru.js"></script>

        <script>
        $().ready(function()
        {

           $('#myForm').validate({


                // не проверять поля с классом ".ignore"
                // ignore: ".ignore", 


                // этот класс применяетсья для правильно заполненого поля
                validClass: "w3-border-green w3-pale-green",
                errorClass: "w3-border-red w3-pale-red", // противоположный
                 
                // куда будут выводиться сообщения об ошибках
                errorLabelContainer: "#messageBox", 
                wrapper: "li", // во что обарачивать ошибки


                // Правила проверки           
                rules: {
                   name: {
                     required: true,
                     rangelength: [2, 6]
                     // OR 
                     // maxlength: 6,
                     // minlength: 2,
                   },

                   password: "required",
                   
                   re_password:{
                     required: true,  
                     equalTo: "[name=password]"
                   },

                   email:{
                     required: true,
                     email: true
                   } 
                },

                // перезагрузка базовых сообщений своими
                messages: {
                   name: {
                     required: "Заполнил быстро",
                     rangelength: "Не меньше 2 и не больше 6"
                   },
                   password: "Заполнил пес",
                  
                   email:{
                     required: "Заполнил быстро мыло",
                     email: "Мыло не мыло ты"
                   } 
                },


                // по нажатию по кнопке "Submit"
                submitHandler: function(form) {
                        $.ajax({
                            url: form.action,
                            type: form.method,
                            data: $(form).serialize(),
                            success: function(response) {
                                $('#answers').html(response);
                            }            
                        });
                },


                // если ошибка при валидации полей
                invalidHandler: function(event, validator) {
                      // 'this' refers to the form
                      var errors = validator.numberOfInvalids();
                      if (errors) {
                        var message = errors == 1
                          ? 'You missed 1 field. It has been highlighted'
                          : 'You missed ' + errors + ' fields. They have been highlighted';
                        alert(message);
                      }
                    }

            })
        })
        </script>

   </head>
<body>
    



<div class="w3-container">
  <form class="w3-col l4 w3-margin-top" id="myForm" method="Post">

      <label class=""> Name</label>
      <input class="w3-input w3-border" type="text" name="name"><br>

      <label class="">Password</label>
      <input class="w3-input w3-border" type="password" name="password"><br>

      <label class="">Re-Password</label>
      <input class="w3-input w3-border" type="password" name="re_password"><br>

      <label class="">Email</label>
      <input class="w3-input w3-border" type="email" name="email"><br>

      <button class="w3-btn w3-green" type="submit">OK</button>

  </form> 
</div>  
<br>

<ul class="w3-ul" id="messageBox">
</ul>


</body>
</html>    
