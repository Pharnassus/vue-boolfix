// "results": [
//   {
//     "adult": false,
//     "backdrop_path": "/fq3wyOs1RHyz2yfzsb4sck7aWRG.jpg",
//     "genre_ids": [
//         12,
//         35,
//         878,
//         10751
//     ],
//     "id": 105,
//     "original_language": "en",
//     "original_title": "Back to the Future",
//     "overview": "Marty McFly è stato catapultato per errore nel 1955, grazie alla macchina del tempo ideata dal suo amico scienziato Doc. Non avendo più \"carburante\" per poter tornare nel futuro si rivolge alla versione più giovane di Doc, che nonostante l'incredulità iniziale si farà in quattro per aiutarlo. Ma nel 1955 non è solo Doc ad essere più giovane, Marty infatti si imbatte casualmente nei suoi genitori, all'epoca teenager, ma l'incontro aggiungerà altri problemi.",
//     "popularity": 49.791,
//     "poster_path": "/AkmUoSHkxW9txpzZ52gCcWweEkE.jpg",
//     "release_date": "1985-07-03",
//     "title": "Ritorno al futuro",
//     "video": false,
//     "vote_average": 8.3,
//     "vote_count": 14221
//   },
// ]

/* https://api.themoviedb.org/3/search/movie?
api_key=bd77a6f388cd1f04e0f903f3b8a99556&
query=ritorno+al+futuro&
language=it-IT */

var app = new Vue(
  {
    el: '#root',
    data: {
      cardFilms: [],
      cardTvSeries: [],
      filmIndex: 0,
      searchFilm: null,
    },
    methods: {

      filterFilms: function() {

        //for each su film
        this.cardFilms.forEach(
          (item, i) => {

            item.visible = false;
            item.image = 'https://image.tmdb.org/t/p/w220_and_h330_face';
            item.titleAll = '@';

            if (item.title.toLowerCase().includes(this.searchFilm.toLowerCase()) || item.titleAll.toLowerCase().includes(this.searchFilm.toLowerCase())) {

              //sezione ricerca film
              item.visible = true; /*mi ha creato una nuova propr nell'array di oggetti cardFilms*/

              //sezione stelle
              let numeroStelle = item.vote_average;
              let restoVoto = 0;

              if (numeroStelle % 2 == 0) {
                numeroStelle = (numeroStelle / 2);
                item.vote_average = numeroStelle;
              } else {
                restoVoto = (numeroStelle % 2) / 2;
                numeroStelle = (numeroStelle / 2) - restoVoto;
                item.vote_average = numeroStelle;
              }

              //sezione lingua(bandiere)
              let bandiera = '';
              if (item.original_language == 'it') {
                item.bandiera = 'img/ita.webp';
              } else if (item.original_language == 'en') {
                item.bandiera = 'img/usa.webp';
              } else {
                item.bandiera = 'img/all.svg';
              }
              // console.log(item.bandiera);
            }
          }
        );
        this.searchFilm = '';
        console.log(this.cardFilms);


        //for each su serie tv
        this.cardTvSeries.forEach(
          (item, i) => {

            item.title = item.name;
            item.visible = false;
            item.image = 'https://image.tmdb.org/t/p/w220_and_h330_face';
            item.titleAll = '@';


            if (item.title.toLowerCase().includes(this.searchFilm.toLowerCase()) || item.titleAll.toLowerCase().includes(this.searchFilm.toLowerCase())) {

              //sezione ricerca telefilm
              item.visible = true; /*mi ha creato una nuova propr nell'array di oggetti cardFilms*/

              //sezione stelle
              let numeroStelle = item.vote_average;
              let restoVoto = 0;

              if (numeroStelle % 2 == 0) {
                numeroStelle = (numeroStelle / 2);
                item.vote_average = numeroStelle;
              } else {
                restoVoto = (numeroStelle % 2) / 2;
                numeroStelle = (numeroStelle / 2) - restoVoto;
                item.vote_average = numeroStelle;
              }

              //sezione lingua(bandiere)
              let bandiera = '';
              if (item.original_language == 'it') {
                item.bandiera = 'img/ita.webp';
              } else if (item.original_language == 'en') {
                item.bandiera = 'img/usa.webp';
              } else {
                item.bandiera = 'img/all.svg';
              }
            }
          }
        );

        this.searchFilm = '';
        console.log(this.cardTvSeries);
      },

      //pulisci pagina per nuova ricerca
      clearPage: function() {
        this.cardFilms = null;
        this.cardTvSeries = null;


        var self = this;

        //films
        axios
          .get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: 'bd77a6f388cd1f04e0f903f3b8a99556',
              query: 'marvel',
              language: 'it-IT'
            }
          })
          .then( function(element) {
            self.cardFilms = element.data.results;

        });

        //telefilms
        axios
          .get('https://api.themoviedb.org/3/search/tv', {
            params: {
              api_key: 'bd77a6f388cd1f04e0f903f3b8a99556',
              query: 'marvel',
              language: 'it-IT'
            }
          })
          .then( function(element) {
            self.cardTvSeries = element.data.results;

        });

      },
    },

    mounted: function() {

      var self = this;

      //carica film
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: 'bd77a6f388cd1f04e0f903f3b8a99556',
            query: 'marvel',
            language: 'it-IT'
          }
        })
        .then( function(element) {
          self.cardFilms = element.data.results;

      });

      //carica telefim
      axios
        .get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: 'bd77a6f388cd1f04e0f903f3b8a99556',
            query: 'marvel',
            language: 'it-IT'
          }
        })
        .then( function(element) {
          self.cardTvSeries = element.data.results;

      });
    },
  },
);
