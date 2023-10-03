import classNames from "classnames/bind";
import style from "./Section.module.scss";

const cx = classNames.bind(style);

function Section({ name, type, placeholder, onChanges }) {
  return (
    <div className={cx("box")}>
      <label>{name}</label>
      <input type={type} placeholder={placeholder} onChange={onChanges} />
    </div>
  );
}

export default Section;
