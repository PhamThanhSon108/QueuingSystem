import Icon, { HomeOutlined } from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { Avatar, Typography } from "antd";
import React from "react";
import { images } from "../../assets/images";
import "./Header.scss";

export default function UserHeader() {
  return (
    <>
      <div
        className="userheader__wrap"
        style={{ paddingRight: "32px", height: "100%" }}
      >
        <div className="bell">{images.icon.bell}</div>
        {/* <Icon component={IconBell} style={{ color: "red" }} />
        ); ; */}
        <Avatar size={"large"} />
        <Typography className="userinfor__wrapper">
          <div className="welcome">Xin chào</div>
          <div className="name">Phạm Thanh Sơn</div>
        </Typography>
      </div>
    </>
  );
}
