import React, { useState, useEffect } from "react";
import "./App.css";
import { Search } from 'react-ionicons';
import Navbar from "./Navbar";
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = ()=>{
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const serachmovie = async(title)=>{
    const req = await fetch(`${API_URL}&s=${title}`)
    const data = await req.json()
    setMovies(data.Search);
    console.log(data.Search);
  }
  useEffect(() => {
   serachmovie(films[rand].name)
   console.log(rand);
   console.log(films[rand].name);
  }, [])
  const rand = Math.floor(Math.random() * 9)
  const films = [
    {
      name: "spider man"
    },
    {
      name : "batman"
    },
    {
      name : "office"
    },
    {
      name : "drive"
    },
    {
      name : "taxi"
    },
    {
      name : "fight club"
    },
    {
      name : "who am i"
    },
    {
      name : "mr robot"
    },
    {
      name : "breaking bad"
    },
    {
      name : "mr nobody"
    }
  ]
  const backup = [
    { 
      Title: "Fight Club",
      Poster: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
      Type: "movie",
      Year: "1999",
    },{ 
      Title: "Superhero Fight Club",
      Poster: "https://m.media-amazon.com/images/M/MV5BYzZjZDE1NTgtMTc4Yy00YzYxLWE1ZTItZjAzNzViOWFlNGNiXkEyXkFqcGdeQXVyMjU0OTAwMDc@._V1_SX300.jpg",
      Type: "movie",
      Year: "2015",
    },{ 
      Title: "Fight Club: Members Only",
      Poster: "https://m.media-amazon.com/images/M/MV5BNWU5ZjA1OTQtMGE1MS00NWU3LThmYTEtMTI2ZjlhNzYxZjU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      Type: "movie",
      Year: "2006",
    },{ 
      Title: "Superhero Fight Club 2.0",
      Poster: "https://m.media-amazon.com/images/M/MV5BYTE3MGYxYzAtYzVhZi00NWIxLWFkNmQtMDBhOTZmZWI4MDU1XkEyXkFqcGdeQXVyNDA5ODU0NDg@._V1_SX300.jpg",
      Type: "movie",
      Year: "2016",
    },{ 
      Title: "Zombie Fight Club",
      Poster: "https://m.media-amazon.com/images/M/MV5BYmY4YmE2NGUtNmJkOS00ZjFlLTg2NDYtZjdiYjRiZjdiZmE3XkEyXkFqcGdeQXVyMjAyNTEwOQ@@._V1_SX300.jpg",
      Type: "movie",
      Year: "2014",
    },{ 
      Title: "Jurassic Fight Club",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjEyMDY1MDg5OF5BMl5BanBnXkFtZTcwNjYyMTk3MQ@@._V1_SX300.jpg",
      Type: "series",
      Year: "2008",
    },
    { 
      Title: "Fight Club",
      Poster: "https://m.media-amazon.com/images/M/MV5BN2MyOGJiMzAtODEzYi00OWEyLTlkNzQtZDYzOGI5OGEzNmRlXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg",
      Type: "game",
      Year: "2004",
    },
  ]  
  const Box = ({ mov: { imdbID, Year, Poster, Title, Type } }) =>{
    return(
      <div className="box">
        <div className="pic">
          <img src={Poster !== "N/A" ? Poster : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"} alt="pic movie" />
        </div>
        <div className="cover"></div>
        <div className="yaer">
          <span>{Year}</span>
        </div>
        <div className="category">
          <h3>{Type}</h3>
        </div>
        <div className="name">
          <h1>{Title}</h1>
        </div>
        </div>
    )
  }
  const [filter, setfilter] = useState("all")
  const taghir = () =>{
    if (document.getElementById("filter").value == "movie"){
      setfilter("movie")
  }else if(document.getElementById("filter").value == "game"){
    setfilter("game")
  }else if(document.getElementById("filter").value == "series"){
    setfilter("series")
  }else if(document.getElementById("filter").value == "all"){
    setfilter("all")
  }
  
  }
  
  return(
    <>
    <div className="main">
      <Navbar />
      <div className="head">
        <h1>movieland</h1>
      </div>
      <div className="searchbox">
        <input type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies"
        />
        <div className="icon">
        <Search 
        color="#eed0b9"
        height="35px"
        width="35px"
        onClick={() => serachmovie(searchTerm)}
        />
        <select id="filter" onChange={taghir}>
        <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
          <option value="syear">Sort by year</option>
        </select>
        </div>
      </div>
      <div className="boxs">
        {
          backup.length > 0 ? (
            backup.map((mov)=>{
              if (filter == "all") {
                return(
                  <>
                  <Box mov={mov}/>
                  </>
                )
              } else if(filter == "movie") {
                if(mov.Type == "movie"){
                  console.log(window.innerWidth)
                  return(
                    <>
                    <Box mov={mov}/>
                    </>
                  )
                }
              }else if(filter == "series") {
                if(mov.Type == "series"){
                  return(
                    <>
                    <Box mov={mov}/>
                    </>
                  )
                }
              }else if(filter == "game") {
                if(mov.Type == "game"){
                  if(movies.length <= 0){
                    return(
                      <h1>no moive found</h1>
                    )
                  }else{
                    return(
                      <>
                      <Box mov={mov}/>
                      </>
                    )
                  }
                }
              }
              
            })
          ) : (
            <h1>no moive found</h1>
          )
        }
      </div>
    </div>
    </>
  )
}

export default App;