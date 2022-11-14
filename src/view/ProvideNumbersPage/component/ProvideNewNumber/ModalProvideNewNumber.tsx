import { Modal } from "antd";
import "../../ProvideNumbersPage.scss";
export const modalProvideNewNumber = () => {
  Modal.info({
    icon: <></>,
    closable: true, // title: "This is a notification message",
    content: (
      <div className="print-number-wrap">
        <div className="print-number-description">
          <h1 className="print-number-title">SỐ THỨ TỰ ĐƯỢC CẤP</h1>
          <p className="print-number-num">2001201</p>
          <p className="print-number-service">Dịch vụ khám răng hàm mặt</p>
        </div>
        <div className="print-number-time">
          <p className="print-number-time-create">Thời gian cấp</p>
          <p className="print-number-time-expiry">Hạn sử dụng</p>
        </div>
      </div>
    ),
    // onOk() {},
  });
};
