import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find(a => a._id === aid && a.course === cid);

    if (!assignment) {
        return <p>Assignment not found.</p>;
    }

    return (
        <div className="container">
            <h2>Edit Assignment</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" defaultValue={assignment.title} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} defaultValue="The assignment is available online" />
                </Form.Group>

                <div className="ps-5">
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Points</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" defaultValue={100} />
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
                                    <Form.Control type="text" defaultValue={"Student Name"} />
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col>
                                    <Form.Label>Due Date</Form.Label>
                                    <Form.Control type="date" defaultValue={""} />
                                </Col>
                                <Col>
                                    <Form.Label>Available from</Form.Label>
                                    <Form.Control type="date" defaultValue={""} />
                                </Col>
                                <Col>
                                    <Form.Label>Until</Form.Label>
                                    <Form.Control type="date" defaultValue={""} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                </div>
            </Form>
            <div className="d-flex gap-2 justify-content-end">
                <Button className="btn btn-secondary">Cancel</Button>
                <Button className="btn btn-danger">Save</Button>
            </div>
        </div>
    );
}