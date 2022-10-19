//routing for website
import { UsersPageComponent } from '../modules/layout/users-page-component/UsersPageComponent';
import { LoginPage } from '../modules/login/LoginPage';
import { useRoutes } from "react-router-dom";

export const Approute = () => {
    let routes = useRoutes([
      { path: "/", element: <LoginPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/users", element: <UsersPageComponent /> },
    ]);
    return routes;
  };