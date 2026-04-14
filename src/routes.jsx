import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Friends from './Components/FriendDetails/Friends.jsx';
import Timeline from './Components/Timeline/Timeline.jsx'
import Stats from './Components/Stats/Stats.jsx';
import { createBrowserRouter } from "react-router";
import App from './App.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: '/friends',
        Component: Friends,
      },
      {
        path: '/timeline',
        Component: Timeline,
      },
      {
        path: '/stats',
        Component: Stats,
      }
    ]
  },
])