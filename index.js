var books = [
  {
    title: 'The Three-Body Problem',
    winner: ['Hugo'],
    year: '2015',
    author_first: 'Cixin',
    author_last: 'Liu',
    publisher: 'Tor Books',
    amazonLink: 'http://www.amazon.com/Three-Body-Problem-Cixin-Liu/dp/0765382032/ref=sr_1_1?ie=UTF8&qid=1454441436&sr=8-1&keywords=the+three-body+problem'
  },
  {
    title: 'Ancillary Justice',
    winner: ['Hugo', 'Nebula'],
    year: '2014',
    author_first: 'Ann',
    author_last: 'Leckie',
    publisher: 'Orbit Books',
    amazonLink: 'http://www.amazon.com/Ancillary-Justice-Imperial-Radch-Leckie/dp/031624662X/ref=sr_1_1?s=books&ie=UTF8&qid=1454441537&sr=1-1&keywords=ancillary+justice'
  },
  {
    title: 'Redshirts',
    winner: ['Hugo'],
    year: '2013',
    author_first: 'John',
    author_last: 'Scalzi',
    publisher: 'Tor Books',
    amazonLink: 'http://www.amazon.com/Redshirts-Novel-Three-John-Scalzi/dp/0765334798/ref=sr_1_1?s=books&ie=UTF8&qid=1454441554&sr=1-1&keywords=redshirts'
  },
  {
    title: 'Among Others',
    winner: ['Hugo', 'Nebula'],
    year: '2012',
    author_first: 'Jo',
    author_last: 'Walton',
    publisher: 'Tor Books',
    amazonLink: 'http://www.amazon.com/Among-Others-Hugo-Award-Winner/dp/0765331721/ref=sr_1_1?s=books&ie=UTF8&qid=1454441571&sr=1-1&keywords=Among+Others'
  },
  {
    title: 'All Clear',
    winner: ['Hugo','Nebula'],
    year: '2011',
    author_first: 'Connie',
    author_last: 'Willis',
    publisher: 'Spectra Books',
    amazonLink: 'http://www.amazon.com/All-Clear-Connie-Willis/dp/0553592882/ref=sr_1_2?s=books&ie=UTF8&qid=1454441589&sr=1-2&keywords=Blackout%2FAll+Clear',
  },
  {
    title: 'Blackout',
    winner: ['Hugo','Nebula'],
    year: '2011',
    author_first: 'Connie',
    author_last: 'Willis',
    publisher: 'Spectra Books',
    amazonLink: 'http://www.amazon.com/Blackout-Connie-Willis/dp/0345519833/ref=sr_1_1?s=books&ie=UTF8&qid=1454441589&sr=1-1&keywords=Blackout%2FAll+Clear',
  },
  {
    title: 'The Windup Girl',
    winner: ['Hugo', 'Nebula'],
    year: '2010',
    author_first: 'Paolo',
    author_last: 'Bacigalupi',
    publisher: 'Night Shade Books',
    amazonLink: 'http://www.amazon.com/Windup-Girl-Paolo-Bacigalupi/dp/1597808210/ref=sr_1_1?s=books&ie=UTF8&qid=1454441675&sr=1-1&keywords=The+Windup+Girl',
  },
  {
    title: 'The City & The City',
    winner: ['Hugo'],
    year: '2010',
    author_first: 'China',
    author_last: 'Mi'+String.fromCharCode(233)+'ville',
    publisher: 'Del Rey Books',
    amazonLink: 'http://www.amazon.com/City-Random-House-Readers-Circle/dp/034549752X/ref=sr_1_1?s=books&ie=UTF8&qid=1454441707&sr=1-1&keywords=The+City+and+The+City',
  },
  {
    title: 'The Graveyard Book',
    winner: ['Hugo'],
    year: '2009',
    author_first: 'Neil',
    author_last: 'Gaiman',
    publisher: 'HarperCollins',
    amazonLink: 'http://www.amazon.com/Graveyard-Book-Neil-Gaiman/dp/0060530944/ref=sr_1_1?s=books&ie=UTF8&qid=1454441728&sr=1-1&keywords=The+Graveyard+Book',
  },
  {
    title: 'The Yiddish Policemen\'s Union',
    winner: ['Hugo', 'Nebula'],
    year: '2008',
    author_first: 'Michael',
    author_last: 'Chabon',
    publisher: 'HarperCollins',
    amazonLink: 'http://www.amazon.com/Yiddish-Policemens-Union-Novel-P-S/dp/0007149832/ref=sr_1_1?s=books&ie=UTF8&qid=1454441753&sr=1-1&keywords=the+yiddish+policemen%27s+union',
  },
  {
    title: 'Rainbows End',
    winner: ['Hugo'],
    year: '2007',
    author_first: 'Vernor',
    author_last: 'Vinge',
    publisher: 'Tor Books',
    amazonLink: 'http://www.amazon.com/Rainbows-End-Vernor-Vinge/dp/0812536363/ref=sr_1_1?s=books&ie=UTF8&qid=1454441769&sr=1-1&keywords=rainbow%27s+end',
  },
  {
    title: 'Spin',
    winner: ['Hugo'],
    year: '2006',
    author_first: 'Robert Charles',
    author_last: 'Wilson',
    publisher: 'Tor Books',
    amazonLink: 'http://www.amazon.com/Spin-Robert-Charles-Wilson/dp/076534825X/ref=sr_1_1?s=books&ie=UTF8&qid=1454441786&sr=1-1&keywords=spin+robert+charles+wilson',
  },
  {
    title: 'Annihilation',
    winner: ['Nebula'],
    year: '2015',
    author_first: 'Jeff',
    author_last: 'VanderMeer',
    publisher: 'Farrar, Straus, and Giroux',
    amazonLink: 'http://www.amazon.com/Annihilation-Novel-Southern-Reach-Trilogy/dp/0374104093/ref=sr_1_1?s=books&ie=UTF8&qid=1454441811&sr=1-1&keywords=annihilation+jeff+vandermeer',
  },
  {
    title: '2312',
    winner: ['Nebula'],
    year: '2013',
    author_first: 'Kim Stanley',
    author_last: 'Robinson',
    publisher: 'Orbit Books',
    amazonLink: 'http://www.amazon.com/2312-Kim-Stanley-Robinson/dp/0316098116/ref=sr_1_1?s=books&ie=UTF8&qid=1454441842&sr=1-1&keywords=2312+by+kim+stanley+robinson',
  },
  {
    title: 'Powers',
    winner: ['Nebula'],
    year: '2009',
    author_first: 'Ursula K.',
    author_last: 'Le Guin',
    publisher: 'Harcourt',
    amazonLink: 'http://www.amazon.com/Powers-Annals-Western-Shore-Ursula/dp/0152066748/ref=sr_1_1?s=books&ie=UTF8&qid=1454441859&sr=1-1&keywords=powers+ursula+k.+le+guin',
  },
  {
    title: 'Seeker',
    winner: ['Nebula'],
    year: '2007',
    author_first: 'Jack',
    author_last: 'McDevitt',
    publisher: 'Ace Books',
    amazonLink: 'http://www.amazon.com/Seeker-Jack-McDevitt/dp/0441013759/ref=sr_1_1?s=books&ie=UTF8&qid=1454441880&sr=1-1&keywords=seeker+jack+mcdevitt',
  },
  {
    title: 'Camouflage',
    winner: ['Nebula'],
    year: '2006',
    author_first: 'Joe',
    author_last: 'Haldeman',
    publisher: 'Analog Science Fiction and Fact',
    amazonLink: 'http://www.amazon.com/Camouflage-Joe-Haldeman/dp/0441012523/ref=sr_1_1?s=books&ie=UTF8&qid=1454441905&sr=1-1&keywords=camouflage+joe+haldeman',
  },


]

 module.exports = {
   randomBook: function(){
     return books[Math.floor(Math.random()*books.length)]
   },
   addBook: function(bookObject){
     books.push(bookObject)
   },
   randomDoubleAward: function(){
     function doubleFilter(object){
       if (object.winner.length>1){
         return true;
       }
     }
    var doubleBooks= books.filter(doubleFilter)
    return doubleBooks[Math.floor(Math.random()*doubleBooks.length)]
  },
 }
