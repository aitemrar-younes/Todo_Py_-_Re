import "./Task.css";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
/* import AutoDeleteIcon from '@mui/icons-material/AutoDelete'; */
import EditIcon from "@mui/icons-material/Edit";

const Task = ({ task }) => {
  console.log(task);
  return (
    <div className="task" key={task.id}>
      <div className="title">{task.title}</div>
      <div className="desc">{task.description}</div>
      <div className="task-footer">
        <div className="date">{task.created_at}</div>
        <div className="actions">
          <button className="btn btn-edit">
            <EditIcon />
          </button>
          <button className="btn btn-delete">
            <DeleteOutlineIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
