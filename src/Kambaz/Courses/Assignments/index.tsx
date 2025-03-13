import { useParams } from "react-router";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment }
  from "./reducer";
import * as db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react";
import { MdOutlineAssignment } from "react-icons/md";
import { BiPlus, BiSearch, BiCaretDown } from "react-icons/bi";
import { InputGroup, FormControl } from "react-bootstrap";
import FacultyProtected from "../../Account/FacultyProtected";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";



export default function Assignments() {
    const { cid } = useParams();
    const [assignmentTitle, setAssignmentTitle] = useState("");
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const dispatch = useDispatch();

    return (
        <div className="wd-assignments">

        
    <FacultyProtected>
      <div className="pb-2">
      <AssignmentControls assignmentTitle={assignmentTitle} setAssignmentTitle={setAssignmentTitle}
        addAssignment={() => {
          dispatch(addAssignment({ title: assignmentTitle, course: cid }));
          setAssignmentTitle("");
        }} />
      </div>
      </FacultyProtected>
  
      
            
            
            <ul id="wd-assignments" className="list-group rounded-0">

                            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" /> <BiCaretDown/> <span className="p-1">ASSIGNMENTS </span>
                            <div className="float-end">
                            <BiPlus/>
                            <IoEllipsisVertical className="fs-4" />
                            </div>
            </div>


            {assignments
                        .filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) => (
                            <ul className="wd-lessons list-group rounded-0" key={assignment._id}>
                                <li className="wd-lesson list-group-item p-3 ps-1">
                                    
                                    
                                    {!assignment.editing && (
                                        <div><BsGripVertical className="me-2 fs-3" />
                                            <MdOutlineAssignment />
                                            <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link p-3">
                                                {assignment.title}
                                            </a>
                                            <AssignmentControlButtons assignmentId={assignment._id}
                  deleteAssignment={(assignmentId) => {
                    dispatch(deleteAssignment(assignmentId));
                  }}/>
                                       
                                        </div>
                                    )}

                                    {assignment.editing && (
                                        <FormControl 
                                            className="w-50 d-inline-block"
                                            onChange={(e) =>
                                                dispatch(updateAssignment({ ...assignment, title: e.target.value }))
                                            }
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    dispatch(updateAssignment({ ...assignment, editing: false }));
                                                }
                                            }}
                                            
                                            defaultValue={assignment.title}
                                            
                                        />
                                        
                                        
                                    )}

                

                                </li>
                            </ul>
                       
                    ))} 
                    </li>
            </ul>
        </div>
    );
}
