
import { Link } from "react-router-dom";
import { FormControl, Card} from "react-bootstrap";


export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {
  

    return (
      <div id="wd-dashboard">
        <h1>Dashboard</h1>
        <h5>
        New Course
        <button className="btn btn-primary float-end"
                onClick={addNewCourse} id="wd-add-new-course-click">
          Add
        </button>
        <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5>
      <br />
      <FormControl value={course.name} className="mb-2" 
       onChange={(e) => setCourse({ ...course, name: e.target.value }) } />

      <FormControl value={course.description} rows={3}
       onChange={(e) => setCourse({ ...course, description: e.target.value }) } />


      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
              <Card>
              <Link to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/code.jpg" variant="top" width="100%" height={160} />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name} </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    {course.description} </Card.Text>
                    <button className="btn btn-primary">Go </button>
                    <button onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                    </button>
                    <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button>


                </Card.Body>
              </Link>
              </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
);}




