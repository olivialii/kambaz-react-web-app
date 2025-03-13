import Modules from "../Modules";
import CourseStatus from "./Status";
import FacultyProtected from "../../Account/FacultyProtected";

export default function Home() {
  return (
<div className="d-flex" id="wd-home">
  <div className="flex-fill me-3">
    
    <Modules />
  </div>

<FacultyProtected>
  <div className="d-none d-xl-block">
    <CourseStatus />
  </div>
</FacultyProtected>

</div>

);}
