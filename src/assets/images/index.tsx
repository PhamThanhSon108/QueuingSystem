import IconDashBoard from "./icons/IconDashBoard";
import IconDevice from "./icons/IconDevice";
import IconLogout from "./icons/IconLogout";
import IconNums from "./icons/IconNums";
import IconReport from "./icons/IconReport";
import IconSetting from "./icons/IconSetting";
import IconSevice from "./icons/IconSevice";
import ImageFogotPassword from "./temps/ImageFogotPassword";
import ImageLogin from "./temps/ImageLogin";

export const images = {
  logo: require("./logo.svg").default,
  icon: {
    dashboard: <IconDashBoard />,
    setting: <IconSetting />,
    nums: <IconNums />,
    report: <IconReport />,
    device: <IconDevice />,
    service: <IconSevice />,
    logout: <IconLogout />,
  },
  temp: {
    login: <ImageLogin />,
    fogotPassword: <ImageFogotPassword />,
  },
};