import Home from './pages/Home.jsx';
import Directors from './pages/Directors.jsx';
import Actors from './pages/Actors.jsx';
import Movie from './pages/Movie.jsx';
import ErrorPage from './pages/Errorpage.jsx';

const routes = [
   { path: '/', element: <Home />},
   { path: '/directors', element: <Directors />},
   { path: '/actors', element: <Actors />},
   { path: '/movie/:id', element: <Movie />},
   { path: '*', element: <ErrorPage />},
  ];

export default routes;

