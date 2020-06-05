import React, { Component } from 'react';
import axios from "axios";


class MoviePoster extends Component {

    
state = {
    moviePosterSrc:'img',
    movieTitle:'title',
    date:'pubDate',
    mvDirector:'director',
    mvActor:'actor',
    mvUserRating:0,
    mvLink:'link',
    mvGrade:'grade'
}

getMoviePoster = async () => {

    let title =this.props.movieTitle;   
    let grade=this.props.movieGrage;

    const moviesPoster=await axios.get("http://172.30.1.57:3001/search",{
    params:{
        query:title
    }
    });

    
    var movieData=moviesPoster.data.items;
    console.log(movieData[0]);
    
    this.setState({
        moviePosterSrc:movieData[0].image,
        movieTitle:movieData[0].title,
        date:movieData[0].pubDate,
        mvDirector:movieData[0].director,
        mvActor:movieData[0].actor,
        mvUserRating:parseFloat(movieData[0].userRating),
        mvLink:movieData[0].link,
        mvGrade:grade
    });
    

}

componentDidMount(){
        this.getMoviePoster();
}

render(){
   

    const {moviePosterSrc,movieTitle,date,mvDirector,mvActor,mvUserRating,mvLink,mvGrade} = this.state;
    let title=movieTitle.replace(/(<([^>]+)>)/ig," ");
    let Director=mvDirector.replace("|","");
    let Actor=mvActor.replace(/\|/g,",");
        Actor=Actor.slice(0,-1);
 
    return(
        <div className="movieData">
            <img src={moviePosterSrc} alt={movieTitle}/>     
            <div className="movieInnerData">
                <h4 className="moveiGrade">{mvGrade}위</h4>
                <h3 className="movieTitle">{title}</h3>
                <h2 className="movieRating">{mvUserRating}</h2>
                <h5 className="movieYear"> {date}</h5>
                <h5 className="movieDirector">Director | {Director}</h5>
                <h5 className="movieActor">Actor | {Actor}</h5>
                <h5 className="movieLink"><a href={mvLink}>영화 자세히보기</a></h5>
            </div>
        </div>
    );
}


}

export default MoviePoster;