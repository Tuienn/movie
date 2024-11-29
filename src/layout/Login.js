import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Modal } from "antd";
import apiService from "../api/APIService";
import { generateToken } from "../firebase/firebase";

function Login() {
    const [form] = Form.useForm();

    const queryToken = useQuery({
        queryKey: ["GET", "token"],
        queryFn: async () => generateToken(),
    });

    if (queryToken.data) {
        console.log(queryToken.data);
    }

    const mutationLogin = useMutation({
        mutationKey: ["POST", "login"],
        mutationFn: async (value) => apiService("POST", "/login", "", value),
    });

    return (
        <Modal
            centered
            open
            title={<h2 style={{ textAlign: "center", marginTop: 0 }}>LOGIN</h2>}
            // cancelButtonProps={null}
            // okButtonProps={<Button type="primary">Login</Button>}
            footer={
                <Button type="primary" block onClick={() => form.submit()}>
                    Login
                </Button>
            }
            closeIcon={null}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={(value) => {
                    console.log(value);
                    if (queryToken.data) {
                        mutationLogin.mutate({
                            ...value,
                            fcmtoken: queryToken.data,
                        });
                    }
                }}
            >
                <Form.Item
                    name="username"
                    label="User name"
                    rules={[
                        {
                            required: true,
                            message: "Please fill in this field",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please fill in this field",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default Login;
