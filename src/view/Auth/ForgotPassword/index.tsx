import "./ForgotPassword.scss";
import { images } from "../../../assets/images";
import { Col } from "antd";
import FormForgotPassword from "./FormForgotPassword";
import FormResetPassword from "./FormResetPassword";

export default function ForgotPassword() {
  return (
    <div className="wrap">
      <Col span={10} className="form__login">
        <img src={images.logo} />
        <FormResetPassword />

        {/* <FormForgotPassword /> */}
      </Col>

      <Col
        span={14}
        style={{
          backgroundColor: "white",
        }}
      >
        <div className="image__bg">{images.temp.fogotPassword}</div>
      </Col>
    </div>
  );
}
