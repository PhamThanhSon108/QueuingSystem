import { Button, Col, Form, Row, Select, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "../../../ServicePage/Service.scss";
import { useAppDispatch } from "../../../../hooks";
import { Option } from "antd/lib/mentions";
import { v4 } from "uuid";
import { modalProvideNewNumber } from "./ModalProvideNewNumber";

const labelFormDevice = {
  serviceId: {
    label: "Mã dịch vụ",
  },
  serviceName: {
    label: "Tên dịch vụ",
  },
  serviceDescription: {
    label: "Mô tả",
  },
};
const DeviceTypeOption = ["Kiosk", "Display counter"];
const DeviceServiceOption = [
  "Khám tim mạch",
  "Khám sản phụ khoa",
  "Khám răng hàm mặt",
  "Khám tai mũi họng",
  "Khám hô hấp",
  "Khám tổng quát",
];
type deviceProps = {
  setStatus?: (value: string) => void;
};
export default function ProvideNewNumber() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const handleCancel = () => {
    navigate("/providenumbers");
  };
  const handleAddDevice = () => {};
  const handleOnfinish = (data: any) => {
    // addService({ service: data, id: uuidv4() }).then(() => {
    //   navigate("/service");
    // });
    modalProvideNewNumber();
  };

  return (
    <>
      <div className="wrap-page">
        <Row className="page-title">
          <Typography.Title>Quản lý dịch vụ</Typography.Title>
        </Row>

        <Row className="wrap-page__add provide-new-nums">
          <div className="provide-new-nums-wrap">
            <Form
              name="addServiceForm"
              layout="vertical"
              form={form}
              id="addServiceForm"
              onFinish={handleOnfinish}
            >
              <Row>
                <div>
                  <Typography.Title
                    level={4}
                    style={{ textAlign: "center" }}
                    className="add-device__form-title"
                  >
                    CẤP SỐ MỚI
                  </Typography.Title>
                </div>
              </Row>
              <Row className="add-device__form-box">
                <Col>
                  <div className="main-form">
                    <Form.Item
                      label={"Dịch vụ sử dụng"}
                      name="deviceService"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select style={{ height: "44px !important" }}>
                        {DeviceServiceOption.map((value) => (
                          <Option key={v4()} value={value}>
                            {value}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <Row>
                    <div className="add-device__btn-wrap">
                      <Button className="cancel" onClick={handleCancel}>
                        Hủy bỏ
                      </Button>
                      <Button
                        className="confirm"
                        htmlType="submit"
                        form="addServiceForm"
                      >
                        In số
                      </Button>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
        </Row>
      </div>
    </>
  );
}
