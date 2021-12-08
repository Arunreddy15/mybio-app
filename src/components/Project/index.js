import { AiFillCalendar } from "react-icons/ai";
import "./project.css";

const Project = (props) => {
  const { itemData } = props;
  console.log(itemData);
  const {
    projectTitle,
    imageUrl,
    description,
    duration,
    projectUrl,
  } = itemData;
  console.log(description);
  return (
    <div className="projectCard-Container">
      <img src={imageUrl} alt="project" className="projectImage" />
      <div className="heading-duration">
        <h1 className="heading">{projectTitle}</h1>
        <div className="duration">
          <AiFillCalendar size={20} />
          <p className="duration-time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} target="blank" className="visit">
        Visit
      </a>
    </div>
  );
};
export default Project;
