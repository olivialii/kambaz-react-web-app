import { useParams } from "react-router";
import * as db from "../../Database";

import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");
  const addModule = () => {
    setModules([ ...modules, { _id: uuidv4(), name: moduleName, course: cid, lessons: [] } ]);
    setModuleName("");
  };

  
  return (
    <div className="wd-modules">
      

<div id="wd-modules" className="list-group rounded-0">

<div className="pb-2">
<ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModule} />
</div>
        
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </li>
    ))}</ul>)}</li>))}</div>
</div>

  );}
  