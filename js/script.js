/*
Poster:
L'API ci restituirà url relativo dell'immagine, come prefisso aggiungiamo:
https://image.tmdb.org/t/p/w220_and_h330_face/ (formato: 220px X 330px)
*/

var app = new Vue(
  {
    el: '#root', 
    data: {
    },
    methods: {

    },
    mounted: function() {

      var self = this;

      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( function(keiByGet) {

      });
    },
  },
);
