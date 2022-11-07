import "./Profile.scss";

import { Avatar, Button, Col, Form, Input, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AvatarUser from "./components/AvatarUser";
import {
  updateProfileInStore,
  UserSelector,
} from "../../../modules/authentication/profileStore";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useDispatch } from "react-redux";
import { getProfile } from "../../../modules/authentication/repository";

// import AvatarUser from './components/AvatarUser';
// import ModalChangePassWord from './components/ModalChangePassWord';
// import { routerViewProfile } from './router';

const Profile = () => {
  const linkAvata =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4RibnQG5pD0n3phSU3-shJNYP4-dRtkzIg&usqp=CAU";
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const user = useAppSelector((state) => state.profile.user);

  useEffect(() => {
    if (user != null) {
      form.setFieldsValue(user);
    }
  }, [form, user]);
  useEffect(() => {
    getProfile("iswFzKlZkLdTaJvJNEib").then((user) => {
      dispatch(updateProfileInStore({ user }));
    });
  }, []);

  return (
    <div>
      <div className="profile-page">
        <div className="profile-user__box">
          <Form
            name="userProfileForm"
            layout="vertical"
            requiredMark={false}
            form={form}
            id="userProfileForm"
          >
            <Row className="profile-form__box" justify="center">
              <Col span={6} className="profile-avatar">
                {/* <AvatarUser chooseFile={chooseFile} /> */}
                <Avatar
                  size={"large"}
                  src={linkAvata}
                  style={{ width: 249, height: 249 }}
                />
                <Typography.Title
                  style={{
                    margin: "20px 0 0 0",
                    fontSize: "24px",
                    lineHeight: "36px",
                  }}
                >
                  {user?.userFullName}
                </Typography.Title>
              </Col>
              <Col span={9}>
                <div className="main-form">
                  <Form.Item
                    label={"Tên người dùng"}
                    name="userFullname"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        max: 99,
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input
                      disabled={true}
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
                  </Form.Item>
                  <Form.Item
                    label={"Số điện thoại"}
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        max: 99,
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input
                      // disabled={isDisableForm}
                      // placeholder={formatMessage('accounts.accountFullName')}
                      maxLength={100}
                    />
                  </Form.Item>
                  <Form.Item
                    label={"Email"}
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                      },
                    ]}
                  >
                    <Input
                    // disabled={isDisableForm}
                    // placeholder={formatMessage('accounts.email')}
                    />
                  </Form.Item>
                </div>
              </Col>
              <Col span={9}>
                <div className="main-form">
                  <Form.Item
                    label={"Tên đăng nhập"}
                    name="userName"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        max: 99,
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input
                      disabled={true}
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
                  </Form.Item>
                  <Form.Item
                    label={"Mật khẩu"}
                    name="password"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        max: 99,
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input
                      // disabled={isDisableForm}
                      // placeholder={formatMessage('accounts.accountFullName')}
                      maxLength={100}
                    />
                  </Form.Item>
                  <Form.Item
                    label={"Vai trò"}
                    name="role"
                    rules={[
                      {
                        required: true,
                        type: "string",
                      },
                    ]}
                  >
                    <Input
                    // disabled={isDisableForm}
                    // placeholder={formatMessage('accounts.email')}
                    />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
          {/* <RightMenu arrayAction={arrayAction} /> */}
        </div>
        {/* <ModalChangePassWord isModalVisible={isVisible} setIsModalVisible={setIsVisible} /> */}

        <div className="button-center__box profile-button-update">
          {/* {!isDisableForm && ( */}
          <>
            <Button className="cancel-button mx-5" onClick={() => {}}>
              {/* {formatMessage('common.cancel')} */}
            </Button>
            <Button
              type="primary"
              className="normal-button"
              htmlType="submit"
              form="userProfileForm"
              // loading={updateAccounts?.status === 'loading'}
            >
              {/* {formatMessage('common.save')} */}
            </Button>
          </>
          )
        </div>
      </div>
    </div>
  );
};

export default React.memo(Profile);
