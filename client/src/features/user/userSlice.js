import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

const getUserfromLocalStorage=()=>{
    return JSON.parse(localStorage.getItem('user'))||null
}
const initialState={
    user:getUserfromLocalStorage()
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        loginUser: (state, action) => {
           const user={...action.payload.user,token:action.payload.jwt}
           state.user=user
           localStorage.setItem('user',JSON.stringify(user))
          },
          logoutUser: (state) => {
           state.user=null
           localStorage.removeItem('user')
           toast.success("Logged out succesfully!")
          },
    }
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;