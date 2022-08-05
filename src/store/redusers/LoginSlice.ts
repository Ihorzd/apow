import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface emailState{
    email:string;
    isLoading: boolean;
    error: string;
    isAuthorizeEmail:boolean;
    isAuthorizeCode:boolean;
 
};
const initialState: emailState = {
    email:'',
    isLoading:false,
    isAuthorizeEmail:false,
    isAuthorizeCode:false,
    error:''
    
}

export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
    
        emailPost(state, action){
            state.email= action.payload
        },
        emailAuthorizeEmail(state){
            state.isAuthorizeEmail = true
        },
        codeAuth(state){
            state.isAuthorizeCode = true
        },
        codeNotAuth(state){
            state.isAuthorizeCode = false
        }
    }
})

export default loginSlice.reducer