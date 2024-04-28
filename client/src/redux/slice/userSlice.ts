import { createSlice } from '@reduxjs/toolkit';
import { TUserContext } from '../../types/generalTypes';

const initialState: { current: TUserContext | null } = {
  current: null,
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.current = action.payload;
    },

    updateUserSuccess: (state, action) => {
      state.current = action.payload;
    },

    signOut: (state) => {
      state.current = null;
    },
  },
});

// Export automatic actions created by the slice function
export const { signInSuccess, updateUserSuccess, signOut } = userSlice.actions;

// Export reducers to be used in the redux store
export default userSlice.reducer;
