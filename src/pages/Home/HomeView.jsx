import { useState, useEffect } from 'react';
import { fechTrendingMovies } from 'helpers/helpers';
import { TrendingList } from 'components/TrendingList/TrendingList';

export default function HomeView() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fechTrendingMovies().then(data => setTrendingMovies(data));
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      <TrendingList trendingMovies={trendingMovies} />
    </main>
  );
}
