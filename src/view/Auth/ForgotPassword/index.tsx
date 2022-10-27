import "./ForgotPassword.scss";
import { images } from "../../../assets/images";
import { Col } from "antd";
import FormForgotPassword from "./FormForgotPassword";
import FormResetPassword from "./FormResetPassword";
import { useState } from "react";

export default function ForgotPassword() {
  const [reset, setReset] = useState<boolean>(false);
  return (
    <div className="wrap">
      <Col span={10} className="form__login">
        <img src={images.logo} />
        {reset ? (
          <FormResetPassword />
        ) : (
          <FormForgotPassword setReset={setReset} />
        )}
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
