import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const { id }= useParams();
    useEffect(() =>{
        async function getMovieDetail(){
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6735a4f592fdecc2695f92ab263f72f4&language=ko-KO`);
            const data = await response.json();
            console.log(data);
        }
        getMovieDetail();
    },[])
    return <h1>Detail</h1>
}

export default Detail;