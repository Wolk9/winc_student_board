import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchAssignment } from '../assignments/assignmentSlice';

const usersAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: 'persons',
  initialState: usersAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAssignment.fulfilled, (state, action) => {
      usersAdapter.upsertMany(state, Object.values(action.payload.persons));
    })
  }
});

const reducer = userSlice.reducer;
export default reducer;

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers
} = usersAdapter.getSelectors(state => state.users);
