import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';
import React ,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Search from './Search';
function App() {
  const [keysearch, setKeysearch] = useState("")
  const [newRate, setNewRate] = useState(1)
const [movies,setMovies] = useState ([
  {
    id: 1,
    title: "Bright",
    image: "https://i.ibb.co/ThPNnzM/blade-runner.jpg",
    description: "More human than human is our motto.",
    genre: ["comedy", "action"],
    rate: '4',
   

},
{
    id: 2,
    title: "Justice League",
    image: "",
    description: "You can't save the world alone.",
    genre: ["romance", "action"],
    rate: '3',
   
},
{
  id: 3,
  title: "Justice League",
  image: "",
  description: "You can't save the world alone.",
  genre: ["romance", "action"],
  rate: '5',
 
},

])
const search=(text)=>{
setKeysearch(text)
}
const setRate=(rate)=>{
  setNewRate(rate)
}
return (
<div className="App">
<Search search={search} setRate={setRate}/>
<MoviesList movies={movies.filter( (movie)=> movie.rate >= newRate && movie.title.toLowerCase().includes(keysearch.trim().toLocaleLowerCase()) )}/>
</div>
);
}
export default App;
