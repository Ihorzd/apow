
import { FC, useEffect } from "react"
import Menu from "../Menu/Menu"
import { Button, Form, Input, message, DatePicker,Checkbox } from 'antd';
import 'antd/dist/antd.css';

import './profile.scss'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getUserInfo } from "../../store/redusers/ActionCreators";
import FormItem from "antd/es/form/FormItem";



const Profile: FC = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const {firstName,
        lastName,
       // dateOfBirth:Date,
        email,
        personalEmail,
        mobilePhone,
        //startDate:Date,
        absences,
        coreTeamPlayer,
        slackUserName,
        gitHubUserName} = useAppSelector(state => state.userInfoSlice);

    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };
    const config = {
        rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
    };
    const myFunc = () =>{
       
    }
    useEffect(()=>{
        dispatch(getUserInfo())
    },[])


    return (
        <div className='profileContainer'>
            <Menu />
            <div className='profile'>
                <button onClick={()=>myFunc()}>info</button>
                <h3 className="profile__header">My Profile</h3>
                <div className="gtneralInfo">
                    <h4 className="gtneralInfo__header">General Info</h4>
                    <div className="generalFormContainer">
                        <Form
                            
                            id="generalForm"
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                            className="generalForm__item generalForm__item_label"
                                name="firstName"
                                initialValue={firstName}
                                label="First Name"
                                rules={
                                    [
                                        {
                                            type: "string",
                                            
                                        },
                                        {
                                            type: 'string',
                                            min: 2
                                        }
                                    ]}

                            >
                                <Input  />
                            </Form.Item>
                            <Form.Item
                                className="generalForm__item"
                                name="lastName"
                                initialValue={lastName}
                                label="Last Name"
                                rules={
                                    [ 
                                        { 
                                            type: 'string'
                                            
                                        }, 
                                        { 
                                            type: 'string', min: 6 
                                        }
                                    ]
                                }
                            >
                                <Input value='Brooklyn' />
                            </Form.Item>
                           
                                <Form.Item
                                   className="generalForm__item generalForm__item_date"
                                   label="Date of birth"
                                  
                                >
                                    <DatePicker style={{width:'223px',border:'none',padding:0}}/>
                                </Form.Item>
                               
                                <Form.Item
                                className="generalForm__item generalForm__item_email"
                                name="email"
                                initialValue={email}
                                label="Email"
                                rules={
                                    [ 
                                        { 
                                            type: 'string'
                                            
                                        }, 
                                        { 
                                            type: 'string', min: 6 
                                        }
                                    ]
                                }
                            >
                                <Input placeholder="b.simmons@mail.com" />
                            </Form.Item> 
                            <Form.Item
                                className="generalForm__item generalForm__item_personalEmail"
                                name="personalEmail"
                                initialValue={personalEmail}
                                label="Personal Email"
                                rules={
                                    [ 
                                        { 
                                            type: 'string'
                                            
                                        }, 
                                        { 
                                            type: 'string', min: 6 
                                        }
                                    ]
                                }
                            >
                                <Input value='Brooklyn' />
                            </Form.Item> 
                            <Form.Item
                                className="generalForm__item generalForm__item_phone"
                                name="phone"
                                initialValue={mobilePhone}
                                label=' '
                              
                            >
                                <Input placeholder="Mobile Phone" />
                            </Form.Item>
                            <Form.Item
                                   className="generalForm__item"
                                   label="Start Date"
                               
                                >
                                    <DatePicker style={{width:'223px',border:'none',padding:0}}/>
                                </Form.Item>
                                <Form.Item
                            className="generalForm__item generalForm__item_absences"
                                name="absences"
                                initialValue={absences}
                                label="Absences"
                                rules={
                                    [
                                        {
                                            type: "string",
                                            
                                        },
                                        {
                                            type: 'string',
                                            min: 2
                                        }
                                    ]}

                            >
                                <Input placeholder="24" />
                            </Form.Item>
                            <Form.Item className="generalForm__item generalForm__item_checkTeamMember">
                                <Checkbox checked={coreTeamPlayer}>
                                Core team member
                                </Checkbox>
                            </Form.Item>
                        </Form>
                        <div className="accounts">
                            <h3>My accounts</h3>
                            <Form id="myAccounts"
                            layout="vertical"
                            >
                                <FormItem
                                name='slack'
                                label='Slack'
                                initialValue={slackUserName}>
                                    <Input 
                                    className="myAccounts__input" 
                                    prefix={<img src="/img/myAccounts/slack.png"/>}
                                    placeholder='Enter you slack user name'
                                    
                                    ></Input>
                                </FormItem>
                                <FormItem
                                name='github'
                                label='Github'
                                initialValue={gitHubUserName}>
                                    <Input
                                    className="myAccounts__input" 
                                    prefix={<img src="/img/myAccounts/github.png"/>}
                                    placeholder='Enter your github user name'></Input>
                                </FormItem>
                            </Form>
                    </div>
                    </div>
                   
                </div>
                <div className="workLogs">
                    <h3 className="workLogs__header">Work logs</h3>
                    <div className="workLogsContainer">

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Profile