import React from "react"

const Movie = (props) => {
    const { myTitle, title } = props;
    const { myId, id } = props;
    
    return <div>Movie:
        <span> {myId}</span>
        <span> {myTitle}</span>
    </div>;
}

export default Movie;