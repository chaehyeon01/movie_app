import React from 'react';
import MoviesPoster from "./MoviePoster";


function Movie({title,grade,date,mvCode}){
    console.log(title);
    return (
        <div className="movie">
            <MoviesPoster movieTitle={title} date={date} mvCode={mvCode} movieGrage={grade} />
        </div> 
    );
}

export default Movie;