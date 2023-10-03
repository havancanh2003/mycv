import classNames from "classnames/bind";
import style from "./LayoutDefault.module.scss";
const cx = classNames.bind(style);

function Cv({
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
}) {
  return (
    <div className={cx("pdf")}>
      <div className={cx("yourself")}>
        <div className={cx("wrapYS")}>
          <div className={cx("avt")}>
            {avt ? <img src={avt} alt="" /> : <img src="" alt="" />}
          </div>
          <div
            style={{
              display: "flex",
              textTransform: "uppercase",
              margin: "1rem 0 1rem 0",
            }}
          >
            <h3>{firstName}&nbsp; </h3>
            <h3>{middletName}&nbsp;</h3>
            <h3>{lastName}</h3>
          </div>
          <hr style={{ width: "5rem" }} />
          <p
            style={{
              backgroundColor: "initial",
              textTransform: "capitalize",
            }}
          >
            {designation}
          </p>
        </div>
        <div className={cx("aboutYourself")}>
          <h4 style={{ fontWeight: "500", marginBottom: "1.6rem" }}>ABOUT</h4>
          <ul>{phone}</ul>
          <ul>{email}</ul>
          <ul>{adress}</ul>
          <ul>{summary}</ul>
        </div>
        <h4 style={{ fontWeight: "500", marginBottom: "1.6rem" }}>SKILLS</h4>
        {skill.map((item, index) => (
          <div key={index} className={cx("skillYs")}>
            <span>{item.skillMe}</span>
          </div>
        ))}
      </div>
      <div className={cx("aboutMe")}>
        {/* achi */}
        <h3>Achievement</h3>
        {achievement.map((achi, index) => (
          <div key={index} className={cx("achievement")}>
            <h4 className={cx("styleTitle")}>{achi.title}</h4>
            <span style={{ paddingLeft: "5px" }}>{achi.desc}</span>
          </div>
        ))}
        {/* edu */}
        <h3>Education</h3>
        {edu.map((item, index) => (
          <div key={index} className={cx("education")}>
            <h4>{item.school}</h4>
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
                paddingLeft: "0.5rem",
              }}
            >
              {item.Des}
            </span>{" "}
          </div>
        ))}
        {/* exp */}
        <h3>Experience</h3>
        {exp.map((exper, index) => (
          <div key={index} className={cx("exp")}>
            <h4>{exper.title}</h4>
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
                paddingLeft: "0.5rem",
              }}
            >
              {exper.Des}
            </span>{" "}
          </div>
        ))}
        {/* proj */}
        <h3>Project</h3>
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
      {/* <Cv a={firstName} /> */}
    </div>
  );
}

export default Cv;
