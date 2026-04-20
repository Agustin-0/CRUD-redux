import { createSlice } from "@reduxjs/toolkit";


//crear un estado inicial para el slice de tareas
const initalState = [];

const taskSlice = createSlice({
    //Nombre del slice
    name: 'tasks',
    initialState: initalState,

    //reducers -> funciones que especifican como el estado debe cambiar
    reducers: {
        //añadir tarea
        addTask: (state, action) => {
            state.push({
                id: String(Date.now()),
                text: action.payload, //<- payload carga lo que se le manda port parametro
                completed: false,
            })
        },

        //toggleComplete
        toggleComplete: (state, action) => {
            const taskId = action.payload;
            const existingTaks = state.find(task => task.id === taskId)
            if(existingTaks){
                //alternamos el truth
                existingTaks.completed = !existingTaks.completed 
            }
        },

        //accion de eliminar la tarea
        deleteTask: (state, action) => {
            const taskId = action.payload;
            return state.filter(task => task.id !== task.id)
        },

        //accion para establecer el array de atareas que se realciona con el localStorage
        setTasks: (state, action) => {
            return action.payload
        }

    }
})

// exportamos las acciones que son las funciones que despacharemos desde nuestros componentes
export const { addTask, toggleComplete, deleteTask, setTasks} = taskSlice.actions;

//exportar el reducir para uqe pueda ser utilizado enel store

export default taskSlice.reducer;