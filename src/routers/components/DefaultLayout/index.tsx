import { Row } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import HeaderLayout from "../../../layout/Header";
import UserHeader from "../../../layout/Header/UserHeader";

import Sidebar from "../../../layout/Sidebar";
import Overview from "../../../view/Homepage/Overview";

import "./DefaultLayout.scss";
type DefaultLayoutProps = {
  children: React.ReactNode;
  dashboard: boolean;
};
export default function DefaultLayout({
  children,
  dashboard,
}: DefaultLayoutProps) {
  return (
    <>
      <Row className="wrap">
        <Sider className="sider__left">
          <Sidebar />
        </Sider>
        {dashboard ? (
          <>
            <Layout
              className="body"
              style={{ width: "calc(100vw - 200px - 400px);" }}
            >
              <Layout>
                <Header className="header" style={{ alignItems: "flex-end" }}>
                  <HeaderLayout />
                </Header>
                <Content>{children}</Content>
              </Layout>
            </Layout>
            <Layout className="body__right">
              <Header
                className="header"
                style={{
                  backgroundColor: "white",
                  height: "80px",
                  marginBottom: "29px",
                }}
              >
                <UserHeader />
              </Header>
              <Overview />
            </Layout>
          </>
        ) : (
          <>
            <Layout className="body" style={{ width: "calc(100vw - 200px);" }}>
              <Layout>
                <Header
                  className="header"
                  style={{ alignItems: "flex-end", height: "80px" }}
                >
                  <HeaderLayout />
                  <UserHeader />
                </Header>
                <Content>{children}</Content>
              </Layout>
            </Layout>
          </>
        )}
      </Row>
    </>
  );
}
