import React from "react";

const TodoItem = ({ todo, onDelete }) => {
    return (
        <div className="m-3 p-2 border pl-5 todo-item">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button
                className="btn btn-sm btn-danger delete-btn"
                onClick={() => onDelete(todo)}
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
