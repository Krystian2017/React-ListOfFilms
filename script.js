var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    src: 'https://i.ytimg.com/vi/pIrOAyXIjak/maxresdefault.jpg' 
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: 'https://vignette.wikia.nocookie.net/tlk/images/9/98/Kr%C3%B3l_Lew_wszystkie_postacie.png/revision/latest?cb=20160722192416&path-prefix=pl' 
  },
  {
    id: 3,
    title: 'Gladiator',
    desc: 'Film o rzymskim gladiatorze',
    src: 'https://d15v4l58k2n80w.cloudfront.net/file/1396975600/46808334754/width=1280/height=720/format=-1/fit=crop/crop=0x0+1500x844/rev=2/t=421643/e=never/k=e7932809/gLADIATOR+IN+CONCERT.jpg' 
  },
  {
    id: 4,
    title: 'Deadpool',
    desc: 'Film o nieśmiertelnym superbohaterze',
    src: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/02/08/Pictures/_33b2ca74-0cc1-11e8-ba67-a8387f729390.jpeg'
  },
  {
    id: 5,
    title: 'Avangers',
    desc: 'Film o superbohaterach',
    src: 'https://www.screengeek.net/wp-content/uploads/2017/04/avengers-4.png'
  }
];

var MovieTitle = React.createClass ({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement("h2", {}, this.props.title)
    )
  }
});

var MovieDescription = React.createClass ({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement("p", {}, this.props.desc)
    )
  }
});

var MoviePoster = React.createClass ({
  propTypes: {
    poster: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement("img", {src: this.props.poster, width: 200})
    )
  }
});

var Movie = React.createClass ({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement("li", {key: this.props.movie.id},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc}),
        React.createElement(MoviePoster, {poster: this.props.movie.src})
      )
    )
  },
});

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },
  render: function() {
    var moviesElements = this.props.movies.map(function(movie) {
      return React.createElement(Movie, {key: movie.id, movie: movie})
    });
    return (React.createElement("ul", {}, moviesElements))
  },
});

var element = React.createElement("div", {},
  React.createElement("h1", {}, "Lista filmów"),
  React.createElement(MovieList, {movies: movies})
);

ReactDOM.render(element, document.getElementById('app'));