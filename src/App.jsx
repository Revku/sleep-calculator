import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Home from 'src/pages/Home';
import Result from 'src/pages/Result';
import Cycles from 'src/pages/Cycles';
import About from 'src/pages/About';

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
    path: '/o-aplikacji',
    element: <About />,
  },
  {
    path: '/wyniki/:mode/:hours/:minutes',
    element: <Result />,
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
