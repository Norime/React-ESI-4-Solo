import React from "react";
import MovieModule from "./Movie.module.css";

const Movie = (props) => {
    //const { myTitle, title } = props;
    //const { myId, id } = props;
    
    //return <div>Movie:
    //    <span> {myId}</span>
    //    <span> {myTitle}</span>
    //</div>;

    return <div className={MovieModule.error}>
        <span> {props.title}</span>
        <span> {props.episode_id}</span>
    </div>;
}

export default Movie;