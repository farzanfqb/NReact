import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from "./Component/About"
import Error from './Component/Error';
import Body from './Component/Body';
import Contact from './Component/Contact';
import RestaurantMenu from './Component/RestaurantMenu';
import ProfileClass from './Component/ProfileClass';
import Profile from './Component/Profile';
import { Shimmer } from './Component/Shimmer';

const Instamart = React.lazy(() => import("./Component/Instamart"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: (
              <>
                <ProfileClass />
                <Profile />
              </>
            ),
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
      }
    ]

  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

