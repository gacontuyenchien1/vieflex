import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";

import App from '../App';
// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

const routeObj : RouteObject[] = [
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <div>Movie</div>
      }
    ]
  },
];

// const routeObj: RouteObject[] = [
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Suspense fallback={<Loader />}> <Home /></Suspense>
//       },
//       {
//         path: "/movies/:name/:id",
//         element: <Suspense fallback={<Loader />}><Detail mediaType="movie" /></Suspense>
//       },
//       {
//         path: "/tv-series/:name/:id",
//         element: <Suspense fallback={<Loader />}> <Detail mediaType="tv" /></Suspense>
//       },
//       {
//         path: "/movies",
//         element: <Suspense fallback={<Loader />}> <ListMovie media_type="movie" key={"movie"} /></Suspense>
//       },
//       {
//         path: "/tv-series",
//         element: <Suspense fallback={<Loader />}> <ListMovie media_type="tv" key={"tv-series"} /></Suspense>
//       },
//       {
//         path: "/search",
//         element: <Suspense fallback={<Loader />}><Search /></Suspense>
//       }
//     ]
//   },
//   {
//     path: "/notfound",
//     element: <Suspense fallback={<Loader />}> <Error404Page /></Suspense>
//   },
//   {
//     path: "*",
//     element: <Suspense fallback={<Loader />}> <Error404Page /></Suspense>
//   }
// ]

export const routers = createBrowserRouter(routeObj)

