import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import courseReducer from '../features/courses/courseSlice';
import assignmentReducer from '../features/assignments/assignmentSlice';

const store = configureStore({
  reducer: {
    persons: userReducer,
    courses: courseReducer,
    assignments: assignmentReducer,
  },
});

export default store;
