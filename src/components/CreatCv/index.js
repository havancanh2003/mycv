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
              className="fa-solid fa-minus"
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
        className="fa-solid fa-plus"
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
              className="fa-solid fa-minus"
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
        className="fa-solid fa-plus"
        style={{
          padding: "3.5px",
          backgroundColor: " #00B2EE",
          color: "#fff",
        }}
        onClick={handleAddExp}
      ></i>
      <p style={{ marginTop: "1rem" }}>EDUCATION</p>
      {edu.map((edu, index) => (
        <div key={index}>
          {index === 0 ? (
            <></>
          ) : (
            <i
              style={{ float: "right", marginBottom: "2rem" }}
              className="fa-solid fa-minus"
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
        className="fa-solid fa-plus"
        style={{
          padding: "3.5px",
          backgroundColor: " #00B2EE",
          color: "#fff",
        }}
        onClick={handleAddEdu}
      ></i>
      {/* <div classNameName={cx("sec")}>
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
              className="fa-solid fa-minus"
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
        className="fa-solid fa-plus"
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
              className="fa-solid fa-minus"
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
        className="fa-solid fa-plus"
        style={{
          padding: "3.5px",
          backgroundColor: " #00B2EE",
          color: "#fff",
        }}
        onClick={handleAddSkill}
      ></i>

      {/* cv */}
      <div ref={componentRef} className={cx("pdf")}>
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
