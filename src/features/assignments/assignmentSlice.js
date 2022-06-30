import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import { dataAPI } from "../../services/dataAPI";
import { normalize } from 'normalizr';
import { assignmentEntity } from '../../services/schemas';
// import assignments from '../../data/assignments.json';

console.log(dataAPI.assignments);

const assignmentsAdapter = createEntityAdapter();

export const fetchAssignment = createAsyncThunk(
  "assignments/fetchAssignment",
  async id => {
    const data = await dataAPI.assignments.show(id);
    const normalized = normalize(data, assignmentEntity);
    console.log(normalized);
    return normalized.entities;
  }
);

export const assignmentSlice = createSlice({
  name: 'assignments',
  initialState: assignmentsAdapter.getInitialState({ loading: false}),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAssignment.fulfilled, (state, action) => {
      console.log("in getAssignments fulfilled", action.payload);
      assignmentsAdapter.upsertMany(state, Object.values(action.payload.assignments));
    });
    builder.addMatcher(
      action => action.type && action.type.endsWith === "/pending",
      (state, action) => {
        state.loading = true;
      }
    );
  }
});

const reducer = assignmentSlice.reducer;
export default reducer;

export const {
  selectById: selectAssignmentByID,
  selectIds: selectAssignmentIds,
  selectEntities: selectAssingmentEntities,
  selectAll: selectAllAssignments,
  selectTotal: selectTotalAssignments
} = assignmentsAdapter.getSelectors(state => state.assignments);

export const selectCoursesByAssignmentId = assignmentId => 
  createSelector(
    [
      state => selectAssignmentByID(state, assignmentId), //selects the current assignment
      state => state.courses.ids.map(id => state.comments.entities[id]) // this is the same as selectAllCourses
    ],
    (assignment, courses) => {
      // return the courses for the given assignment only
      return Object.keys(courses)
        .map(c => courses[c])
        .filter(course => assignment.courses.includes(course.id));
    }
  )

