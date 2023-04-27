import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const MovieCard = ({movie}) => {
  return (
    <div>
    <div class="movie_card" id="bright">
    <div class="info_section">
      <div class="movie_header">
        <img class="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg" />
        <h1>{movie.title}</h1>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
          
          />
        <h4>2017, David Ayer</h4>
        <span class="minutes">{movie.duration}</span>
        <p class="type">{movie.genre}</p>
      </div>
      <div class="movie_desc">
        <p class="text">
          {movie.description}
        </p>
      </div>
      <div class="movie_social">
        <ul>
          <li><i class="material-icons">share</i></li>
          <li><i class="material-icons"></i></li>
          <li><i class="material-icons">chat_bubble</i></li>
        </ul>
      </div>
    </div>
    <div class="blur_back bright_back"></div>
  </div>
    </div>
  )
}

export default MovieCard
