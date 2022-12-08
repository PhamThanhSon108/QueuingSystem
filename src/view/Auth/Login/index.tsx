import { Col } from "antd";
import { images } from "../../../assets/images";
import FormLogin from "./FormLogin";
import "./Login.scss";

export default function Login() {
  return (
    <div className="wrap">
      <Col span={10} className="form__login">
        <img src={images.logo} />
        <FormLogin />
      </Col>

      <Col
        span={14}
        style={{
          backgroundColor: "white",
        }}
      >
        <div className="image__bg">{images.temp.login}</div>
        <div className="title">
          <span className="title__01">HỆ THỐNG</span>
          <span className="title__02">QUẢN LÝ XẾP HÀNG</span>
        </div>
      </Col>
    </div>
  );
}
