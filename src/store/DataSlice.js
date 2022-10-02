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
      if (Object.keys(state.signUpInfo).length === 4) {
        state.isSignUpValidate = true;
      }
    },
    setValidate: (state, action) => {
      state.isSignUpValidate = action.payload;
    },
    setProfileInfo: (state, action) => {
      state.profileInfo = action.payload;
    },
  },
});

export const { setSignUpInfo, setProfileInfo, setValidate } = dataSlice.actions;
export default dataSlice.reducer;
