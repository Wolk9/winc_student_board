import React from 'react';
import { useSelector } from 'react-redux';
import { selectCoursesByAssignmentId } from "./assignmentSlice"
import { selectUserById, selectUserEntities } from "../users/userSlice";

export function AssignmentDisplay({ id }) {
    const assignment = useSelector(state => state.assignments.entities[id]);
    const courses = useSelector(selectCoursesByAssignmentId(id));
    const person = useSelector(state => selectUserById(state.assignment.person));
    const users = useSelector(selectUserEntities);
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>[assignment.assignment.course_id}</h3>
            </div>
    )

}