import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
export default React.memo(function FormLogin() {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const handleFinish = (e: any) => {
    navigate("/");
  };

  return (
    <Form
      style={{ marginTop: "150px" }}
      form={form}
      onFinish={handleFinish}
      name="normal_login"
      className="login-form"
    >
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (names.password.length == 0 || names.username.length == 0) {
                console.log(names, "names");
                return Promise.reject(new Error(names));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            <div className="loginform_field__label">
              <label>Tên đăng nhập *</label>
            </div>
            <Form.Item
              validateTrigger={["onSubmit", "onBlur"]}
              messageVariables={{ label: "good" }}
              className="wrap-login__input"
              name="username"
              rules={[
                { required: true, message: "Bạn chưa nhập tài khoản!" },
                {
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Bạn nhập sai định dạng của email",
                  whitespace: true,
                },
              ]}
            >
              <Input className={"login__input"} placeholder="Nhập tài khoản" />
            </Form.Item>
            <div className="loginform_field__label">
              <label>Mật khẩu *</label>
            </div>

            <Form.Item
              validateTrigger={["onSubmit", "onBlur"]}
              className="wrap-login__input"
              style={{ marginBottom: "12px" }}
              name="password"
              rules={[
                { required: true, message: "Bạn chưa nhập mật khẩu" },
                { min: 6, message: "Mật khẩu có độ dài tối thiểu là 6 ký tự" },
              ]}
            >
              <Input.Password
                className={"login__input"}
                placeholder="Nhập mật khẩu"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            {errors.length == 0 && (
              <div className="wrap-login__input">
                <div
                  className="loginform_field__label"
                  onClick={() => {
                    navigate("/reset");
                  }}
                >
                  <label className="active">Quên mật khẩu?</label>
                </div>
              </div>
            )}

            <Form.Item className="wrap-login__input">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button submit__btn"
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
});
