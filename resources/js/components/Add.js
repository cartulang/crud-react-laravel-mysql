import React, { useState } from "react";
import axios from "axios";

export default function Add({ isLoading, refetch }) {
    const [taskName, setTaskName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(e) {
        setTaskName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        axios
            .post("http://localhost:8000/api/tasks", {
                taskName: e.target.elements[0].value,
            })
            .then((res) => {
                refetch();
                setIsSubmitting(false);
            })
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <div className="w-50 mx-auto">
                <h1 className="text-center">Add Task</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="task name"
                        autoComplete="off"
                        className="form-control"
                        value={taskName}
                        onChange={handleChange}
                    />
                    <button
                        className={`btn btn-primary w-100 mt-2 ${
                            isLoading
                                ? "disabled"
                                : isSubmitting
                                ? "disabled"
                                : ""
                        }`}
                    >
                        Add task
                    </button>
                </form>
            </div>
        </div>
    );
}
