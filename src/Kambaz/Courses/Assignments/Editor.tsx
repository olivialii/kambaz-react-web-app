import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { Modal, FormControl, Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor({ show, handleClose, dialogTitle, assignmentTitle, setAssignmentTitle, addAssignment,}: {
    show: boolean; handleClose: () => void; dialogTitle: string; assignmentTitle: string; setAssignmentTitle: (title: string) => void;
    addAssignment: () => void; }) {



    return (
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
        </Modal.Header>

 
            

            <Modal.Body>
            <Form>
            <Form.Label>Title</Form.Label>
            <FormControl className= "mb-3" value={assignmentTitle} 
            onChange={(e) => { setAssignmentTitle(e.target.value); }} />

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
                                    <Form.Control type="date" defaultValue={"2025-03-12"} />
                                </Col>
                                <Col>
                                    <Form.Label>Available from</Form.Label>
                                    <Form.Control type="date" defaultValue={"2025-03-10"} />
                                </Col>
                                <Col>
                                    <Form.Label>Until</Form.Label>
                                    <Form.Control type="date" defaultValue={"2025-03-14"} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                </div>
            </Form>
            </Modal.Body>

           


        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> Cancel </Button>
        <Button variant="danger"
        onClick={() => {
        addAssignment();
        handleClose();
        }} > Save </Button>
        </Modal.Footer>
        </Modal>
    );
}