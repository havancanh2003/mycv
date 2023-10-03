import { useState, useRef } from "react";
import Section from "../../item/Section";
import { sections, EXP, education, Proj, Aven } from "../../Data";
import LayoutA from "../Layout/LayoutA";
import LayoutDefault from "../Layout/LayoutDefault";
import LayoutB from "../Layout/LayoutB";
import { useReactToPrint } from "react-to-print";
import classNames from "classnames/bind";
import style from "./CreateCV.module.scss";
import layoutA from "./assets/layoutA.jpg";
import layoutB from "./assets/layoutB.jpg";
import defaulLayout from "./assets/defaulLayout.jpg";

const cx = classNames.bind(style);
const CreatCv = () => {
  //state
  const [achievement, setAchievement] = useState([{ title: "", desc: "" }]);
  const [skill, setSkill] = useState([{ skillMe: "" }]);
  const [project, setProject] = useState([{ PrName: "", PrLink: "", Des: "" }]);
  const [edu, setEdu] = useState([
    { school: "", dgree: "", city: "", startDate: "", endDate: "", Des: "" },
  ]);
  const [exp, setExp] = useState([
    {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      Des: "",
    },
  ]);
  //const [achi, setAchi] = useState([{}]);

  //
  const [firstName, setFirstName] = useState("");
  const [middletName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avt, setAvt] = useState("");
  const [designation, setDesignation] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSumary] = useState("");
  const [template, setTemplate] = useState(false);
  // function
  const handleAddAchievement = () => {
    setAchievement([...achievement, { title: "", desc: "" }]);
  };
  //
  const handleAddEdu = () => {
    setEdu([
      ...edu,
      { school: "", dgree: "", city: "", startDate: "", endDate: "", Des: "" },
    ]);
  };
  //
  const handleAddExp = () => {
    setExp([
      ...exp,
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        Des: "",
      },
    ]);
  };
  //

  //remove
  const handleAddSkill = () => {
    setSkill([...skill, { skillMe: "" }]);
  };
  //
  const handleAddProj = () => {
    setProject([...project, { PrName: "", PrLink: "", Des: "" }]);
  };
  //
  const handleReomveProj = (index) => {
    let ListProj = [...project];
    ListProj.splice(index, 1);
    setProject(ListProj);
  };
  const handleReomveEdu = (index) => {
    let ListEdu = [...edu];
    ListEdu.splice(index, 1);
    setEdu(ListEdu);
  };

  const handleReomveExp = (index) => {
    let ListExp = [...exp];
    ListExp.splice(index, 1);
    setExp(ListExp);
  };
  //
  const handleReomveSkill = (index) => {
    let ListSkill = [...skill];
    ListSkill.splice(index, 1);
    setSkill(ListSkill);
  };
  //

  const handleReomveAchievement = (index) => {
    let List = [...achievement];
    List.splice(index, 1);
    setAchievement(List);
  };

  //
  const onAchieven = (e, index, i) => {
    const a = [...achievement];
    //a[0].title = e.target.value;
    a.forEach((achi, indexa) => {
      if (index === indexa) {
        i === 0 ? (achi.title = e.target.value) : (achi.desc = e.target.value);
      }
    });
    console.log(a);
    setAchievement(a);
  };
  //
  const onSkill = (e, index) => {
    //console.log(index);
    //index === 0 ? console.log(e.target.value) : <></>;
    const s = [...skill];
    s.forEach((skill, indexs) => {
      if (index === indexs) {
        skill.skillMe = e.target.value;
      }
    });
    console.log(s);
    setSkill(s);
  };
  //
  const onProj = (e, index, i) => {
    const p = [...project];
    p.forEach((item, indexp) => {
      if (index === indexp) {
        switch (i) {
          case 0:
            item.PrName = e.target.value;
            break;
          case 1:
            item.PrLink = e.target.value;
            break;
          default:
            item.Des = e.target.value;
            break;
        }
      }
    });
    console.log(p);
    setProject(p);
  };

  //
  const onEdu = (e, index, i) => {
    const E = [...edu];
    E.forEach((item, indexp) => {
      if (index === indexp) {
        switch (i) {
          case 0:
            item.school = e.target.value;
            break;
          case 1:
            item.dgree = e.target.value;
            break;
          case 2:
            item.city = e.target.value;
            break;
          case 3:
            item.startDate = e.target.value;
            break;
          case 4:
            item.endDate = e.target.value;
            break;
          default:
            item.Des = e.target.value;
            break;
        }
      }
    });
    console.log(E);
    setEdu(E);
  };
  //
  const onExp = (e, index, i) => {
    const E = [...exp];
    E.forEach((item, indexp) => {
      if (index === indexp) {
        switch (i) {
          case 0:
            item.title = e.target.value;
            break;
          case 1:
            item.company = e.target.value;
            break;
          case 2:
            item.location = e.target.value;
            break;
          case 3:
            item.startDate = e.target.value;
            break;
          case 4:
            item.endDate = e.target.value;
            break;
          default:
            item.Des = e.target.value;
            break;
        }
      }
    });
    console.log(E);
    setExp(E);
  };
  //
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  //

  const onChangeName = (e, i) => {
    switch (i) {
      case 0:
        setFirstName(e.target.value);
        break;
      case 1:
        setMiddleName(e.target.value);
        break;
      case 2:
        setLastName(e.target.value);
        break;
      case 3:
        const file = e.target.files[0];
        const url = window.URL.createObjectURL(file);
        setAvt(url);
        break;
      case 4:
        setDesignation(e.target.value);
        break;
      case 5:
        setAdress(e.target.value);
        break;
      case 6:
        setEmail(e.target.value);
        break;
      case 7:
        setPhone(e.target.value);
        break;
      case 8:
        setSumary(e.target.value);
        break;
      default:
      // code block
    }
  };
  const [layer, setLayer] = useState();
  const layout = [layoutA, layoutB, defaulLayout];
  // const changeLayout = (btn) => {
  //   //switch()
  //   console.log(btn);

  // };
  const handleTemplate = () => {
    setTemplate(!template);
  };

  return (
    <section>
      <p>ABOUT SECTION</p>
      <div className={cx("sec")}>
        {sections.map((item, index) => (
          <Section
            key={index}
            name={item.name}
            type={item.type}
            placeholder={item.plac}
            onChanges={(e) => onChangeName(e, index)}
          />
        ))}
      </div>

      <p>ACHIEVEMENTS</p>
      {achievement.map((achievement, index) => (
        <div key={index}>
          {index === 0 ? (
            <></>
          ) : (
            <i
              style={{
                float: "right",
                marginBottom: "2rem",
                //backgroundColor: "red",
                //borderRadius: "60%",
                //padding: "5px",
              }}
              class="fa-solid fa-minus"
              onClick={() => handleReomveAchievement(index)}
            ></i>
          )}
          <div style={{ gridTemplateColumns: "1fr 1fr" }} className={cx("sec")}>
            {Aven.map((item, i) => (
              <Section
                key={i}
                name={item.name}
                type={item.type}
                placeholder={item.plac}
                onChanges={(e) => onAchieven(e, index, i)}
              />
            ))}
          </div>
        </div>
      ))}
      <i
        class="fa-solid fa-plus"
        style={{
          padding: "3.5px",
          backgroundColor: " #00B2EE",
          color: "#fff",
        }}
        onClick={handleAddAchievement}
      ></i>
      {/* exp */}
      <p style={{ marginTop: "1rem" }}>EXPERIENCE</p>
      {exp.map((ite, index) => (
        <div key={index}>
          {index === 0 ? (
            <></>
          ) : (
            <i
              style={{ float: "right", marginBottom: "2rem" }}
              class="fa-solid fa-minus"
              onClick={() => handleReomveExp(index)}
            ></i>
          )}
          <div className={cx("sec")}>
            {EXP.map((item, i) => (
              <Section
                key={i}
                name={item.name}
                type={item.type}
                placeholder={item.plac}
                onChanges={(e) => onExp(e, index, i)}
              />
            ))}
          </div>
        </div>
      ))}
      <i
        class="fa-solid fa-plus"
        style={{
          padding: "3.5px",
          backgroundColor: " #00B2EE",
          color: "#fff",
        }}
        onClick={handleAddExp}
      ></i>
      {/* <div className={cx("sec")}>
        {EXP.map((item, index) => (
          <Section
            key={index}
            name={item.name}
            type={item.type}
            placeholder={item.plac}
          />
        ))}
      </div> */}
      {/* education */}
      <p style={{ marginTop: "1rem" }}>EDUCATION</p>
      {edu.map((edu, index) => (
        <div key={index}>
          {index === 0 ? (
            <></>
          ) : (
            <i
              style={{ float: "right", marginBottom: "2rem" }}
              class="fa-solid fa-minus"
              onClick={() => handleReomveEdu(index)}
            ></i>
          )}
          <div className={cx("sec")}>
            {education.map((item, i) => (
              <Section
                key={i}
                name={item.name}
                type={item.type}
                placeholder={item.plac}
                onChanges={(e) => onEdu(e, index, i)}
              />
            ))}
          </div>
        </div>
      ))}
      <i
        class="fa-solid fa-plus"
        style={{
          padding: "3.5px",
          backgroundColor: " #00B2EE",
          color: "#fff",
        }}
        onClick={handleAddEdu}
      ></i>
      {/* <div className={cx("sec")}>
        {education.map((item, index) => (
          <Section
            key={index}
            name={item.name}
            type={item.type}
            placeholder={item.plac}
          />
        ))}
      </div> */}

      {/* Project */}
      <p style={{ marginTop: "1rem" }}>PROJECT</p>
      {project.map((achievement, index) => (
        <div key={index}>
          {index === 0 ? (
            <></>
          ) : (
            <i
              style={{ float: "right", marginBottom: "2rem" }}
              class="fa-solid fa-minus"
              onClick={() => handleReomveProj(index)}
            ></i>
          )}
          <div className={cx("sec")}>
            {Proj.map((item, i) => (
              <Section
                key={i}
                name={item.name}
                type={item.type}
                placeholder={item.plac}
                onChanges={(e) => onProj(e, index, i)}
              />
            ))}
          </div>
        </div>
      ))}
      <i
        class="fa-solid fa-plus"
        style={{
          padding: "3.5px",
          backgroundColor: " #00B2EE",
          color: "#fff",
        }}
        onClick={handleAddProj}
      ></i>
      {/* Skill */}
      <p style={{ marginTop: "1rem" }}>SKILLS</p>
      {skill.map((item, index) => (
        <div key={index}>
          {index === 0 ? (
            <></>
          ) : (
            <i
              style={{ float: "right", marginBottom: "2rem" }}
              class="fa-solid fa-minus"
              onClick={() => handleReomveSkill(index)}
            ></i>
          )}
          <div style={{ gridTemplateColumns: "1fr" }} className={cx("sec")}>
            <Section
              name="Skill"
              type="text"
              onChanges={(e) => onSkill(e, index)}
            />
          </div>
        </div>
      ))}
      <i
        class="fa-solid fa-plus"
        style={{
          padding: "3.5px",
          backgroundColor: " #00B2EE",
          color: "#fff",
        }}
        onClick={handleAddSkill}
      ></i>

      {/* cv */}
      <div ref={componentRef} className={cx("pdf")}>
        {/* <div className={cx("yourself")}>
          <div className={cx("wrapYS")}>
            <div className={cx("avt")}>
              {avt ? <img src={avt} alt="" /> : <img src="" alt="" />}
            </div>
            <div style={{ display: "flex" }}>
              <h3>{firstName} &nbsp;</h3>
              <h3>{middletName} &nbsp;</h3>
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
            <h4 style={{ fontWeight: "300" }}>ABOUT</h4>
            <ul>{phone}</ul>
            <ul>{email}</ul>
            <ul>{adress}</ul>
            <ul>{summary}</ul>
          </div>
          <h4 style={{ fontWeight: "300" }}>SKILLS</h4>
          {skill.map((item, index) => (
            <div key={index} className={cx("skillYs")}>
              <span>{item.skillMe}</span>
            </div>
          ))}
        </div> */}
        {/* <div className={cx("aboutMe")}> */}
        {/* achi */}
        {/* <h3>Achievement</h3>
          {achievement.map((achi, index) => (
            <div key={index} className={cx("achievement")}>
              <h4 className={cx("styleTitle")}>{achi.title}</h4>
              <span>{achi.desc}</span>
            </div>
          ))} */}
        {/* edu */}
        {/* <h3>Education</h3>
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
              <span style={{ fontWeight: "100", color: "#696969" }}>
                {item.Des}
              </span>{" "}
            </div>
          ))} */}
        {/* exp */}
        {/* <h3>Experience</h3>
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
              <span style={{ fontWeight: "100", color: "#696969" }}>
                {exper.Des}
              </span>{" "}
            </div>
          ))} */}
        {/* proj */}
        {/* <h3>Project</h3>
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
          ))} */}
        {/* </div> */}
        {/* {switch (layer) {
          case 0:
            item.title = e.target.value;
            break;

        } */}
        {layer === layoutB ? (
          <LayoutB
            avt={avt}
            firstName={firstName}
            middletName={middletName}
            lastName={lastName}
            designation={designation}
            phone={phone}
            email={email}
            adress={adress}
            summary={summary}
            skill={skill}
            achievement={achievement}
            edu={edu}
            exp={exp}
            project={project}
          />
        ) : layer === layoutA ? (
          <LayoutA
            avt={avt}
            firstName={firstName}
            middletName={middletName}
            lastName={lastName}
            designation={designation}
            phone={phone}
            email={email}
            adress={adress}
            summary={summary}
            skill={skill}
            achievement={achievement}
            edu={edu}
            exp={exp}
            project={project}
          />
        ) : (
          <LayoutDefault
            avt={avt}
            firstName={firstName}
            middletName={middletName}
            lastName={lastName}
            designation={designation}
            phone={phone}
            email={email}
            adress={adress}
            summary={summary}
            skill={skill}
            achievement={achievement}
            edu={edu}
            exp={exp}
            project={project}
          />
        )}

        {/* <Cv
          avt={avt}
          firstName={firstName}
          middletName={middletName}
          lastName={lastName}
          designation={designation}
          phone={phone}
          email={email}
          adress={adress}
          summary={summary}
          skill={skill}
          achievement={achievement}
          edu={edu}
          exp={exp}
          project={project}
        /> */}
        {/* {template ? (
          <div className={cx("templateLayout")}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAU-849YTx0h_H8kax-1xacWJij8wqYD0Lg8Z3i0D7Wb4yNcBDzQDDbyHXGgGS65cX8U&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAU-849YTx0h_H8kax-1xacWJij8wqYD0Lg8Z3i0D7Wb4yNcBDzQDDbyHXGgGS65cX8U&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAU-849YTx0h_H8kax-1xacWJij8wqYD0Lg8Z3i0D7Wb4yNcBDzQDDbyHXGgGS65cX8U&usqp=CAU"
              alt=""
            />
          </div>
        ) : (
          <></>
        )} */}
      </div>
      <div style={{ display: "flex" }}>
        <button className={cx("btnSubmit")} onClick={handlePrint}>
          Print CV
        </button>
        <div style={{ position: "relative", width: "50%", marginLeft: "1rem" }}>
          <button className={cx("btnSubmit")} onClick={handleTemplate}>
            {" "}
            Template{" "}
          </button>
          {template ? (
            <div className={cx("templateLayout")}>
              {layout.map((src) => (
                <img
                  src={src}
                  alt=""
                  key={src}
                  onClick={() => {
                    setLayer(src);
                    setTemplate(false);
                  }}
                />
              ))}
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAU-849YTx0h_H8kax-1xacWJij8wqYD0Lg8Z3i0D7Wb4yNcBDzQDDbyHXGgGS65cX8U&usqp=CAU"
                alt=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAU-849YTx0h_H8kax-1xacWJij8wqYD0Lg8Z3i0D7Wb4yNcBDzQDDbyHXGgGS65cX8U&usqp=CAU"
                alt=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAU-849YTx0h_H8kax-1xacWJij8wqYD0Lg8Z3i0D7Wb4yNcBDzQDDbyHXGgGS65cX8U&usqp=CAU"
                alt=""
              /> */}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default CreatCv;
