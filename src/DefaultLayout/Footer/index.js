import classNames from "classnames/bind";
import style from "./Footer.module.scss";

const cx = classNames.bind(style);

function Footer() {
  return (
    <footer>
      <span>
        @copyright 2023, All Rights Reserver -
        <span style={{ color: "#fff" }}>build.resume</span>{" "}
      </span>
    </footer>
  );
}

export default Footer;
