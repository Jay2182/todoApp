import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
    return (
        <main>
            <div className="container my-5">
                <div className="row justify-content-center align-items-center p-4">
                    <div className="col-8">
                        <h2 className="text-center my-3">Todo List</h2>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <button
                            className="btn btn-primary"
                            onClick={props.displayAddModel}
                        >
                            <span>+</span> Add
                        </button>
                    </div>
                </div>
                <hr />
                {props.todos.length === 0 ? (
                    <div className="emptyListMsg">
                        <h4>All Task Done</h4>
                        <img
                            className="bg-img"
                            src={process.env.PUBLIC_URL + "/logo.png"}
                            alt=""
                            width={100}
                        />
                    </div>
                ) : (
                    props.todos.map((todo) => {
                        return (
                            <TodoItem
                                todo={todo}
                                key={todo.sno}
                                onDelete={props.onDelete}
                            />
                        );
                    })
                )}
            </div>
        </main>
    );
};

export default Todos;
