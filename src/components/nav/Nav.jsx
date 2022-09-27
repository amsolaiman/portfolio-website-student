import React from "react";
import "./nav.css";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {
  BiHome,
  BiUser,
  BiPalette,
  BiBriefcase,
  BiMessageSquareDetail,
} from "react-icons/bi";

const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <NavLink to="/my-portfolio-website/">
        <BiHome />
      </NavLink>
      <NavLink to="/my-portfolio-website/about">
        <BiUser />
      </NavLink>
      <NavLink to="/my-portfolio-website/project">
        <BiBriefcase />
      </NavLink>
      <NavLink to="/my-portfolio-website/service">
        <BiPalette />
      </NavLink>
      <NavLink to="/my-portfolio-website/contact">
        <BiMessageSquareDetail />
      </NavLink>
    </nav>
  );
};

export default Nav;

function NavLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <Link
      to={to}
      className={isActive ? "nav__link active" : "nav__link"}
      {...props}
    >
      {children}
    </Link>
  );
}
