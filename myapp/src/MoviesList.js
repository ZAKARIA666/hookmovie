import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies}) => {
  return (
    <div>
        {movies.map( movie => <MovieCard movie= {movie}/> )}
    </div>
  )

}

export default MoviesList
