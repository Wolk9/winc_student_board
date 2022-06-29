import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchAssignment } from '../assignments/assignmentSlice';

const coursesAdapter = createEntityAdapter();

export const courseSlice = createSlice({
  name: 'course',
  initialState: coursesAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [fetchAssignment.fulfilled]: (state, action) => {
      coursesAdapter.upsertMany(state, Object.values(action.payload.courses));
    }
  }
});

const reducer = courseSlice.reducer;

export const {
  selectById: selectCourseByID,
  selectIds: selectCourseIds,
  selectEntities: selectCourseEntities,
  selectAll: selectAllCourses,
  selectTotal: selectTotalCourses
} = coursesAdapter.getSelectors(state => state.Courses);

export default reducer;
