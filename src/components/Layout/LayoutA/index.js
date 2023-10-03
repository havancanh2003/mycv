import React from "react";
import classNames from "classnames/bind";
import style from "./LayoutA.module.scss";
const cx = classNames.bind(style);

const LayoutA = ({
  avt,
  firstName,
  middletName,
  lastName,
  designation,
  phone,
  email,
  adress,
  summary,
  skill,
  achievement,
  edu,
  exp,
  project,
}) => {
  return (
    <div className={cx("a")}>
      <div className={cx("head")}>
        <div className={cx("about_head")}>
          <h1>
            {firstName} {middletName} {lastName}
          </h1>
          <p
            style={{
              backgroundColor: "#fff",
              color: "#333",
              fontWeight: "100",
              padding: "0",
              fontSize: "1.8rem",
              textTransform: "capitalize",
            }}
          >
            {designation}
          </p>
        </div>
        <div className={cx("avt_head")}>
          {avt ? <img src={avt} alt="" /> : <img src="" alt="" />}
        </div>
      </div>

      <div className={cx("container")}>
        <div className={cx("about_container")}>
          <div className={cx("about")}>
            <h3>About</h3>
            <div className={cx("icon_about")}>
              <i className="fa-solid fa-phone"></i>
              <span>{phone}</span>
            </div>
            <div className={cx("icon_about")}>
              <i class="fa-solid fa-location-dot"></i>
              <span>{adress}</span>
            </div>
            <div className={cx("icon_about")}>
              <i className="fa-solid fa-envelope"></i>
              <span>{email}</span>
            </div>
            <div className={cx("icon_about")}>
              <i className="fa-solid fa-circle-user"></i>
              <span>{summary}</span>
            </div>
          </div>
          <div className={cx("education")}>
            <h3>Education</h3>
            {edu.map((item, index) => (
              <div
                key={index}
                className={cx("edu")}
                style={{ marginBottom: "2rem" }}
              >
                <h4 style={{ fontStyle: "italic" }}>{item.school}</h4>
                <h4>
                  {item.dgree}{" "}
                  <span style={{ fontWeight: "100", color: "#696969" }}>
                    {item.city}
                  </span>{" "}
                </h4>
                <span
                  style={{
                    backgroundColor: "#003333",
                    color: "#fff",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  {item.startDate}
                </span>{" "}
                <span
                  style={{
                    backgroundColor: "#003333",
                    color: "#fff",
                    padding: "5px",
                    borderRadius: "5px",
                    marginLeft: "2.5px",
                  }}
                >
                  {" "}
                  {item.endDate}
                </span>
                <span
                  style={{
                    fontWeight: "100",
                    color: "#696969",
                    paddingLeft: "5px",
                  }}
                >
                  <br /> {item.Des}
                </span>{" "}
              </div>
            ))}
          </div>
          <div style={{ borderBottom: "none" }} className={cx("skill")}>
            <h3>Skills</h3>
            {skill.map((ski, index) => (
              <li key={index}>
                {ski.skillMe} <br />
              </li>
            ))}
          </div>
        </div>

        <div className={cx("main_container")}>
          <div className={cx("achievement")}>
            <div className={cx("title_style")}>
              <i className="fa-solid fa-star-half-stroke"></i>
              <h3>Achievement</h3>
            </div>
            {achievement.map((achi) => (
              <div style={{ padding: ".5rem 0 .5rem 0" }} key={achi}>
                <h4>{achi.title}</h4>
                <span>{achi.desc}</span>
              </div>
            ))}
          </div>
          <div className={cx("experience")}>
            <div className={cx("title_style")} style={{ marginBottom: "1rem" }}>
              <i className="fa-solid fa-briefcase"></i>
              <h3>Experience</h3>
            </div>
            {exp.map((exper, index) => (
              <div key={index} className={cx("exp")}>
                <h4 style={{ fontStyle: "italic", textTransform: "uppercase" }}>
                  {exper.title}
                </h4>
                <h4>{exper.company}</h4>
                <span style={{ fontWeight: "100", color: "#696969" }}>
                  {exper.location}
                </span>{" "}
                <span
                  style={{
                    backgroundColor: "#003333",
                    color: "#fff",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  {exper.startDate}
                </span>{" "}
                <span
                  style={{
                    backgroundColor: "#003333",
                    color: "#fff",
                    padding: "5px",
                    borderRadius: "5px",
                    marginLeft: "2.5px",
                  }}
                >
                  {" "}
                  {exper.endDate}
                </span>
                <span
                  style={{
                    fontWeight: "100",
                    color: "#696969",
                    paddingLeft: "5px",
                  }}
                >
                  {exper.Des}
                </span>{" "}
              </div>
            ))}
          </div>
          <div className={cx("project")}>
            <div className={cx("title_style")} style={{ marginBottom: "1rem" }}>
              <i className="fa-solid fa-diagram-project"></i>
              <h3>Project</h3>
            </div>
            {project.map((item) => (
              <div key={item} className={cx("achievement")}>
                <div style={{ marginBottom: "2rem" }}>
                  <span>{item.PrName}</span>
                  <br />
                  <span>{item.PrLink}</span>
                  <br />
                  <span>{item.Des}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutA;
