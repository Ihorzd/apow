import axios from "axios";
import { IUSer } from "../../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";


export const fetchUsers = () => async (dispatch: AppDispatch) =>{
    try{
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUSer[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    }   catch (e:any) {
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}