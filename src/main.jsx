import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import PokemonInfo from './routes/PokemonInfo.jsx';
import ErrorPage from './components/Error-page.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Card from './components/Card.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Card />
      },
      {
        path: "/:pokemonName",
        element: <PokemonInfo/>,
      }
    ]
  },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
