import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  // Fetch actors data from the API
  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then((data) => setActors(data))
      .catch((error) => console.error('Fetch error:', error)); // Handle errors
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.length === 0 ? ( // Check if there are no actors
          <p>No actors found.</p>
        ) : (
          actors.map((actor) => (
            <article key={actor.name}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        )}
      </main>
    </>
  );
}



export default Actors;
