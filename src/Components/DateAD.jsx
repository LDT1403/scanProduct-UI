import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const DateAD = () => {
    return (
        <Space direction="vertical" size={12} >
            <div style={{ display: "flex", padding: "0px 20px 20px 0px" }}>
                <div style={{ paddingRight: "20px" }}>
                    <DatePicker
                        format="YYYY-MM-DD HH:mm:ss"
                        disabledDate={disabledDate}
                        disabledTime={disabledDateTime}
                        showTime={{
                            defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
                        }}
                    />

                </div>
                <div>
                    <DatePicker picker="month" disabledDate={disabledDate} />
                </div>

            </div>



        </Space>
    )
}
export default DateAD

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
};


const disabledDate = (current) => {
    return current && current < dayjs().endOf('day');
};
const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
});