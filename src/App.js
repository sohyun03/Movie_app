import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";


class App extends React.Component{
  state = {
    isLoading : true,
    movie:[]
  };

  getMovies = async() =>{
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movie: movies, isLoading: false});
  }
  //처음에 render 하면 가장 먼저 호출되는 life cycle method
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movie } = this.state;
    return (
      <section className="container">
      {isLoading ? (
        <div className="loader">
        <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
        {movie.map(movie => (
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
      //위와 같이 object를 풀어줄 때 map함수를 사용하고, 또, jsx에서는 props를 통해서 값을 전달합니다. key는 표현되지 않지만 필수props입니다.
    );
  }
}

export default App;

// function Food({name,number,rating}) { //App함수에 Food에서 보낸것을 props라는 인자로 받음
//   //props object 내부에는 fav가 있다. fav만 받고싶으면 {fav}로 쓴다. props를 {fav}로 대체가능
//   return(
//     <div>
//     <h2>{name} 쪼아  값은{number}</h2>
//     <h3>{rating}/5.0</h3>
//     </div>
//   );
// }
//
// Food.propTypes ={
//   name: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired,
//   rating: PropTypes.number.isRequired
// };
//
// //react 안에 모든 elements은 유일한 키를 가지고 있어야 한다.
// const foodLike=[
//   {id: 1, name: "Kimchi", value:1, rating:5},
//   {id: 2, name: "Ramen", value:2, rating:4.9},
//   {id: 3, name: "Ramen", value:3, rating:4.8}
// ];
//
// function App() {
//   return (
//     //<Food fav="Kimchi"/> 이 뜻은 food component에 fav라는 이름의 property를 Kimchi라는 value로 줌
//     <div className="App">
//
//     {foodLike.map(dish => (
//       <Food key={dish.id} name={dish.name} number={dish.value} rating={dish.rating}/>
//     ))}
//
//     </div>
//
//   );
// }





// //직접 state를 변경하지 말고 state를 set해야함. 따라서 this.state.count =1 는 안됨(render를 refresh안함)
// // setState를 호출하면 react는 state를 refresh하고 render function을 호출함.
//
// //onClick에서 this.add() 라고 한다면 즉시 실행이됨. ()없으면 클릭할때 실행
// class App extends React.Component{
//   state = {
//     count :0
//   };
//   add=()=>{
//     this.setState(current => ({ count: current.count + 1 }));
//   };
//   minus=()=>{
//     this.setState({ count:-1 });
//   };
//   render(){
//     return (
//       <div>
//         <h1>숫자는: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }
