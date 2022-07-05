import React, {useReducer, useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {addTaskAC, removeTaskAC, TasksReducer} from "./reducers/TasksReducer";
import {changeFilterAC, FilterReducer} from "./reducers/FilterReducer";

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks, dispatchTasks] = useReducer(TasksReducer, [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);

    function removeTask(id: string) {
        dispatchTasks(removeTaskAC(id))
    }

    function addTask(title: string) {
        dispatchTasks(addTaskAC(title))
    }

    let [filter, dispatchFilter] = useReducer(FilterReducer, "all");

    function changeFilter(value: FilterValuesType) {
        dispatchFilter(changeFilterAC(value));
    }

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}/>
        </div>
    );
}

export default App;
