import { Button, Col, Form, Row, Select, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "../../../ServicePage/Service.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { Option } from "antd/lib/mentions";
import { v4 } from "uuid";
import { modalProvideNewNumber } from "./ModalProvideNewNumber";
import { provideNumber } from "../../../../modules/provideNumbers/respository";
import moment from "moment";
import { formatDate } from "../TableProvideNumbers/TableProvideNumbers";

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
let DeviceServiceOption: string[] | { name: string; id: string }[] = [
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

    provideNumber({ id: data.deviceService }).then((number: any) => {
      if (number)
        modalProvideNewNumber({
          ordinalNumbers: number?.service?.option?.preFix
            ? number?.ordinalNumbers + number?.service?.serviceId
            : number?.service?.serviceId + number?.ordinalNumbers,
          serviceName: number?.service?.serviceName,
          createdTime: formatDate(number?.createdAt.seconds),
          expiredTime: formatDate(number?.createdAt.seconds, true),
        });
    });
  };

  const services: Array<any> | undefined = useAppSelector((state) => {
    return state.service.services;
  });
  DeviceServiceOption = services.map((value) => ({
    name: value?.serviceName,
    id: value?.id,
  }));

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
                      <Select
                        placeholder={"Chọn dịch vụ"}
                        style={{ height: "44px !important" }}
                      >
                        {DeviceServiceOption.map((value) => (
                          <Option key={v4()} value={value.id}>
                            {value.name}
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
                        // onClick={handleProvide}
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
