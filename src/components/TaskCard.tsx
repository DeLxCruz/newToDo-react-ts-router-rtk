import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { deleteTask } from "../features/tasks/taskSlice";
import { Task } from "../interfaces/task.interface";

function TaskCard({ task }: { task: Task }) {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div key={task.id}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <div>
        <button>
          <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </button>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
