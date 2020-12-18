alert('funziona');

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
