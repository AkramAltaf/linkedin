import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthState, Credentials, User } from "../@types/userType";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5000/users`, {
        params: { email: credentials.email, password: credentials.password },
      });

      if (response.data.length === 0) {
        return thunkAPI.rejectWithValue("Invalid email or password");
      }

      return response.data[0]; // Return the authenticated user without password
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to login");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = { email: action.payload.email, id: action.payload.id };
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
