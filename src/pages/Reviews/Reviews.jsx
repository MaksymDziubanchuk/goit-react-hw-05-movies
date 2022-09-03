import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fechMovieReview } from 'helpers/helpers';

export default function Reviews() {
  const [reviews, setReviews] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    fechMovieReview(Number(movieId))
      .then(data => {
        setReviews(data.results);
      })
      .catch(console.log);
  }, [movieId]);
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((item, index) => (
            <li key={index}>
              <h2>{`Author: ${item.author}`}</h2>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </div>
  );
}
