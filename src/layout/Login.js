import { Button, Form, Input, Modal } from "antd";

function Login() {
    const [form] = Form.useForm();

    return (
        <Modal
            centered
            open
            title={<h2 style={{ textAlign: "center", marginTop: 0 }}>LOGIN</h2>}
            // cancelButtonProps={null}
            // okButtonProps={<Button type="primary">Login</Button>}
            footer={
                <Button type="primary" block>
                    Login
                </Button>
            }
            closeIcon={null}
            onOk={() => form.submit()}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    name="user_name"
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
