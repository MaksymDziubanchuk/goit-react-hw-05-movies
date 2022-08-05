import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import LayOut from 'components/LayOut/LayOut';

const HomeView = lazy(() =>
  import('pages/Home/HomeView' /* webpackChunkName: "HomeView" */)
);
const NotFound = lazy(() =>
  import('pages/NotFound/NotFound' /* webpackChunkName: "NotFound" */)
);
const MovieItem = lazy(() =>
  import('pages/MovieItem/MovieItem' /* webpackChunkName: "MovieItem" */)
);
const Cast = lazy(() =>
  import('pages/Cast/Cast' /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import('pages/Reviews/Reviews' /* webpackChunkName: "Reviews" */)
);
const MoviesView = lazy(() =>
  import('pages/Movies/MoviesView' /* webpackChunkName: "MoviesView" */)
);

// import HomeView from 'pages/Home/HomeView';
// import NotFound from 'pages/NotFound/NotFound';
// import MovieItem from 'pages/MovieItem/MovieItem';
// import Cast from 'pages/Cast/Cast';
// import Reviews from 'pages/Reviews/Reviews';
// import MoviesView from 'pages/Movies/MoviesView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomeView />} />
        <Route path="movies" element={<MoviesView />} />
        <Route path="movies/:movieId" element={<MovieItem />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
