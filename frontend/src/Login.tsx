import React, { useContext } from "react";
import { Button, Checkbox, Form, FormProps, Input } from "antd"
import { sessionContext } from "./SessionProvider";

type FieldType = {
  userName?: string;
  password?: string;
  remember?: string;
};


export const Login: React.FC = () => {
    const { login } = useContext(sessionContext)


    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        if ( !values.password || !values.userName) return

        login({userName: values!.userName, password: values!.password})
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item<FieldType>
                      label="Username"
                      name="userName"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                  <Input />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{ offset: 8, span: 16 }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>

                </Form>
        
            </div> 
    )
}
