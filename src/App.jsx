// import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./componets/TaskForm";
import TaskList from "./componets/TaskList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// useDispatch: Funciones que llamamos para actualizar el estado(hacer algo)
// useSelector: Forma de traer los datos dentro del estado(seleccionar algo dentro del estado)
export const App = () => {
  // useSelector: accedemos al estado que esta en el store.js (tasks)
  // const taskState = useSelector((state) => state.tasks);
  // console.log(taskState);
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />}></Route>
            <Route path="/create-task" element={<TaskForm />}></Route>
            <Route path="/edit-task/:id" element={<TaskForm />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
