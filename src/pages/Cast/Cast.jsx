import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fechMovieCredits } from 'helpers/helpers';

export default function Cast() {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    fechMovieCredits(Number(movieId))
      .then(data => {
        setCast(data.cast.slice(0, 5));
      })
      .catch(console.log);
  }, [movieId]);

  return (
    <div>
      {cast && (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt=""
                  width="100"
                />
              </div>
              <p>{actor.name}</p>
              <p>{`Caracter: ${actor.character}`}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
