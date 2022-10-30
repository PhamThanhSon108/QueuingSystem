import { MoreOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import { icons } from "antd/lib/image/PreviewGroup";
import { MenuProps } from "rc-menu";
import { SelectInfo } from "rc-menu/lib/interface";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { images } from "../../assets/images";
import "./Sidebar.scss";
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "/", images.icon.dashboard),
  getItem("Thiết bị", "/device", images.icon.device),
  getItem("Dịch vụ", "/service", images.icon.service),
  getItem("Cấp số", "/nums", images.icon.nums),
  getItem("Báo cáo", "/report", images.icon.report),
  getItem(`Cài đặt hệ thống`, "/setting", images.icon.setting, [
    getItem("Quản lý vai trò", "1"),
    getItem("Quản lý tài khoản", "2"),
    getItem("Nhật ký người dùng", "3"),
  ]),
];
export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleOnselect = (item: SelectInfo) => {
    navigate(`${item.key}`);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div className="logo">
        <img src={images.logo} />
      </div>

      <Menu
        className="menu"
        items={items}
        selectedKeys={[location.pathname]}
        onSelect={(item) => {
          handleOnselect(item);
        }}
      />
      <div className="btn__logout">
        <Button
          icon={images.icon.logout}
          onClick={() => {
            navigate("/login");
          }}
        >
          Đăng xuất
        </Button>
      </div>
    </div>
  );
}
