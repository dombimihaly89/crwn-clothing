import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import "./navigation.styles.scss"

import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  )
}

export default NavigationBar;
