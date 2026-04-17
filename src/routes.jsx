import Dashboard from './Components/Dashboard/Dashboard.jsx';
import FriendsList from './Components/Dashboard/FriendsList.jsx';
import Friends from './Components/FriendDetails/Friends.jsx';
import Timeline from './Components/Timeline/Timeline.jsx'
import Stats from './Components/Stats/Stats.jsx';
import { createBrowserRouter } from "react-router";
import App from './App.jsx';
import NotFound from './Components/NotFound.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'friends',
        element: <FriendsList />,
      },
      {
        path: 'friends/:id',
        element: <Friends />,
      },
      {
        path: 'timeline',
        element: <Timeline />,
      },
      {
        path: 'stats',
        element: <Stats />,
      }
    ],
  },
]);