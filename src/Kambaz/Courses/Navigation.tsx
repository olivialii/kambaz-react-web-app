import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  const location = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kambaz/Courses/${cid}/${link}`;
        const isActive = location.pathname === path;
        return (
          <Link 
            key={link} 
            to={path} 
            className={`list-group-item border-0 p ${isActive ? "active text-danger color-red" : ""}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}