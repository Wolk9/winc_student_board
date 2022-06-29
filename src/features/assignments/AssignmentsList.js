import React from 'react';
import { useSelector } from 'react-redux';
import {
    
    selectTotalAssignments,
    selectAllAssignments,
} from './assignmentSlice';
import { AssignmentDisplay } from './assignmentDisplay';

export function AssignmentList() {
    const assignmentsCount = useSelector(selectTotalAssignments);
    const assignments = useSelector(selectAllAssignments);
   // const dispatch = useDispatch();
    
    console.log(assignments);

    return (
        <div>
            <div>
                There are {assignmentsCount} assignments. {assignmentsCount === 0 && 'there are no assignments'}
            </div>
            <hr />
            {assignments.map((assignment) =>
                <div key={assignment.id}>
                    <AssignmentDisplay id={assignment.id} />
                </div>
            )}
        </div>
    );
}