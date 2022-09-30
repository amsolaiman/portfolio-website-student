import React from "react";
import "./nav.scss";

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
      <NavLink to="/">
        <BiHome />
      </NavLink>
      <NavLink to="/about">
        <BiUser />
      </NavLink>
      <NavLink to="/project">
        <BiBriefcase />
      </NavLink>
      <NavLink to="/service">
        <BiPalette />
      </NavLink>
      <NavLink to="/contact">
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
