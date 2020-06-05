import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie";
import axios from "axios";
import HeaderNav from "./headerNav";

class App extends Component {

  state = {
    isLoding : true,
    movies:[]
  }

  getMovies = async () => {

    try {

      const listData=await axios.get("http://172.30.1.57:3001/movie");
      console.log(listData.data.data); //api에서 얻은 무비 리스트를 state안에 넣어야함,
      // console.log(moviesPoster);
      this.setState({
            movies:listData.data.data,
            isLoding:false
          });
      } catch (error) {
        console.log(error);
      }  
   
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){

    const { isLoding, movies } = this.state;
    return(
        <div className="container">
            <HeaderNav></HeaderNav>
            { isLoding ? (<div className="loader">
                          <span className="loader_text">Loading.....</span>
                        </div>
                    ) : ( 
                      <div className="movies">
                          {movies.map(movieList => (
                              <Movie	key={movieList.rank} date={movieList.temporal} title={movieList.movieNm} grade={movieList.rank} />
                          ))}
                      </div>  
                        
            )}
            
         
         
        </div>

    );//end of return
  }

}

export default App;
