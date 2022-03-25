import React from "react";
import { Outlet } from "react-router-dom";
import { Advertisement, Carousel, Footer, Header, Menu, Filter } from "./components";
import "./style.scss";
const Layout: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Advertisement />
      <Header />
      <Menu />
      <Carousel />
      <Filter />
      <div className="body-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
