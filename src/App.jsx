import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Home from 'src/pages/Home';

// Google Analytics initialization
ReactGA.initialize('G-3NQ8HBSZD6');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
