import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signUpInfo: {},
  profileInfo: {},
  isSignUpValidate: false,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSignUpInfo: (state, action) => {
      state.signUpInfo = action.payload;
      state.isSignUpValidate = true;
     
    },
    setProfileInfo: (state, action) => {
      state.profileInfo = action.payload;
    },
  },
});

export const { setSignUpInfo, setProfileInfo } = dataSlice.actions;
export default dataSlice.reducer;
