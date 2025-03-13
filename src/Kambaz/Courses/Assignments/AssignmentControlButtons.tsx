import { FaTrash } from "react-icons/fa";

import { IoEllipsisVertical } from "react-icons/io5";

import { BiPlus } from "react-icons/bi";

export default function AssignmentControlButtons(
  { assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }
) {
  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to remove this assignment?");
    if (confirmed) {
      deleteAssignment(assignmentId);
    }
  };

  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={handleDelete} />
      <BiPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}