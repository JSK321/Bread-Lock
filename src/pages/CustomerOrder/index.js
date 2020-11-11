import React from 'react'
import { PageHeader, Tag, Button, Statistic, Row } from 'antd';

export default function CustomerOrder() {
    return (
        <PageHeader
            onBack={() => window.history.back()}
            title="Customer Food Page"
            tags={<Tag color="blue">Running</Tag>}
            subTitle="This is a subtitle"
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">
                    Primary
          </Button>,
            ]}
        >
            <Row>
                <Statistic title="Status" value="Pending" />
                <Statistic
                    title="Price"
                    prefix="$"
                    value={568.08}
                    style={{
                        margin: '0 32px',
                    }}
                />
                <Statistic title="Balance" prefix="$" value={3345.08} />
            </Row>
        </PageHeader>
    )
}
