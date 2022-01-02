import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Task({ taskName, taskId, refetch }) {
    function handleDelete(e) {
        axios
            .delete(`http://localhost:8000/api/tasks/delete/${taskId}`)
            .then((res) => refetch())
            .catch((err) => console.log(err));
    }
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <span>{taskName}</span>
            <span>
                <Link className="btn btn-success me-2" to={`/edit/${taskId}`}>
                    Edit
                </Link>
                <button className="btn btn-danger" onClick={handleDelete}>
                    Delete
                </button>
            </span>
        </li>
    );
}
