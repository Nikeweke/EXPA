## Android snippets
###### Содержание 

* Url address to make models - http://www.jsonschema2pojo.org/
* ApiClient.java
* ApiInterface.java


--- 

#### ApiClient.java
```java
public class ApiClient {
    // api adresses
    public static final String KUNA_URL = "https://kuna.io/api/v2/";
    public static final String TEST_URL = "http://foodcontrol.club:3000/";

    // retrofit instance
    public static Retrofit retrofit = null;


    /**
     *  Возвращает экземпляр Retrofit на котором потом можно вызвать методы из интерефейсов (API)
     *  @param api_name название API
     *  @return retrofit
     */
    public static Retrofit getApiClient(String api_name){
//        if(retrofit == null){

        String BASE_URL;

        switch (api_name) {
            case "kuna":  BASE_URL = KUNA_URL;
                break;
            case "test":  BASE_URL = TEST_URL;
                break;
            default: BASE_URL = TEST_URL;
                break;
        }

        retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
//        }

        return retrofit;
    }


    /**
     *  Получить экземплям класса готовый для работы с Kuna
     *
     * @return Retrofit
     */
    public static Retrofit getKunaClient(){
        return getApiClient("kuna");
    }


    /**
     *  Получить экземплям класса готовый для работы с Test
     *
     * @return Retrofit
     */
    public static Retrofit getTestClient(){
        return getApiClient("test");
    }
}
```

#### ApiInterface.java

```java
 // Последние данные по рынку
    @GET("tickers/{market}")                                        // Это лишь кусок адреса. Базовый адрес находиться в KunaClient
    Call <Currency> getCurrency(@Path("market") String market);      // Тут мы пишем метод который будет соовтествоовать запросу.
   // <Currency> это то что мы ждем в ответ, это распарсит данные в соотвествии с моделью.

    // История торгов
    @GET("trades")
    Call <List<Trades>> getTradesHistory(@Query("market") String market); // @Query добавить к запросу: "?market={market}"

    // Биржевой стакан
   @GET("order_book")
    Call <OrderBook> getOrderBook(@Query("market") String market);   // @Query добавить к запросу: "?market={market}"
```