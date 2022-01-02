import Add from "./Add";
import List from "./List";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/tasks")
            .then((res) => {
                setTasks(res.data);
                setIsError(false);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsError(true);
                setIsLoading(false);
            });
    }, []);

    const refetch = function () {
        axios
            .get("http://localhost:8000/api/tasks")
            .then((res) => {
                setTasks(res.data);
                setIsError(false);
            })
            .catch((err) => {
                setIsError(true);
            });
    };
    return (
        <section>
            <div className="w-50 mx-auto">
                <Add isLoading={isLoading} refetch={refetch} />
                <List
                    tasks={tasks}
                    isLoading={isLoading}
                    isError={isError}
                    refetch={refetch}
                />
            </div>
        </section>
    );
}
