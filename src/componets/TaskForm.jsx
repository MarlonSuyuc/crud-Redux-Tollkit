import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/cart/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const inicialState = { title: "", descripcion: "" };

const TaskForm = () => {
  const [task, setTask] = useState(inicialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(task);

    if (params.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    // console.log(params);
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label className="block text-sm font-bold">Task:</label>
      <input
        name="title"
        type="text"
        placeholder="Write title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        // autoFocus
      />
      <label>
        Description:
        <textarea
          type="text"
          name="descripcion"
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          placeholder="Write a description"
          onChange={handleChange}
          value={task.descripcion}
        ></textarea>
      </label>
      <button className="bg-indigo-600 px-2 py-1">save</button>
    </form>
  );
};

export default TaskForm;
