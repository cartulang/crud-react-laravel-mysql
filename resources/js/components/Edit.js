import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [taskName, setTaskName] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/tasks/${id}`)
            .then((res) => {
                setTaskName(res.data.task_name);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
            });
    }, []);

    function handleChange(e) {
        setTaskName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        axios
            .put(`http://localhost:8000/api/tasks/update/${id}`, {
                taskName: e.target.elements[0].value,
                id,
            })
            .then((res) => {
                alert("Task updated!");
                setIsSubmitting(false);
                navigate("/");
            })
            .catch((err) => {
                setError(err.response.data);
                setIsSubmitting(false);
            });
    }
    return (
        <div className="mt-4">
            <div className="w-50 mx-auto">
                {isLoading ? (
                    <h2 className="text-center">Loading...</h2>
                ) : (
                    <>
                        <h2 className="text-center">Edit Task</h2>
                        {error ? (
                            <p className="text-center text-danger">
                                {error.message}
                            </p>
                        ) : (
                            ""
                        )}
                        <form onSubmit={handleSubmit} className="w-50 mx-auto">
                            <input
                                type="text"
                                placeholder="new task name"
                                className="form-control"
                                autoComplete="off"
                                value={taskName}
                                onChange={handleChange}
                                name="taskName"
                            />
                            <button
                                className={`btn btn-primary w-100 mt-2 ${
                                    isSubmitting ? "disabled" : ""
                                }`}
                            >
                                Submit
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
