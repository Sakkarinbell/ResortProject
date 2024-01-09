// import { LocaleProvider } from "antd";
// import moment from "moment";
// import "moment/locale/th";

// moment.locale("th");

// const DatePicker = <LocaleProvider  />;
// export default DatePicker;
import { DatePicker } from "antd";
import dateFnsGenerateConfig from "rc-picker/lib/generate/moment";

const MyDatePicker = DatePicker.generatePicker(dateFnsGenerateConfig);

export default MyDatePicker;
