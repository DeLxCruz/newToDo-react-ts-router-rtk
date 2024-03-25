import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addTask, editTask } from "../features/tasks/taskSlice";

type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const foundTask = tasks.find((task) => task.id === params.id);
      if (foundTask) {
        setTask(foundTask);
      }
    }
  }, [params, tasks]);

  const handleInputChange = ({
    target: { name, value },
  }: handleInputChange) => {
    setTask({
      ...task,
      [name.trim()]: value.trim(),
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (params.id) {
      dispatch(
        editTask({
          ...task,
          id: params.id,
        })
      );
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
      setTask({
        title: "",
        description: "",
      });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id=""
        onChange={handleInputChange}
        value={task.title}
      />

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id=""
        onChange={handleInputChange}
        value={task.description}
      ></textarea>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
