import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from 'components/LayOut/LayOut.module.css';

export default function LayOut() {
  return (
    <>
      <header className={css.Header}>
        <nav className={css.Navigation}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.ActiveLink : css.Link)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? css.ActiveLink : css.Link)}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
