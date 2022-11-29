import React from "react";
import { useState } from "react";
import "../AddTodo.css";

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Please fill all details");
        } else {
            props.addTodo(title, desc);
            props.displayAddModel();
        }
        setTitle("");
        setDesc("");
    };
    return (
        <div className="add-container">
            <div className="model">
                <h2>Add Your Todo</h2>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            className="form-control"
                            id="title"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input
                            type="text"
                            value={desc}
                            onChange={(e) => {
                                setDesc(e.target.value);
                            }}
                            className="form-control"
                            id="desc"
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTodo;
