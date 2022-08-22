import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoContext from "../contexts/TodoContext";
import AddTodo from "./AddTodo";
import NavBar from "./NavBar";
import TodoList from "./TodoList";

const App = () => {

    return (
        <TodoContext>
        <Router>
            <NavBar></NavBar>
            <div className='uk-container'>
                <Routes>
                    <Route path="/create" element={<AddTodo />} />
                    <Route path="/" element={<TodoList />} />
                </Routes>
            </div>
        </Router>
    </TodoContext>
    );
}

export default App;