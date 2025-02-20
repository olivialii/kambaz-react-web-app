import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import { Form, Button } from "react-bootstrap";

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
                    <Form.Control as="textarea" rows={3} defaultValue="The assignment is available online"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Points</Form.Label>
                    <Form.Control type="number" defaultValue={ 0} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" defaultValue={ ""} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Available Date</Form.Label>
                    <Form.Control type="date" defaultValue={""} />
                </Form.Group>
                <div className="d-flex gap-2">
                    <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
                    <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-primary">Save</Link>
                </div>
            </Form>
        </div>
    );
}
