import { Avatar, Popover, Typography } from "antd";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import { db } from "../../firebase/config";

import { updateProfileInStore } from "../../modules/authentication/profileStore";
import { getProfile } from "../../modules/authentication/repository";
import { getNotifies } from "../../modules/setting/userLog/respository";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import "./Header.scss";
export const formatDateInNotify = (seconds: number, exprire?: boolean) => {
  var d = new Date(seconds * 1000);
  var datestring = !exprire
    ? d.getHours() +
      ":" +
      d.getMinutes() +
      " ngày " +
      d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear()
    : "11" +
      ":" +
      "59" +
      " " +
      d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear();

  return datestring;
};
const ContentAnnoun = ({ notifies }: { notifies: Array<{}> | [] }) => {
  return (
    <div className="announ__wrap">
      <div className="announ-header">
        <span>THÔNG BÁO</span>
      </div>
      <div className="announ-body">
        <div className="announ-body-list">
          {notifies?.length > 0 ? (
            <>
              {notifies?.map((notify: any) => {
                return (
                  <div className="announ-body-item">
                    <div className="announ-body-item-user">
                      {notify?.userName}
                    </div>
                    <div className="announ-body-item-time">{notify?.log}</div>
                    <div className="announ-body-item-time">
                      Thời gian sử dụng:{" "}
                      {formatDateInNotify(notify?.createdAt?.seconds)}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="announ-body-item">
              <div className="announ-body-item-user">KHÔNG CÓ THÔNG BÁO</div>
              <div className="announ-body-item-time">
                Bạn chưa có bất kỳ thông báo nào!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default function UserHeader() {
  const navigate = useNavigate();
  const handleGotoProfile = () => {
    navigate("/profile");
  };
  const notifies = useAppSelector((state) => state.userLog.notifies);

  const user: any = useAppSelector((state) => state.profile.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const q = query(collection(db, "userLogs"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      dispatch(getNotifies());
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    if (!user)
      getProfile().then((user) => {
        dispatch(updateProfileInStore({ user }));
      });
  }, []);
  return (
    <>
      <div
        className="userheader__wrap"
        style={{ paddingRight: "32px", height: "100%" }}
      >
        <Popover
          placement="topRight"
          content={<ContentAnnoun notifies={notifies}></ContentAnnoun>}
          trigger="click"
        >
          <div className="bell">{images.icon.bell}</div>
        </Popover>

        <Avatar
          size={"large"}
          onClick={handleGotoProfile}
          className="userinfor"
        />
        <span onClick={handleGotoProfile} className="userinfor">
          <Typography className="userinfor__wrapper">
            <div className="welcome">Xin chào</div>
            <div className="name">{user?.userFullname}</div>
          </Typography>
        </span>
      </div>
    </>
  );
}
