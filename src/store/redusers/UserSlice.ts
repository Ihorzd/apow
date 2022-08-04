import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { IUSer } from "../../models/IUser"


interface UserState {
    users: IUSer[],
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true;
        },
        usersFetchingSuccess(state,  action: PayloadAction<IUSer[]>) {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        }
    }

})
export default userSlice.reducer;