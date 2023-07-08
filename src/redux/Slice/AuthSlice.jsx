import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axiosInstance from '../../Api/apiUrl'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import AuthInstance from '../../Api/AuthInstance';

const initialState = {
  loading: false,
  user: {}, // for user object
  redirectTo: null,
  Logouttoggle: false,
  userName: false,
  redirectReg: null
}

export const registerUser = createAsyncThunk("signup", async (user) => {
  try {
    const ress = await AuthInstance.post("register", user);
    console.log(ress?.data);
    return ress?.data;

  } catch (error) {
    toast(error?.response?.data?.msg);
    console.log(error);
  }
});

export const loginRequest = createAsyncThunk("login", async (user) => {
  try {
    const res = await AuthInstance.post("login", user);
    return res?.data;
  } catch (error) {
    toast(error?.response?.data?.message);
    console.log(error);
  }
});

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    //check for auth token 
    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.Logouttoggle = true;
      }
    },

    logout: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      toast("logout successfully done")
      state.Logouttoggle = false

    },

    
    RegLog: (state, { payload }) => {
      localStorage.removeItem("name");
      state.Logouttoggle = false
      state.redirectTo = null
    },

    redirectToo: (state, { payload }) => {
      state.redirectTo = payload
    },

    redirectTo_Register: (state, { payload }) => {
      state.redirectReg = payload
    }


  },

  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      if (payload?.success === true) {
        localStorage.setItem("name", payload.data.name)
        state.redirectReg = "/login"
        state.loading=false
        //toast(payload?.token)
        toast(`hi ${payload?.data?.name} Register successfully done`)
      }

    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    //login
    [loginRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [loginRequest.fulfilled]: (state, { payload }) => {

      if (payload?.status === 200) {
        // console.log(payload,"authhdka");
        localStorage.setItem("token", payload?.token);
        localStorage.setItem("name", payload?.user.name);
        localStorage.setItem("email", payload?.user.email);
        state.Logouttoggle = true
        state.redirectTo = "/"
        toast(payload?.message)
      }

    },
    [loginRequest.rejected]: (state, action) => {
      state.loading = false;

    },
  },
})

export const {
  check_token, redirectToo, logout, redirectTo_Register,RegLog } = AuthSlice.actions

export default AuthSlice.reducer