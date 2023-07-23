import React from 'react';
import { Outlet, Link } from "react-router-dom";


const AppRoutes = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/taskone"/>
          </li>
          <li>
            <Link to="/tasktwo"/>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default AppRoutes;
