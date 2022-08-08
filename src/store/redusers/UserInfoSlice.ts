import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInfo } from "os";

interface IUserInfo{
    firstName:string,
    lastName:string,
   // dateOfBirth:Date,
    email:string,
    personalEmail:string,
    mobilePhone:number,
    //startDate:Date,
    absences:any,
    coreTeamPlayer:boolean,
    slackUserName: string,
    gitHubUserName: string,
    workLogs:Array<object>
}

const initialState:IUserInfo={
    firstName:'Brooklyn',
    lastName:'Simmons',
   // dateOfBirth: new Date('2023-09-24'),
    email:'b.simmons@mail.com',
    personalEmail:'brooklyn.simmons@gmail.com',
    mobilePhone:0,
    //startDate:new Date('2023-09-24'),
    absences:24,
    coreTeamPlayer:true,
    slackUserName: '',
    gitHubUserName: '',
    workLogs:[]
}




export const userInfoSlice = createSlice({
    name:'userInfo',
    initialState:initialState,
    reducers:{
        getUserInfo(state,action){
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName
            //state.dateOfBirth = action.payload.dateOfBirth
            state.email = action.payload.email
            state.personalEmail = action.payload.personalEmail
            state.mobilePhone = action.payload.mobilePhone
            //state.startDate = action.payload.startDate
            state.absences = action.payload.absences
            state.coreTeamPlayer = action.payload.coreTeamPlayer
            state.slackUserName = action.payload.slackUserName
            state.gitHubUserName = action.payload.gitHubUserName

        },
        getUserWorkLogs(state,action){
            state.workLogs = action.payload
        }
    }
})
export default userInfoSlice.reducer