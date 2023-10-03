import classNames from "classnames/bind";
import style from "./PDF.module.scss";

const cx = classNames.bind(style);

function PDF() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("infor")}>
        {/* <div className={cx("first")}> */}
        <div className={cx("img")}>
          <img
            src="https://images.hellomagazine.com/horizon/square/d2c5df340b1b-gettyimages-1458040871.jpg"
            alt=""
          />
        </div>
        <div className={cx("name")}>
          <h2>Sophie Walton</h2>
          <hr
            style={{
              maxWidth: "1.5rem",
              margin: "1rem auto",
            }}
          />
          <p style={{ fontWeight: "100" }}>
            CUSTOMER SERVICE <br /> REPRESENTATIVE
          </p>
        </div>
        {/* </div> */}
        <div className={cx("detail")}>
          <h3>Details</h3>
          <p>32500 2nd Ave SW</p>
          <p>Seattle, WA 9999</p>
          <p>United State</p>
          <p>(207) 702-5612</p>
          <p>hv12839@gmail.com</p>
        </div>
      </div>
      <div className={cx("about")}>
        <div className={cx("profile")}>
          <h2>Profile</h2>
          <p>
            That dream has been cherished by me since I was in 1st grade. I
            still clearly remember that day, my mother got sick from getting wet
            in the rain. Mom was lying on the bed with a fever, cold, headache,
            and pain at the same time. Although me and my father were very
            worried, put a towel on my mother, but it still didn't get better.
            Then my father took my mother to the hospital. better and has a
            fever. At that time, I was very grateful to the doctor. Then, while
            waiting for my father to go get medicine, I looked around me, the
            doctors and nurses were wholeheartedly examining
          </p>
        </div>
        <div className={cx("employment")}>
          <h2>Employment History</h2>
          <h3>Branch Customer Sevice REPRESENTATIVE AT&TW Seatle </h3>
          <span>august 2023 - September 2029</span>
          <li>Maintained up to date knowledge of products and services.</li>
          <li>
            Handled customer calls and responded to queries about services,
            product malfunctions,promotions, and biling.
          </li>
        </div>
      </div>
    </div>
  );
}

export default PDF;
