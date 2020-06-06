import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie";
import axios from "axios";
import HeaderNav from "./headerNav";

class App extends Component {

  constructor(pros){
    super(pros);
    this.state = {
      isLoding : true,
      movies:[]
    }
  }
  

  getMovies = async () => {

      const key="d7b5c5da82be18f1826b5ea09076df81";
      const targetDt="20200603"
      let item =[];
      await axios.get("https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",{
            params: {
                          key: key,
                          targetDt:targetDt
                    }
                  }).then(function(response) {
                      item = response.data.boxOfficeResult.dailyBoxOfficeList;
                      console.log(item);
                       
                    }).catch(function(error) {
                      console.log(error);
                    });
  
                    this.setState({
                      movies:item,
                      isLoding:false
                    });
   
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
                              <Movie	key={movieList.rank} date={movieList.openDt} mvCode={movieList.movieCd} title={movieList.movieNm} grade={movieList.rank} />
                          ))}
                      </div>  
                        
            )}
            
         
         
        </div>

    );//end of return
  }

}

export default App;
