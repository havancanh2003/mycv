import Header from "./Header";
import Footer from "./Footer";
import classNames from "classnames/bind";
import style from "./DefaultLayout.module.scss";
const cx = classNames.bind(style);
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("layout")}>
        <div className={cx("pc")}>{children}</div>
        <div className={cx("mob")}>Sorry, MyCv không hỗ trợ trên mobile</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
