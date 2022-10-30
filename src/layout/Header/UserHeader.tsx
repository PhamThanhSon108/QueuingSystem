import Icon, { HomeOutlined } from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { Avatar, Popover, Typography } from "antd";
import React from "react";
import { images } from "../../assets/images";
import "./Header.scss";
const contentAnnoun = () => {
  return (
    <div className="announ__wrap">
      <div className="announ-header">
        <span>THÔNG BÁO</span>
      </div>
      <div className="announ-body">
        <div className="announ-body-list">
          {false ? (
            <div className="announ-body-item">
              <div className="announ-body-item-user">KHÔNG CÓ THÔNG BÁO</div>
              <div className="announ-body-item-time">
                Bạn chưa có bất kỳ thông báo nào!
              </div>
            </div>
          ) : (
            <>
              <div className="announ-body-item">
                <div className="announ-body-item-user">
                  Người dùng: Phạm Thanh SƠn
                </div>
                <div className="announ-body-item-time">
                  Thời gian sử dụng: 12h ngày 15/10/2022
                </div>
              </div>
              <div className="announ-body-item">
                <div className="announ-body-item-user">
                  Người dùng: Phạm Thanh SƠn
                </div>
                <div className="announ-body-item-time">
                  Thời gian sử dụng: 12h ngày 15/10/2022
                </div>
              </div>
              <div className="announ-body-item">
                <div className="announ-body-item-user">
                  Người dùng: Phạm Thanh SƠn
                </div>
                <div className="announ-body-item-time">
                  Thời gian sử dụng: 12h ngày 15/10/2022
                </div>
              </div>
              <div className="announ-body-item">
                <div className="announ-body-item-user">
                  Người dùng: Phạm Thanh SƠn
                </div>
                <div className="announ-body-item-time">
                  Thời gian sử dụng: 12h ngày 15/10/2022
                </div>
              </div>
              <div className="announ-body-item">
                <div className="announ-body-item-user">
                  Người dùng: Phạm Thanh SƠn
                </div>
                <div className="announ-body-item-time">
                  Thời gian sử dụng: 12h ngày 15/10/2022
                </div>
              </div>
              <div className="announ-body-item">
                <div className="announ-body-item-user">
                  Người dùng: Phạm Thanh SƠn
                </div>
                <div className="announ-body-item-time">
                  Thời gian sử dụng: 12h ngày 15/10/2022
                </div>
              </div>
              <div className="announ-body-item">
                <div className="announ-body-item-user">
                  Người dùng: Phạm Thanh SƠn
                </div>
                <div className="announ-body-item-time">
                  Thời gian sử dụng: 12h ngày 15/10/2022
                </div>
              </div>
              <div className="announ-body-item">
                <div className="announ-body-item-user">
                  Người dùng: Phạm Thanh SƠn
                </div>
                <div className="announ-body-item-time">
                  Thời gian sử dụng: 12h ngày 15/10/2022
                </div>
              </div>
              <div className="announ-body-item">
                <div className="announ-body-item-user">
                  Người dùng: Phạm Thanh SƠn
                </div>
                <div className="announ-body-item-time">
                  Thời gian sử dụng: 12h ngày 15/10/2022
                </div>
              </div>
              <div className="announ-body-item">
                <div className="announ-body-item-user">
                  Người dùng: Phạm Thanh SƠn
                </div>
                <div className="announ-body-item-time">
                  Thời gian sử dụng: 12h ngày 15/10/2022
                </div>
              </div>
              <div className="announ-body-item">
                <div className="announ-body-item-user">
                  Người dùng: Phạm Thanh SƠn
                </div>
                <div className="announ-body-item-time">
                  Thời gian sử dụng: 12h ngày 15/10/2022
                </div>
              </div>
              <div className="announ-body-item">
                <div className="announ-body-item-user">
                  Người dùng: Phạm Thanh SƠn
                </div>
                <div className="announ-body-item-time">
                  Thời gian sử dụng: 12h ngày 15/10/2022
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default function UserHeader() {
  return (
    <>
      <div
        className="userheader__wrap"
        style={{ paddingRight: "32px", height: "100%" }}
      >
        <Popover placement="topRight" content={contentAnnoun} trigger="click">
          <div className="bell">{images.icon.bell}</div>
        </Popover>

        <Avatar size={"large"} />
        <Typography className="userinfor__wrapper">
          <div className="welcome">Xin chào</div>
          <div className="name">Phạm Thanh Sơn</div>
        </Typography>
      </div>
    </>
  );
}
