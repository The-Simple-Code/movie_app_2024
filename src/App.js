import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//Props학습
/*
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} width="300" height="200" />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831-e1645400234347.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyupsal",
    image:
      "https://i.namu.wiki/i/-XLXqPWn5KO-fa2e11kPGiSpgxNbWUWh-DHHDZ0wejerKqypeeK8VS4mZL6DpDQRbNe9y1-gTxRb3VA4ElWsQkBCsPGFwfa67i9kK3biRnR86G5r7jjHMXfxd6ruMKUe_4KL82ilcvJqnUvFc7L1UA.webp",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://i.namu.wiki/i/8XH1rGxN9eCQcz9wXNQSGeFKjRAr26tURQp5jxOTbe4I7OfltUiSPzC0Ei9g14qc9btHWrix8d89NRxQeBdN2qITt_FKNCE6lpbaC5zukOfXfqhgTfkC_dE9zY6hHUBUom8xxVRigGjx4sk9VuOEig.jpg",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Kimbop",
    image:
      "https://homecuisine.co.kr/files/attach/images/140/242/110/78cf4cbedd6ea82034eaa80850bca420.jpg",
    rating: 3.5,
  },
  {
    id: 5,
    name: "Dongas",
    image:
      "https://i.namu.wiki/i/lbuWOW8aqfenSAcMg5DsIzA-GA6nK6kuvgpKnwSOIEAjerUJ1uyYPRrggp4_2WkT5HDJKYYIZjUq8hOSEDRVHQJ0TyVajmG_JPzws23k34stHZ9cN_iNaG2NH13WdM_8cwddTBJUTTu2wZ3FKLCK_g.webp",
    rating: 4.1,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};*/
//state 학습
/*
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  state = { count: 0 };

  up = () => {
    console.log("up");
    this.setState((current) => ({ count: current.count + 1 }));
  };

  down = () => {
    console.log("down");
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.up}>Up</button>
        <button onClick={this.down}>Down</button>
      </div>
    );
  }
}*/
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;
