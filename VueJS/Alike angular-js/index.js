new Vue({

  // тот элемент в котором можно юзать переменные, ф-ции и т.д.
  el: '#app',

  // переменные
  data: {
     // changing var - section
     penguins: 5,
     pengui_name: '',

     // v-bind - section
     website: 'http://foodcontrol.club/',
     anchor: ' <a href="http://foodcontrol.club/">Anchor - created with v-html</a>',

  },



  // функции
  methods: {

     // ADD some penguins
     addPenguin: function(){
        this.penguins++
     },

      // Remove some penguins
     rmPenguin: function(){
        this.penguins--
     },





  }



})
