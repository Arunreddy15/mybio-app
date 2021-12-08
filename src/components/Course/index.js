import { AiFillClockCircle } from "react-icons/ai";
import "./course.css";

const Course = (props) => {
  const { itemData } = props;
  console.log(itemData);
  const { courseTitle, description, duration, tagsList } = itemData;
  console.log(tagsList);
  return (
    <div className="course-card-container">
      <div className="heading-duration">
        <h1 className="heading">{courseTitle}</h1>
        <div className="duration">
          <AiFillClockCircle size={20} />
          <p className="duration-time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul>
        {tagsList.map((each) => (
          <li key={each.id} className="comps">
            {each.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Course;
