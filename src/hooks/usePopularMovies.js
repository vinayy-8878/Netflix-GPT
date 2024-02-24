// import { API_OPTIONS } from "../utils/Constants";
// import { addNowPlayingMovies } from "../utils/moviesSlice";
import {API_OPTIONS} from '../utils/Constants'
import {addPopularMovies} from '../utils/moviesSlice'
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const usePopuplarMovies = () => {
    const dispatch = useDispatch();

    const getPopuplarMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopuplarMovies();
    }, []);
};

export default usePopuplarMovies;
