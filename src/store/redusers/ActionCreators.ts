import axios from "axios";
import { useAppSelector } from "../../hooks/redux";
import { IUSer } from "../../models/IUser";
import { AppDispatch } from "../store";
import { loginSlice } from "./LoginSlice";
import { userSlice } from "./UserSlice";
import { userInfoSlice } from "./UserInfoSlice";
import { APP_URL } from "../../services/servicesUtils";


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        /*
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUSer[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))*/
    } catch (e: any) {
        /*dispatch(userSlice.actions.usersFetchingError(e.message))*/
    }
}
export const fetchEmail = (email: string) => async (dispatch: AppDispatch) => {
    try {

        const response = await axios.post(`${APP_URL}api/Accounts/GeneratePassword`, { email: email, languageID: "string" })
        if (response.data === 'done') {
            dispatch(loginSlice.actions.emailAuthorizeEmail())
            dispatch(loginSlice.actions.emailPost(email))
            console.log('ok')

        }
    } catch (e) {
        console.log(e);
    }
}

export const fetchCode = (data: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post(`${APP_URL}api/Accounts/LoginWithCode`, data);
        const refreshToken = await axios.post(`${APP_URL}api/Accounts/RefreshToken`,
            {
                token: response.data.jwt.token,
                refreshToken: response.data.jwt.refreshToken
            })
        console.log(refreshToken);
        if (refreshToken.status === 200) dispatch(loginSlice.actions.codeAuth())

        localStorage.setItem('token', JSON.stringify(refreshToken.data.token))
        localStorage.setItem('refreshToken', JSON.stringify(refreshToken.data.refreshToken))

    } catch (e) {
        dispatch(loginSlice.actions.codeNotAuth())
    }
}

export const fetchLogout = () => async (dispatch: AppDispatch) => {
    try {
        let token = localStorage.getItem('token')
        token = 'bearer ' + token?.slice(1, -1)
        const logout = await axios.post(`https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/Logout`, {}, {
            headers: {

                "Authorization": token,

            }
        })

        if (logout.status === 200) {
            dispatch(loginSlice.actions.codeNotAuth())
            console.log('log out')
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
        }
    } catch (e) {
        console.log(e)
    }
}

export const getUserInfo = () => async (dispatch: AppDispatch) => {
    try {
        let token = localStorage.getItem('token')
        token = 'bearer ' + token?.slice(1, -1)
        const response = await axios.get(`${APP_URL}api/Accounts/GetCurrentAppUser`, {
            headers: {

                "Authorization": token,

            }
        })
        const data = {
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            //dateOfBirth: response.data.dateOfBirth,
            email: response.data.email,
            personalEmail: response.data.personalEmail,
            mobilePhone: response.data.mobilePhone,
            //startDate: response.data.startDate,
            absences: response.data.absences,
            coreTeamPlayer: response.data.isCoreTeamMember,
            slackUserName: response.data.slackUserName,
            gitHubUserName: response.data.gitHubUserName
            
        }
        dispatch(userInfoSlice.actions.getUserInfo(data))

        console.log('render')
    } catch (e) {
        console.log(e)
    }
}

export const getUserWorkLogs = () => async (dispatch:AppDispatch) => {
    let token = localStorage.getItem('token')
    token = 'bearer ' + token?.slice(1, -1)
      const response = await axios.get(`${APP_URL}api/UserCrmProfileWorklogs/GetAllDynamic`,{
        headers: {

            "Authorization": token,

        }
      })
}