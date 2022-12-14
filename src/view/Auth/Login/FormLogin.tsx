import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";
import {
  setToken,
  updateProfileInStore,
} from "../../../modules/authentication/profileStore";
import { useAppDispatch } from "../../../shared/hooks";
import { getProfile } from "../../../modules/authentication/repository";
type LoginStatus = "pending" | "fulfill" | "reject" | undefined;
type FormData = {
  remember?: string;
  names: { username: string; password: string };
};
export default React.memo(function FormLogin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();

  const [loginStatus, setLoginStatus] = useState<LoginStatus>();

  const handleFinish = (data: FormData) => {
    setLoginStatus("pending");
    delete data.remember;

    signInWithEmailAndPassword(auth, data.names.username, data.names.password)
      .then((userCredential) => {
        userCredential.user
          .getIdToken()
          .then((token) => {
            setLoginStatus("fulfill");
            document.cookie = `accessToken=${token}; SameSite=None; Secure`;
            dispatch(setToken({ token, remember: true }));
            setTimeout(() => {
              navigate("/");
            }, 300);
          })
          .catch((error) => {
            setLoginStatus("reject");
          });
        getProfile("iswFzKlZkLdTaJvJNEib").then((user) => {
          dispatch(updateProfileInStore({ user }));
        });
      })
      .catch(() => {
        setLoginStatus("reject");
        //  setErrorStatus(formatMessage("login.account.error"));
        signOut(auth);
      });
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
                return Promise.reject(new Error(names));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            <div className="loginform_field__label">
              <label>T??n ????ng nh???p *</label>
            </div>
            <Form.Item
              validateTrigger={["onSubmit", "onBlur"]}
              messageVariables={{ label: "good" }}
              className="wrap-login__input"
              name="username"
              rules={[
                { required: true, message: "B???n ch??a nh???p t??i kho???n!" },
                {
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "B???n nh???p sai ?????nh d???ng c???a email",
                  whitespace: true,
                },
              ]}
            >
              <Input className={"login__input"} placeholder="Nh???p t??i kho???n" />
            </Form.Item>
            <div className="loginform_field__label">
              <label>M???t kh???u *</label>
            </div>

            <Form.Item
              validateTrigger={["onSubmit", "onBlur"]}
              className="wrap-login__input"
              style={{ marginBottom: "12px" }}
              name="password"
              rules={[
                { required: true, message: "B???n ch??a nh???p m???t kh???u" },
                { min: 6, message: "M???t kh???u c?? ????? d??i t???i thi???u l?? 6 k?? t???" },
              ]}
            >
              <Input.Password
                className={"login__input"}
                placeholder="Nh???p m???t kh???u"
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
                  <label className="active">Qu??n m???t kh???u?</label>
                </div>
              </div>
            )}
            {loginStatus === "reject" && (
              <div className="wrap-login__input">
                <div className="loginform_field__label">
                  <label className="active">Th??ng tin ????ng nh???p sai</label>
                </div>
              </div>
            )}

            <Form.Item className="wrap-login__input">
              <Button
                loading={loginStatus === "pending"}
                type="primary"
                htmlType="submit"
                className="login-form-button submit__btn"
              >
                ????ng nh???p
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
});
