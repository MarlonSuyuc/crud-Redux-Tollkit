import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/cart/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  // console.log(tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // console.log(id);
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks {tasks.length}</h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-3">
        {tasks.map(({ id, title, descripcion }) => (
          <div key={id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >
                  Delete
                </button>
              </div>
            </header>
            <p className="text-xs text-slate-400">{descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
