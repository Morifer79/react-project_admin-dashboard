import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <div>HOME PAGE</div>
      <NavLink to={'/login'}>to login page</NavLink>
    </>
  );
}
