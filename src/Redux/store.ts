import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "../state/todolists-reducer";
import {tasksReducer} from "../state/tasks-reducer";

const rootReducer = combineReducers({
    todoList: todolistsReducer,
    tasks: tasksReducer
})

export type AppRootStoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store;