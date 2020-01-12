import React from "react";
import { NavLink } from "react-router-dom";

const Layout = props => {
  return (
    <div className="Layout">
      <div className="row">
        <div className="col-sm-4">
          <div className="Layout__colors">
            <h3>
              <svg width="400" height="100">
                <text
                  fill="transparent"
                  fillOpacity="0.2"
                  fontSize="25"
                  x="200"
                  y="70"
                  textAnchor="end"
                  stroke="white"
                >
                  Content TextRank
                </text>
              </svg>
            </h3>
            <p>Your gateway to a short and brief world</p>

            <div className="Layout__menu-bar">
              <NavLink
                to="/"
                className="Layout__menu-item"
                activeClassName="Layout__menu-item--active"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="Layout__menu-item"
                activeClassName="Layout__menu-item--active"
              >
                About
              </NavLink>
              <NavLink
                to="/slides"
                className="Layout__menu-item"
                activeClassName="Layout__menu-item--active"
              >
                Slides
              </NavLink>

              <NavLink
                to="/team"
                className="Layout__menu-item"
                activeClassName="Layout__menu-item--active"
              >
                Team
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="Layout__content">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
