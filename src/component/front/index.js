import { Button } from "antd";
import "./index.css";
import image from "../../images/female.png";
const Main = () => {
  return (
    <div className="main_main">
      <div>
        <p className="main_p1">----The New Era Has Been Started</p>
        <span className="main_span">
          Bright Your Future With <br />
          Learn New Technology <br />
          From All Experts
        </span>
        <p className="main_p2">
          Find all the instructions you need to get an entry-level job in tech,{" "}
          <br />
          even if you've never coded.Not a beginner?Test out of subjects.
        </p>
        <div className="front_but_area">
          <Button className="front-but">Start Free Trial</Button>
          <div>
            <p>Or Subscribe Just</p>
            <div
              style={{
                display: "flex",
              }}
            >
              <p>$19.00</p>
              <span className="month">/Month</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main_img">
        <img src={image} />
      </div>
    </div>
  );
};
export default Main;
