import { useAssignmentsQuery } from "../../services/dataApi";
import React, { useState } from "react";

function AssignmentManager() {
    
    const [openAddModal, setOpenAddModal] = useState(false);
    const { data, error, isLoading, isSuccess } = useAssignmentsQuery();

    console.log(data);

    return (
        <div className="assignmentManager">
            <header>Assignment Manager</header>
            <div className='isErrorIsLoading'>
                {error && <p>An error occured</p>}
                {isLoading && <p>Loading...</p>}
            </div>
                {isSuccess && (
                <>
                    {data.map((task) => (
                    <div
                        id={task.id}
                        key={task.id}
                        completed={task.completed}
                        title={task.title} 
                        description={task.description}
                    >{task.assignment.course_id}</div>
                    ))}
                </>
                )}
        </div>
    )
};

export default AssignmentManager

