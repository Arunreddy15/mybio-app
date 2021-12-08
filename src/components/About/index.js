import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.css";
const About = () => (
  <>
    <Navbar />
    <div className="about">
      <div className="side-image">
        {/* <p>only difficulties are the most finest path to success</p> */}
        {/* <p>Try to face the difficulties and they will lead to success</p> */}
        {/* <p>Difficulties are the only way to get closer to success</p> */}
        {/* <p>try to experience the Problems, to be experienced in Success</p> */}
      </div>
      <div className="body-left">
        <div className="inner-body-left">
          <h1 className="name"> Arun Kumar Baddam</h1>
          <p>
            S/o <span className="f-name">Ramana Reddy</span>
          </p>
          <p>
            I am very <span className="keyword">enthusiastic</span> piece in my
            family cake. I usually like to be calm in any situation it might be
            tense or I am thinking..., Every moment in the life, I strictly need
            to have it positively to move forward.
          </p>
          <p>
            I strongly believe, the work which we are doing daily, if that gives
            you a bit satisfaction then that will be your best emotion. Lead the
            independent life toward future to be happy. Avoid distractions to
            have your life in the way you love.
          </p>
          <Link className="btn" to="/about">
            Click me To Know More <BsArrowRightShort size="24" />
          </Link>
        </div>
      </div>
    </div>
  </>
);
export default About;
