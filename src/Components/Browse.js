import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/Constants";

const Browse = () => {
  const getNowPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);
    const json=await data.json();
    console.log(json);
  }
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGNjMWUxODIyZDRmNjhmY2NiNmIyNWFjZWJlZWZkYiIsInN1YiI6IjY1ZDg2NDM1YTI4NGViMDE2Mjg3YjgwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.95jPF1KQy7kiKZ_3rrSWKVNhYQ2mE3baE0ZScvxqAjk",
  //   },
  // };

  // const getNowPlayingMovies = async () => {
  //  await fetch(
  //     "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
