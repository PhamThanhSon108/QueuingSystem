import { Row } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import HeaderLayout from "../../../layout/Header";

import Sidebar from "../../../layout/Sidebar";

import "./DefaultLayout.scss";
type DefaultLayoutProps = {
  children: React.ReactNode;
};
export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Row className="wrap">
        <Sider className="sider__left">
          <Sidebar />
        </Sider>
        <Layout className="body">
          <Layout>
            <Header className="header">
              <HeaderLayout />
            </Header>

            <Content>{children}</Content>
          </Layout>
        </Layout>
        <Layout className="body__right">
          <Header className="header">
            <HeaderLayout />
          </Header>
          <Content>abc</Content>
        </Layout>
      </Row>
    </>
  );
}
