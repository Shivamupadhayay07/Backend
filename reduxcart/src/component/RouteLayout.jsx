import React from "react";
import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";

const RouteLayout = () => {
  return (
    <>
      <NavBarPanel />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RouteLayout;