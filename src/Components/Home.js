import React from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { useState, useEffect } from "react";

const Home = () => {
    let initTodo = [];
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo) => {
        setTodos(
            todos.filter((e) => {
                return e !== todo;
            })
        );
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const displayAddModel = () => {
        const model = document.querySelector(".add-container");
        if (model.style.display === "block") {
            model.style.display = "none";
        } else {
            model.style.display = "block";
        }
    };
    const addTodo = (title, desc) => {
        let sno = Date.now();
        const mytodo = {
            sno: sno,
            title: title,
            desc: desc,
        };
        setTodos([...todos, mytodo]);
    };
    // const [todos, setTodos] = useState([]);
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return (
        <>
            <AddTodo addTodo={addTodo} displayAddModel={displayAddModel} />
            <Todos
                todos={todos}
                onDelete={onDelete}
                displayAddModel={displayAddModel}
            />
        </>
    );
};

export default Home;
