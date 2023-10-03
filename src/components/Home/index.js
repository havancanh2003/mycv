import React from "react";
import PDF from "../PDF";
import { about } from "../../Data";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import style from "./Home.module.scss";
import img from "./asset/img.jpg";
const cx = classNames.bind(style);

const Home = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("banner")}>
        <span className={cx("intro")}>ONLINE RESUME BUILDER</span>
        <p style={{ textAlign: "center" }} className={cx("only")}>
          Only 2% of resume make it past the
          <br /> first round. Be in the top 2%
        </p>
        <spam className={cx("about")}>
          Use professional field-tested resume templates that follow the exact
          'resum
          <br />
          rule' employes look.Easy to use and dove within minutes - try now for
          free!
        </spam>
        <Link style={{ padding: "0", margin: "0" }} to="/cv">
          <button className={cx("btn")}>CREATE MY RUSUME</button>
        </Link>
        <PDF />
      </div>
      {/* use */}
      <div className={cx("use")}>
        <div className={cx("img_use")}>
          <img src={img} alt="" />
        </div>
        <div className={cx("about_use")}>
          <h2>Use The Best Resume maker as your guide</h2>
          <p>
            Getting that dream job can seem like ab impossible task. We're here
            <br />
            to change that. Give yourself a real advantage wuth the best online
            resume maker: create by experts, improved by data, trust by milions
            <br />
            of professionals.
          </p>
          <div className={cx("btn_use")}>
            <Link to="/cv">
              <button
                className={cx("btn")}
                style={{ color: "#fff", backgroundColor: "#00B2EE" }}
              >
                CREATE MY RESUME
              </button>
            </Link>
            <button className={cx("btn")}>WATCH VIDEO</button>
          </div>
        </div>
      </div>
      {/* <i class="fa-solid fa-trophy-star"></i> */}
      {/* about */}

      <div className={cx("about_des")}>
        {about.map((item, index) => (
          <div key={index} className={cx("desq")}>
            <i
              style={{ fontSize: "5rem", backgroundColor: "" }}
              class={item.logo}
            ></i>
            <h3>{item.title}</h3>
            <p>{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
