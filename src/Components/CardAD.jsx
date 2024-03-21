import { Card, Col, Row } from "antd";
import React from "react";

const CardAD = () => {
    return (
        <Row gutter={8} style={{ paddingBottom: "20px" }}>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>

    )
}
export default CardAD