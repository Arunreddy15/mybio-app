import { Component } from "react";
import { GrLocation, GrFormDown } from "react-icons/gr";
import { BiBook } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { Chrono } from "react-chrono";
import Navbar from "../Navbar";
import Course from "../Course";
import Project from "../Project";
import "./career.css";

const timelineItemsList = [
  {
    id: "c6aad2fb-7673-45cf-9606-a335acc0cf4b",
    categoryId: "COURSE",
    title: "10 DECEMBER 2020",
    courseTitle: "Static Website",
    description:
      "Build your own personal portfolio website and a website to host conferences and events.  Publish your website and share it with your friends, family and beyond.",
    duration: "10 days",
    tagsList: [
      {
        id: "c31b2ad8-f766-11eb-9a03-0242ac130003",
        name: "HTML Elements",
      },
      {
        id: "c31b2d08-f766-11eb-9a03-0242ac130003",
        name: "Class Attribute",
      },
      {
        id: "c31b2dee-f766-11eb-9a03-0242ac130003",
        name: "Text Properties",
      },
      {
        id: "c31b2eb6-f766-11eb-9a03-0242ac130003",
        name: "Bootstrap",
      },
      {
        id: "c31b2f6a-f766-11eb-9a03-0242ac130003",
        name: "Box Properties",
      },
      {
        id: "c31b347e-f766-11eb-9a03-0242ac130003",
        name: "Layout",
      },
      {
        id: "c31b358c-f766-11eb-9a03-0242ac130003",
        name: "Flexbox",
      },
    ],
  },
  {
    id: "a19d93d6-bdac-479e-b554-974ef9e6e66c",
    categoryId: "PROJECT",
    title: "21 DECEMBER 2020",
    projectTitle: "Tourism Website",
    description:
      "A tourism website enables the user to browse through the images of popular destinations.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
    duration: "1 hr",
    projectUrl: "https://tourismapp.ccbp.tech/",
  },
  {
    id: "40b82899-fdf7-4a3e-a43a-41a9917b4582",
    categoryId: "COURSE",
    title: "5 JANUARY 2021",
    courseTitle: "Responsive Website",
    description:
      "Build a responsive website that appears beautifully on the screen of any size. Develop a personal portfolio website, an E-commerce product listing website and a website to host conferences and events.",
    duration: "12 days",
    tagsList: [
      {
        id: "551e2b7e-f767-11eb-9a03-0242ac130003",
        name: "Responsive Web Design",
      },
      {
        id: "551e2de0-f767-11eb-9a03-0242ac130003",
        name: "Multiple Layouts",
      },
      {
        id: "551e3114-f767-11eb-9a03-0242ac130003",
        name: "Column Wrapping",
      },
      {
        id: "551e31e6-f767-11eb-9a03-0242ac130003",
        name: "Navbar",
      },
      {
        id: "551e32a4-f767-11eb-9a03-0242ac130003",
        name: "Designing Layouts",
      },
      {
        id: "551e334e-f767-11eb-9a03-0242ac130003",
        name: "Inheritance",
      },
      {
        id: "551e3402-f767-11eb-9a03-0242ac130003",
        name: "CSS Gradients",
      },
    ],
  },
  {
    id: "ae2ede68-af77-427c-817c-0ce4beeb69c7",
    categoryId: "PROJECT",
    title: "7 JANUARY 2021",
    projectTitle: "Food Munch",
    description: "Food Much Website is a user-centric food tech website.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    duration: "2 hrs",
    projectUrl: "https://fm.ccbp.tech/",
  },
  {
    id: "4938c3d1-81cd-4729-9d2c-dcd50796aa4d",
    categoryId: "COURSE",
    title: "30 JANUARY 2021",
    courseTitle: "Dynamic Website",
    description:
      "Learn the fundamental concepts in JavaScript and apply them to build dynamic and interactive web applications like Counter, Guessing Game, Chat Web app, E-commerce web app, etc.",
    duration: "20 days",
    tagsList: [
      {
        id: "d4743c06-f767-11eb-9a03-0242ac130003",
        name: "Declaring Variables",
      },
      {
        id: "d4743ecc-f767-11eb-9a03-0242ac130003",
        name: "Comparison Operator",
      },
      {
        id: "d4743fe4-f767-11eb-9a03-0242ac130003",
        name: "Functions",
      },
      {
        id: "d47440d4-f767-11eb-9a03-0242ac130003",
        name: "Object",
      },
      {
        id: "d474434a-f767-11eb-9a03-0242ac130003",
        name: "DOM Manipulations",
      },
      {
        id: "d474443a-f767-11eb-9a03-0242ac130003",
        name: "Loops",
      },
      {
        id: "d4744516-f767-11eb-9a03-0242ac130003",
        name: "Local Storage",
      },
    ],
  },
  {
    id: "d6c4b3a5-7b1d-4906-aca8-823f44129004",
    categoryId: "PROJECT",
    title: "6 FEBRUARY 2021",
    projectTitle: "Todos Application",
    description:
      "This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png",
    duration: "3 hrs",
    projectUrl: "https://todossapp.ccbp.tech/",
  },
  {
    id: "0a35abbe-22ca-40a1-81da-613f656b7702",
    categoryId: "PROJECT",
    title: "15 FEBRUARY 2021",
    projectTitle: "Wikipedia Search Application",
    description:
      "Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png",
    duration: "4 hrs",
    projectUrl: "https://wikiseaarch.ccbp.tech/",
  },
  {
    id: "d80781c3-980e-4ab9-96ca-9ad1a9cdf93d",
    categoryId: "COURSE",
    title: "15 MARCH 2021",
    courseTitle: "RWD using Flexbox",
    description:
      "Learn to develop responsive layouts using CSS Flexbox and CSS Media Queries.",
    duration: "7 days",
    tagsList: [
      {
        id: "34e6b208-f768-11eb-9a03-0242ac130003",
        name: "Sizing Elements",
      },
      {
        id: "34e6b460-f768-11eb-9a03-0242ac130003",
        name: "Flexbox Layout",
      },
      {
        id: "34e6b76c-f768-11eb-9a03-0242ac130003",
        name: "Min & Max sizes",
      },
      {
        id: "34e6b83e-f768-11eb-9a03-0242ac130003",
        name: "Media Query Syntax",
      },
      {
        id: "34e6b8fc-f768-11eb-9a03-0242ac130003",
        name: "Logical Operators",
      },
      {
        id: "34e6ba28-f768-11eb-9a03-0242ac130003",
        name: "CSS box-sizing property",
      },
      {
        id: "34e6baf0-f768-11eb-9a03-0242ac130003",
        name: "Media Features",
      },
    ],
  },
  {
    id: "7bc3f006-f0f1-4574-924b-17c480556727",
    categoryId: "PROJECT",
    title: "20 MARCH 2021",
    projectTitle: "Move Messenger",
    description:
      "The landing page of Move Messenger gives you a brief intro of Move Messenger. The landing page is responsive enabling to view it across various devices.",
    imageUrl:
      "https://assets.ccbp.in/frontend/intermediate-rwd/move-messenger-img.png",
    duration: "5 hr",
    projectUrl: "https://movemessengers.ccbp.tech/",
  },
  {
    id: "e681e826-260c-4540-9ee5-f53d0e6ecba0",
    categoryId: "COURSE",
    title: "30 APRIL 2021",
    courseTitle: "React JS - Getting Started",
    description:
      "Learn how to build dynamic web applications with the React JS library. When you finish this course, you will be comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.",
    duration: "18 days",
    tagsList: [
      {
        id: "94947ad2-f768-11eb-9a03-0242ac130003",
        name: "Components",
      },
      {
        id: "94947d52-f768-11eb-9a03-0242ac130003",
        name: "Lists",
      },
      {
        id: "94947e4c-f768-11eb-9a03-0242ac130003",
        name: "Conditional Rendering",
      },
      {
        id: "94947f14-f768-11eb-9a03-0242ac130003",
        name: "setState()",
      },
      {
        id: "94948270-f768-11eb-9a03-0242ac130003",
        name: "Updating Phase",
      },
      {
        id: "94948342-f768-11eb-9a03-0242ac130003",
        name: "Routing",
      },
      {
        id: "94948400-f768-11eb-9a03-0242ac130003",
        name: "API Calls",
      },
    ],
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "26 MAY 2021",
    projectTitle: "Nxt Trendz",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://nxtz.ccbp.tech/",
  },
  {
    id: uuidv4(),
    categoryId: "PROJECT",
    title: "10 SEP 2021",
    projectTitle: "Jobby",
    description:
      "Jobby application is an job application like LinkedIn, Naukari where users can log in and see the list of jobs with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/home-lg-bg.png",
    duration: "6 hrs",
    projectUrl: "https://jobbyar.ccbp.tech/",
  },
];

