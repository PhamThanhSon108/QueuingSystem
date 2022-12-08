import FormItem from "antd/es/form/FormItem";
import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

export default function FormForgotPassword({
  setReset,
}: {
  setReset: Function;
}) {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/login");
  };
  const handleContinue = () => {};
  return (
    <Form
      onFinish={() => {
        setReset(true);
      }}
    >
      <Typography>
        <div className="reset__title">Đặt lại mật khẩu</div>
        <div className="reset__content">
          Vui lòng nhập email để đặt lại mật khẩu của bạn*
        </div>
      </Typography>
      <FormItem
        name="email"
        rules={[
          { required: true, message: "Bạn chưa nhập email!" },
          // {
          //   pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          //   message: "Bạn nhập sai định dạng của email",
          // },
        ]}
      >
        <Input className={"login__input"} placeholder="Email" />
      </FormItem>
      <Form.Item className="wrap-reset__btn">
        <Button
          type="primary"
          ghost
          htmlType="submit"
          className="submit__btn reset__btn-outline"
          onClick={handleCancel}
        >
          Hủy
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          className="submit__btn"
          onClick={handleContinue}
        >
          Tiếp tục
        </Button>
      </Form.Item>
    </Form>
  );
}
