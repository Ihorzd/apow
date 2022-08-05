import axios from "axios";
import { useAppSelector } from "../../hooks/redux";
import { IUSer } from "../../models/IUser";
import { AppDispatch } from "../store";
import {loginSlice} from "./LoginSlice";
import { userSlice } from "./UserSlice";
import { APP_URL } from "../../services/servicesUtils";


export const fetchUsers = () => async (dispatch: AppDispatch) =>{
    try{
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUSer[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    }   catch (e:any) {
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}
export const fetchEmail = (email:string) => async (dispatch:AppDispatch) => {
    try{
        
        const response = await axios.post(`${APP_URL}api/Accounts/GeneratePassword`,{email:email,languageID: "string"})
        if(response.data === 'done'){
            dispatch(loginSlice.actions.emailAuthorizeEmail())
            dispatch(loginSlice.actions.emailPost(email))
            console.log('ok')
            
        }
    } catch(e){
        console.log(e);
    }
}

export const fetchCode =(data:any) => async (dispatch:AppDispatch) => {
    try{
        const response = await axios.post(`${APP_URL}api/Accounts/LoginWithCode`,data);
        console.log('uhkl')
    } catch(e){
        console.log(e)
    }
} 