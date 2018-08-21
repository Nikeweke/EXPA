# C#

Установка цветовой схемы: Сервис -> Импорт и экспорт -> выбрать настройки (цвет. схему)
* Схемы [здесь](https://studiostyl.es/schemes/one-dark)
* [Работа с MySQL](http://zetcode.com/db/mysqlcsharptutorial/) 

### Содержание
[[toc]]

---


### Hello world 
###### Без класса не может быть ф-ция, для использование Console надо - `using System;`
```c
using System;

class Program
 {
   static void Main()
     {
        Console.WriteLine("HEllo world");
        Console.ReadKey(); 
      }
 }

```


### Readline and Output it
```c
using System;
class Program
 {
    static void Main()
    {
       
       int num1;
       int num2;

       Console.Write("Input num1 =");
       num1 = Convert.ToInt32(Console.ReadLine()); // Конвертим так как перемнная не строковая 

       Console.WriteLine(); 
        
       Console.Write("Input num2 = ");
       num2 = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Rez = {0} + {1} = {2}", num1, num2, num1+num2);
        Console.ReadKey(); 

    }
}
```


### MySQL connect
Нужно установить коннектор к БД через  управляющего пакетами проекта Nuget: пакет **MySql.Data.MySqlClient**
```c
using System;
using MySql.Data.MySqlClient; // подключение ф-ций для работы с БД


class Program
 {
    static void Main()
    {
        string cs = @"server=localhost;userid=root;password=;database=test";
        MySqlConnection conn = null;

        try
        {
            conn = new MySqlConnection(cs);
            conn.Open();
            Console.WriteLine("MySQL version : {0}", conn.ServerVersion);
            Console.ReadKey(); 

        }
        catch (MySqlException ex)
        {
            Console.WriteLine("Error: {0}", ex.ToString());

        }
     
    }
}
```

### Classes and Methods
По-ум. методы с типом **private**
```c
using System;
 class Programm
    {
        static void Main()
        {
            Class1 c = new Class1();
            c.Talk();

            // Console.WriteLine(c.Area());
        }
    }
 

    class Class1
    {
        public void Talk()
        {
            Console.WriteLine("Heloo");
        }
    }
```

### Namespaces
###### Main.cs
```c
using System;
using App.Models;
namespace App
{
    class Programm
    {
        static void Main()
        {
            Class1 c = new Class1();
            c.Talk();
            Console.ReadKey();

           
        }
    }
}
```
###### Class.cs
```c
using System;
namespace App.Models
{
    class Class1
    {
        public void Talk()
        {
            Console.WriteLine("Heloo");
        }
    }
}
```


