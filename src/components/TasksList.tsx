import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { Task } from "../interfaces/task.interface";
import TaskCard from "./TaskCard";

function TasksList() {
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <div>
      <h1>Tasks List</h1>
      <Link to={"/create-task"}>Create new task</Link>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <section>
          <p>Tasks: {tasks.length}</p>
          {tasks.map((task: Task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </section>
      )}
    </div>
  );
}

export default TasksList;
