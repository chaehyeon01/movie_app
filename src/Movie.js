import React from 'react';
import MoviesPoster from "./MoviePoster";


function Movie({title,grade,date}){
    console.log(title);
    return (
        <div className="movie">
            <MoviesPoster movieTitle={title} movieDate={date} movieGrage={grade} />
        </div> 
    );
}

export default Movie;