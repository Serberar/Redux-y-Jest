import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  userName: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  userName: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.userName = action.payload; 
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userName = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;