import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Home from 'src/pages/Home';
import Result from 'src/pages/Result';
import NotFound from 'src/pages/404';
import Cycles from 'src/pages/Cycles';

// Google Analytics initialization
ReactGA.initialize('G-3NQ8HBSZD6');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cykle-snu',
    element: <Cycles />,
  },
  {
    path: '/wyniki/:mode/:hours/:minutes',
    element: <Result />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
