
import { FaPlus } from "react-icons/fa6";

import { Button, InputGroup, FormControl} from "react-bootstrap";
import { useState } from "react";
import AssignmentEditor from "./Editor";
import { BiSearch } from "react-icons/bi";


export default function AssignmentControls(
  { assignmentTitle, setAssignmentTitle, addAssignment }:
  { assignmentTitle: string; setAssignmentTitle: (title: string) => void; addAssignment: () => void; }) {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

 return (
  <InputGroup>
   <div id="wd-modules-controls" className="text-nowrap">
                <InputGroup className="mb-3">
                    <InputGroup.Text><BiSearch /></InputGroup.Text>
                    <FormControl placeholder="Search for Assignments" />
                
                

    <Button variant="secondary" size="lg" className="me-1 float-end ml-4" id="wd-add-group-btn" >

    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
    Group
    </Button>
    
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn" onClick={handleShow} >

       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </Button>

     {/* Implement the View Progress and Collapse All buttons with IDs wd-view-progress and wd-collapse-all */}
     <AssignmentEditor show={show} handleClose={handleClose} dialogTitle="Add Assignment"
       assignmentTitle={assignmentTitle} setAssignmentTitle={setAssignmentTitle} addAssignment={addAssignment} />



    </InputGroup>

   </div></InputGroup>
   
);}
