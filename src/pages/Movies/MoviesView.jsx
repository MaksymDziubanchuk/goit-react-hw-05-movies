import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fechQueryMovies } from 'helpers/helpers';

export default function MoviesView() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('query');
  const [query, setQuery] = useState(urlQuery ?? '');

  const handleFormSubmit = value => {
    if (query !== value) {
      setQuery(value);
      setSearchParams(`query=${value}`);
    }
  };

  useEffect(() => {
    if (query !== '') {
      fechQueryMovies(query).then(setMovies).catch(console.log);
    }
    if (query === '') {
      setMovies([]);
    }
  }, [query]);

  useEffect(() => {
    if (!urlQuery) {
      setQuery('');
    }
  }, [urlQuery]);

  return (
    <main>
      <SearchForm onSubmit={handleFormSubmit} />

      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
