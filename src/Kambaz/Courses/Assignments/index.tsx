import { useParams } from "react-router";
import * as db from "../../Database";

import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";

import { MdOutlineAssignment } from "react-icons/md";
import { BiPlus, BiSearch, BiCaretDown } from "react-icons/bi";
import { InputGroup, FormControl } from "react-bootstrap";



export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    return (
        <div>
            <div className="container">
                <InputGroup className="mb-3">
                    <InputGroup.Text><BiSearch /></InputGroup.Text>
                    <FormControl placeholder="Search for Assignments" />
                    <button className="btn btn-red"> <BiPlus /> Assignment</button>
                    <button className="btn btn-secondary"> <BiPlus /> Group</button>
                </InputGroup>
            </div>
            <br /><br /><br />
            
            <ul id="wd-modules" className="list-group rounded-0">

                                      <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" /> <BiCaretDown/> <span className="p-1">ASSIGNMENTS </span>
                            <div className="float-end">
                            <BiPlus/>
                            <IoEllipsisVertical className="fs-4" />
                            </div>
                            </div>
                {assignments
                    .filter(assignment => assignment.course === cid)
                    .map(assignment => (

                            <ul className="wd-lessons list-group rounded-0">
                                <li className="wd-lesson list-group-item p-3 ps-1">
                                    <BsGripVertical className="me-2 fs-3" />
                             
                                    <MdOutlineAssignment />
                                    <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link p-3">
                                        {assignment.title}
                                    </a>
                                    <LessonControlButtons />
                                </li>
                            </ul>
                       
                    ))} 
                    </li>
            </ul>
        </div>
    );
}
