import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as db from "../../Database";
import { Form, FormControl, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor({

}: {
  show: boolean;
  handleClose: () => void;
}) {
  const { cid, aid } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const [assignment, setAssignment] = useState({
    title: "",
    description: "The assignment is available online",
    points: 100,
    assignTo: "Student Name",
    dueDate: "2025-03-12",
    availableFrom: "2025-03-10",
    until: "2025-03-14",
  });

  
  useEffect(() => {
    const foundAssignment = db.assignments.find((a) => a._id === aid && a.course === cid);
    if (foundAssignment) {
      setAssignment((prev) => ({
        ...prev,
        title: foundAssignment.title,
      }));
    }
  }, [cid, aid]);

 
  const handleChange = (field: string, value: string) => {
    setAssignment((prev) => ({ ...prev, [field]: value }));
  };

  const handleClose = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };


  const handleSave = () => {
    dispatch(addAssignment({ ...assignment, course: cid, _id: uuidv4()}));
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div className="container">
      <h2>Edit Assignment</h2>

      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <FormControl
            className="mb-3"
            value={assignment.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={assignment.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </Form.Group>

        <div className="ps-5">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Points
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                value={assignment.points}
                onChange={(e) => handleChange("points", e.target.value)}
              />
            </Col>
          </Form.Group>

          <Row className="mb-3">
            <Col sm={2} className="d-flex">
              <Form.Label>Assign</Form.Label>
            </Col>
            <Col sm={10}>
              <div className="border p-3 rounded">
                <Row className="mb-2">
                  <Col>
                    <Form.Label>Assign to</Form.Label>
                    <Form.Control
                      type="text"
                      value={assignment.assignTo}
                      onChange={(e) => handleChange("assignTo", e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={assignment.dueDate}
                      onChange={(e) => handleChange("dueDate", e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Available from</Form.Label>
                    <Form.Control
                      type="date"
                      value={assignment.availableFrom}
                      onChange={(e) => handleChange("availableFrom", e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Until</Form.Label>
                    <Form.Control
                      type="date"
                      value={assignment.until}
                      onChange={(e) => handleChange("until", e.target.value)}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Form>

      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="danger" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}
