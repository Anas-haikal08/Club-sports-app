import React, { useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';
import "./plans.css";

interface IPlan {
    id: number;
    name: string;
    plan_duration: string;
    price: number;
    description: string;
}

const Addmodal: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const handleAddPlan = () => {
        setIsModalVisible(true);
        console.log('Add new plan');
    };

    const handleModalOk = () => {
        form.validateFields().then((values: IPlan) => {
            setIsModalVisible(false);
            // Handle the logic for saving the new plan
            // For example, make an API request to save the plan data
            console.log('New plan:', values);
            form.resetFields();
        });
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    return (
        <div className="plans-page">
            <h1>Plans</h1>
            <Button className="Addbtn" onClick={handleAddPlan}>
                Add New Plan
            </Button>
            <Modal
                title="Add Plan"
                visible={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                destroyOnClose={true}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="id"
                        label="ID"
                        rules={[{ required: true, message: 'Please enter the ID' }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter the name' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="plan_duration"
                        label="Plan Duration"
                        rules={[{ required: true, message: 'Please enter the plan duration' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[{ required: true, message: 'Please enter the price' }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: 'Please enter the description' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Addmodal;