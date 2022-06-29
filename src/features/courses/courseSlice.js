import { createSlice } from '@reduxjs/toolkit';
import courses from '../../data/courses.json';

const initialState = {
  courses,
  isLoading: false,
  isError: false,
};

console.log(courses);

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    createCourse(state, action) { },
    updateCourse(state, action) { },
    deleteCourse(state, action) { },
  },
});

const { actions, reducer } = courseSlice;

export const { createCourse, updateCourse, deleteCourse } = actions;

export default reducer;
