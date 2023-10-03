import classNames from "classnames/bind";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);

function Header() {
  return (
    <header className={cx("head")}>
      <Link style={{ textDecoration: "none", color: "#333" }} to="/">
        <div className={cx("logo")}>
          <i className="fa-brands fa-readme"></i>

          <span>
            build<span style={{ color: "#00B2EE" }}>resume</span>
          </span>
        </div>
      </Link>
      <i className="fa-sharp fa-solid fa-bars" style={{ color: "#00B2EE" }}></i>
    </header>
  );
}

export default Header;
