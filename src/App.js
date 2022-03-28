import { useState, useEffect } from 'react';
import Test from './components/Test.js';
import Movie from './components/Movie.js';
import './App.css';

const App = () => {
    const [myVar, setMyVar] = useState('Hello World');
    const [movies, setMovies] = useState([]);

    function fetchMoviesHandler() {
        console.log("fetchMovies logged");
        fetch('http://swapi.dev/api/films/').then(response => {
            console.log("Response");
            console.log(response);
            return response.json();
        }).then(data => {
            console.log("Data");
            console.log(data);
            setMovies(data.results);
        });
    }


    useEffect(() => {
        console.log('useEffect');
        fetchMoviesHandler();
    }, [myVar]);

    const onClickHandler = () => {
        setMyVar('Hello World updated');
        setMyVar((prevState) => {
            return prevState + ' updated';
        })
    };

    const childToParentUpdater = (data) => {
        document.title = data.title;
        console.log(" ChildToParent", data);
    }

    return (
        <div className="App">
            <button onClick={onClickHandler}>Click Mec</button>
            {myVar}
            {movies.map((movie) => {
                console.log(movie);
                return <Movie myTitle={movie.title} myId={movie.episode_id}  />;
            })}
            <Test myProp='hello' />
            {[1,2,3,4]}
        </div>
    );
}

export default App;
