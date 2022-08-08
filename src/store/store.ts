import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReduser from './redusers/UserSlice';
import emailReduser from './redusers/LoginSlice';
import userInfoSlice from './redusers/UserInfoSlice'
const rootReduser = combineReducers({
    userReduser,
    emailReduser,
    userInfoSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']