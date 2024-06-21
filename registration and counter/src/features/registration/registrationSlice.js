import { createSlice } from '@reduxjs/toolkit';

export const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  },
  reducers: {
    register: (state, action) => {
      const { fullName, email, username, password, confirmPassword } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state.username = username;
      state.password = password;
      state.confirmPassword = confirmPassword;
    },
  },
});

export const { register } = registrationSlice.actions;
export default registrationSlice.reducer;