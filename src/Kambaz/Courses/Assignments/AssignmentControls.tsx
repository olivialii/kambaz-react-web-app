import { FaPlus } from "react-icons/fa6";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

export default function AssignmentControls(
  {}:
  {assignmentTitle: string; setAssignmentTitle: (title:string) => void; addAssignment: () => void;}
) {
  const { cid } = useParams();
  const navigate = useNavigate();

  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <BiSearch />
        </InputGroup.Text>
        <FormControl placeholder="Search for Assignments" />

        <Button variant="secondary" size="lg" className="ms-2" id="wd-add-group-btn">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </Button>

        {/* Navigates to Assignment Editor Page */}
        <Button
          variant="danger"
          size="lg"
          className="ms-2"
          id="wd-add-assignment-btn"
          onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/Editor`)}
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>
      </InputGroup>
    </div>
  );
}