const icons = [
  {
    id: uuidv4(),
    imageUrl: "/python.png",
    name: "Python",
  },
  { id: uuidv4(), imageUrl: "/mysql.png", name: "MySQL" },
  { id: uuidv4(), imageUrl: "/html-5.png", name: "HTML" },
  { id: uuidv4(), imageUrl: "/css-3.png", name: "CSS" },
  { id: uuidv4(), imageUrl: "/nodejs.png", name: "Node Js" },
  { id: uuidv4(), imageUrl: "/physics.png", name: "React Js" },
];
class Career extends Component {
  state = { more: false };
  componentDidMount() {
    this.setState({ more: false });
  }

  onClickMore = () => {
    this.setState({ more: true });
  };

  render() {
    const { more } = this.state;
    return (
      <div className="career">
        <Navbar />
        <div className="career-body">
          <div className="career-page">
            <div className="cards-container">
              <ul className="ul-con">
                <li className="card">
                  <div className="face face1">
                    <div className="content">
                      <h3 className="ed-name">
                        Vaageswari Engineering College
                      </h3>
                      <div className="location-year-container">
                        <p className="location">
                          <GrLocation size={22} className="icon" />
                          Karimnagar
                        </p>
                        <p className="year">
                          <BiBook size={22} className="icon" />
                          2015 - 19
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="face face2">
                    <div className="content">
                      <p className="detail-info">
                        I completed my graduation in <sp />
                        <a href="https://www.vgsek.ac.in/" target="blank">
                          Vaageswari Engineering College
                        </a>
                        <sp />
                        under JNTU (University) Hyderabad. Graduated from
                        Computer Science Engineering stream.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="card">
                  <div className="face face1">
                    <div className="content">
                      <h3 className="ed-name">Pragna Junior College</h3>
                      <div className="location-year-container">
                        <p className="location">
                          <GrLocation size={22} className="icon" />
                          Karimnagar
                        </p>
                        <p className="year">
                          <BiBook size={22} className="icon" />
                          2013 - 15
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="face face2">
                    <div className="content">
                      <p className="detail-info">
                        I completed my Intermediate in
                        <sp />
                        <span>Pragna Junior College</span>
                        <sp /> in MPC stream under State Board(TS).
                      </p>
                    </div>
                  </div>
                </li>

                <li className="card">
                  <div className="face face1">
                    <div className="content">
                      <h3 className="ed-name">
                        Sri Sai Vidhyanikethan High School
                      </h3>
                      <div className="location-year-container">
                        <p className="location">
                          <GrLocation size={22} className="icon" />
                          Galipally
                        </p>
                        <p className="year">
                          <BiBook size={22} className="icon" />
                          2012 - 13
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="face face2">
                    <div className="content">
                      <p className="detail-info">
                        I completed my schooling in
                        <span> Sri Sai Vidhyanikethan High School</span> under
                        SSC Board(AP). Which is located in my home village.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="career-bottom">
            <div className="skills">
              <div className="head">
                <h2 className="nxtwave">
                  NxtWave <BsDot />
                  iB Hubs
                </h2>
                <p className="tag">Trained For "Full-Stack Development"</p>
              </div>
              <div>
                <p className="skill-heading">Learned Skills</p>
                <ul className="icons-cont">
                  {icons.map((each) => (
                    <li className="list-icon" key={each.id}>
                      <img
                        className="icons"
                        src={each.imageUrl}
                        alt={each.name}
                      />
                      <p className="names">{each.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="timeline-container">
            {more ? (
              ""
            ) : (
              <button
                type="button"
                className="know-more-btn"
                onClick={this.onClickMore}
              >
                Know More <GrFormDown className="arrow-down" />
              </button>
            )}

            {more ? (
              <div className="timeline">
                <p className="skill-heading">Some Projects</p>
                <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
                  {timelineItemsList.map((eachItem) => {
                    if (eachItem.categoryId === "COURSE") {
                      return <Course itemData={eachItem} key={eachItem.id} />;
                    }
                    return <Project itemData={eachItem} key={eachItem.id} />;
                  })}
                </Chrono>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Career;
