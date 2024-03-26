import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  const base: string = "/newToDo-react-ts-router-rtk/"

  return (
      <BrowserRouter basename={base}>
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
