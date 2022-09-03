import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fechMovieDetails } from 'helpers/helpers';
import css from 'pages/MovieItem/MovieItem.module.css';

export default function MovieItem() {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    fechMovieDetails(Number(movieId))
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.log(error);
        navigate(location.state?.from ?? '/');
      });
  }, [movieId, location, navigate]);

  const onGoBack = () => {
    navigate(location.state?.from ?? '/movies');
  };

  const joinGenres = genres => {
    return genres.map(genre => genre.name).join(', ');
  };

  const score = movie ? Math.round((movie.vote_average / 10) * 100) : '';
  const imgSrc = movie
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '';
  const year = movie ? String(movie.release_date).substring(0, 4) : '';

  return (
    <main>
      <section>
        <button type="button" onClick={onGoBack} className={css.Btn}>
          Go back
        </button>
        {movie && (
          <div>
            <div className={css.Card}>
              <div className={css.ImgThumb}>
                <img src={imgSrc} alt="" width="220" />
              </div>

              <div className={css.MovieDescr}>
                <h2>{`${movie.original_title} (${year})`}</h2>
                <span>{`User Score: ${score}%`}</span>
                <h3>Overview</h3>
                <span>{movie.overview}</span>
                <h4>Genres</h4>
                <span>{joinGenres(movie.genres)}</span>
              </div>
            </div>

            <div className={css.Info}>
              <p>Additional information</p>
              <ul>
                <li>
                  <NavLink
                    to="cast"
                    state={{ from: location.state?.from ?? '/movies' }}
                    className={({ isActive }) =>
                      isActive ? css.ActiveLink : css.Link
                    }
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="reviews"
                    state={{ from: location.state?.from ?? '/movies' }}
                    className={({ isActive }) =>
                      isActive ? css.ActiveLink : css.Link
                    }
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>

            <Suspense fallback={<div>Loading subpage...</div>}>
              <Outlet />
            </Suspense>
          </div>
        )}
      </section>
    </main>
  );
}
