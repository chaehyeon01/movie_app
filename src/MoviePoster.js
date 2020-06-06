import React, { Component } from 'react';
import axios from "axios";


class MoviePoster extends Component {

    
// state = {
//     moviePosterSrc:'img',
//     movieTitle:'title',
//     date:'pubDate',
//     mvDirector:'director',
//     mvActor:'actor',
//     mvUserRating:0,
//     mvLink:'link',
//     mvGrade:'grade'
// }
state = {
    moviePosterSrc:'src',
    movieTitle:'title',
    mvGrade:'0',
    mvUserRating:'0',
    date:"2020",
    mvInfoText:"mvText",
    mvGenres:[],
    mvDirector: []
}

getMoviePoster = async () => {

    let title =this.props.movieTitle;
    let grade=this.props.movieGrage;
    let date=this.props.date;
    let mvCode=this.props.mvCode;


    let ID_KEY="194b4125636da8f986cadff856f51a17";
    const moviesPoster=await axios.get("https://api.themoviedb.org/3/search/movie",{
        params:{
            api_key:ID_KEY,
            language:"ko",
            query:title,
            page:"1",
            include_adult:true
        }
    });  


    // console.log(moviesPoster.data.results[0]);

    const key="d7b5c5da82be18f1826b5ea09076df81";
    const moviesInfo=await axios.get("https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",{
        params:{
            key:key,
            movieCd:mvCode
        }
    });  
    
    // console.log(moviesInfo.data.movieInfoResult.movieInfo);
    let movieDri=moviesInfo.data.movieInfoResult.movieInfo.directors[0];
    let moveDirName=[];
    var count=0;
    for (var obKey in movieDri) {
        count++;
        moveDirName[count]=movieDri[obKey];
     }
     

    this.setState({
        moviePosterSrc:moviesPoster.data.results[0].poster_path,
        movieTitle:title,
        mvGrade:grade,
        mvUserRating:moviesPoster.data.results[0].vote_average,
        date:date,
        mvInfoText:moviesPoster.data.results[0].overview,
        mvGenres:moviesInfo.data.movieInfoResult.movieInfo.genres,
        mvDirector:moveDirName
    });

}

componentDidMount(){
        this.getMoviePoster();
}

render(){
   

    const {moviePosterSrc,movieTitle,mvGrade,mvUserRating,date,mvInfoText,mvGenres,mvDirector} = this.state;

 
    return(
        <div className="movieData">
            <img src={"https://image.tmdb.org/t/p/original"+moviePosterSrc} alt="영화" />
                <div className="movieInnerData">
                    <h4 className="moveiGrade">{mvGrade}위</h4>
                    <h5 className="movieGenre"> {mvGenres.map(list => list.genreNm+" ")}</h5>
                    <h3 className="movieTitle">{movieTitle}</h3>
                    <h2 className="movieRating">{mvUserRating}</h2>
                    <h5 className="movieYear"> 개봉 일자 | {date}</h5>
                    <h5 className="movieDirector">감 독 | { mvDirector.map(list => list) }</h5>
                    <h5 className="movieText"> {mvInfoText.slice(0,150)}...</h5>
                    
                 </div>   
        </div>
    );
}


}

export default MoviePoster;