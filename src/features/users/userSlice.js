import { createSlice } from '@reduxjs/toolkit';
import persons from '../../data/persons.json';

const initialState = {
  persons,
  isLoading: false,
  isError: false,
};

console.log(persons);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser(state, action) { },
    updateUser(state, action) { },
    deleteUser(state, action) { },
  },
});

const { actions, reducer } = userSlice;

export const { createUser, updateUser, deleteUser } = actions;

export default reducer;
