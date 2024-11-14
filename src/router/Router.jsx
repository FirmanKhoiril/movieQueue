import Favorite from "../pages/Favorite";
import About from "../pages/About";
import SearchResult from "../pages/SearchResult";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import { createBrowserRouter } from 'react-router-dom';
import App from "../App.jsx";
import Error from "../components/layout/Error.jsx";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/favorite",
          element: <Favorite />,
        },
        {
          path: "/search/:movie",
          element: <SearchResult />,
        },
        {
          path: "/movie-detail/:id",
          element: <MovieDetail />,
        },
      ],
    },
  ]);

export default Router