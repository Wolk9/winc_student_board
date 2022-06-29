import { createSlice } from '@reduxjs/toolkit';
import assignments from '../../data/assignments.json';

const initialState = {
  assignments,
  isLoading: false,
  isError: false,
};

console.log(assignments);

export const assignmentSlice = createSlice({
  name: 'assignment',
  initialState,
  reducers: {
    createAssignment(state, action) { },
    updateAssignment(state, action) { },
    deleteAssignment(state, action) { },
  },
});

const { actions, reducer } = assignmentSlice;

export const { createAssignment, updateAssignment, deleteAssignment } = actions;

export default reducer;
