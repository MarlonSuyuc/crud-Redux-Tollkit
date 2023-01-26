import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    title: "Task 1",
    descripcion: "Task 1 descripcion",
    realizado: false,
  },
  {
    id: "2",
    title: "Task 2",
    descripcion: "Task 2 descripcion",
    realizado: false,
  },
];

// const initialState = {
//  totalTasks : 0,
//  tasksList : [
//   {
//     id: "1",
//     title: "Task 1",
//     descripcion: "Task 1 descripcion",
//     realizado: false,
//   },
// ]
// }
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Estos reducers son las multiples funciones que permitira actualizar el estado
    addTask: (state, action) => {
      // console.log({ state });
      // console.log({ action });
      // console.log(action.payload);

      state.push(action.payload);

      // state.tasksList = [...state, action.payload];
      // state.totalTasks += 1 Esto va con la ssegunda forma de inicializar el estado lo que esta arriba comentado const initialState = {}
    },

    deleteTask: (state, action) => {
      // console.log(action.payload);

      // El payload es el valor que esta en TaskList.jsx en la funcion handleDelete
      const taskFound = state.find((task) => task.id === action.payload);
      console.log(taskFound);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },

    updateTask: (state, action) => {
      // console.log(action.payload);
      const { id, title, descripcion } = action.payload;
      const taskFound = state.find((task) => task.id === id);
      if (taskFound) {
        taskFound.title = title;
        taskFound.descripcion = descripcion;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
