import React from "react";
import classNames from "classnames/bind";
import style from "./LayoutB.module.scss";
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
    <div className={cx("section")}>
      {/* header */}
      <div className={cx("header")}>
        {/* name and designation */}
        <div className={cx("desName")}>
          <h1 style={{ textTransform: "uppercase" }}>
            {firstName} {middletName} {lastName}
          </h1>
          <span>{designation}</span> / <span>{summary}</span>
        </div>
        {/* avt and about */}
        <div className={cx("about")}>
          <div className={cx("avt")}>
            {avt ? <img src={avt} alt="" /> : <img src="" alt="" />}
          </div>
          <div className={cx("about_item")}>
            <i class="fa-solid fa-square-phone"></i>
            {phone}
          </div>

          <div className={cx("about_item")}>
            <i class="fa-solid fa-envelope-open-text"></i>
            {email}
          </div>

          <div className={cx("about_item")}>
            <i class="fa-solid fa-location-dot"></i>
            {phone}
          </div>
        </div>
      </div>
      {/* container */}
      <div className={cx("container")}>
        <div className={cx("left_container")}>
          <div
            style={{ marginBottom: "1.8rem", textTransform: "capitalize" }}
            className={cx("achievement")}
          >
            <div className={cx("title_style")}>
              <i class="fa-solid fa-star-half-stroke"></i>
              <h3>Achievement</h3>
            </div>
            {achievement.map((achi) => (
              <div style={{ margin: ".8rem 0 .5rem 0" }} key={achi}>
                <h4>{achi.title}</h4>
                <span>{achi.desc}</span>
              </div>
            ))}
          </div>
          <div className={cx("education")}>
            <div className={cx("title_style")}>
              <i class="fa-solid fa-graduation-cap"></i>
              <h3>Education</h3>
            </div>
            {edu.map((item, index) => (
              <div
                key={index}
                className={cx("edu")}
                style={{ margin: ".8rem 0 .8rem 0" }}
              >
                <h4 style={{ fontStyle: "italic" }}>{item.school}</h4>
                <h4 style={{ marginBottom: "3px" }}>
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
                  {item.Des}
                </span>{" "}
              </div>
            ))}
          </div>
          <div
            style={{
              borderBottom: "none",
              textTransform: "capitalize",
              marginBottom: "1.8rem",
            }}
            className={cx("skill")}
          >
            <div className={cx("title_style")} style={{ marginBottom: "1rem" }}>
              <i class="fa-solid fa-gears"></i>
              <h3>Skills</h3>
            </div>
            {skill != null ? (
              skill.map((ski, index) => (
                <li key={index}>
                  {ski.skillMe} <br />
                </li>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={cx("main_container")}>
          <div className={cx("experience")}>
            <div className={cx("title_style")} style={{ marginBottom: "1rem" }}>
              <i class="fa-solid fa-briefcase"></i>
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
              <i class="fa-solid fa-diagram-project"></i>
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
