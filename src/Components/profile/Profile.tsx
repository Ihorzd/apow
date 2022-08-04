
import { FC } from "react"
import Menu from "../Menu/Menu"
import { Button, Form, Input, message, DatePicker,Checkbox } from 'antd';
import 'antd/dist/antd.css';

import './profile.scss'

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

const Profile: FC = () => {
    const [form] = Form.useForm();

    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };
    const config = {
        rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
    };



    return (
        <div className='profileContainer'>
            <Menu />
            <div className='profile'>
                <h3 className="profile__header">My Profile</h3>
                <div className="gtneralInfo">
                    <h4 className="gtneralInfo__header">General Info</h4>
                    <div className="">
                        <Form
                            
                            id="generalForm"
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                            className="generalForm__item"
                                name="firstName"
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
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item
                                className="generalForm__item"
                                name="lastName"
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
                                label=' '
                                rules={
                                    [ 
                                        { 
                                            type: 'number'
                                            
                                        }, 
                                        { 
                                            type: 'number', min: 6 
                                        }
                                    ]
                                }
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
                                <Checkbox >
                                Core team member
                                </Checkbox>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="accounts">

                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )

}

export default Profile