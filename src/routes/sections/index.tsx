import { Navigate, useRoutes } from 'react-router-dom';

import { PATH_AFTER_LOGIN } from 'src/config-global';

import { mainRoutes } from './main';
import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    },
    // Main routes
    ...mainRoutes,

    // Auth routes
    ...authRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
