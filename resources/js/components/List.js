import Task from "./Task";
import React from "react";

export default function List({ tasks, isLoading, isError, refetch }) {
    return (
        <ul className="list-group mt-4">
            {isLoading ? (
                <h2 className="text-center">Loading...</h2>
            ) : isError ? (
                <h2 className="text-center">Error getting tasks.</h2>
            ) : tasks.length > 0 ? (
                tasks.map((task) => {
                    return (
                        <Task
                            taskName={task.task_name}
                            key={task.id}
                            taskId={task.id}
                            refetch={refetch}
                        />
                    );
                })
            ) : (
                <h2 className="text-center">No tasks available.</h2>
            )}
        </ul>
    );
}
