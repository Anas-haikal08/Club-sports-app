import React, { useState, useEffect } from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';
import { Button, Modal, Input, Form } from 'antd';
import './plans.css';

interface IPlan {
    id: number;
    name: string;
    plan_duration: string;
    price: number;
    description: string;
}

const Plans: React.FC = () => {
    const { setBreadcrumb }: any = useBreadcrumbContext();
    const { messages } = useIntl();

    const [editPlanIndex, setEditPlanIndex] = useState<number | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const [plans, setPlans] = useState<IPlan[]>([
        {
            id: 1,
            name: 'Plan 1',
            plan_duration: '1 month',
            price: 10,
            description: 'Plan 1 description',
        },
        {
            id: 2,
            name: 'Plan 2',
            plan_duration: '3 months',
            price: 25,
            description: 'Plan 2 description',
        },
    ]);
    useEffect(() => {
        setBreadcrumb([
            {
                text: <IntlMessages id="Plans.sideBarName" />,
                url: '/Clubs-Management/Plans',
            },
        ]);
    }, [setBreadcrumb]);

    const handleAddPlan = (newPlan: IPlan) => {
        setPlans([...plans, newPlan]);
    };

    const handleEditPlan = (index: number) => {
        setEditPlanIndex(index);
    };

    console.log('====================================');
    console.log(plans);
    console.log('====================================');
    console.log('====================================');
    console.log(form.getFieldsValue());
    console.log('====================================');
    const handleSavePlan = (index: number) => {
        form.validateFields().then((values: any) => {
            const updatedPlan = {
                ...plans[index],
                name: values[`name-${index}`],
                plan_duration: values[`plan_duration-${index}`],
                price: values[`price-${index}`],
                description: values[`description-${index}`],
            };


            const updatedPlans = [...plans];
            updatedPlans[index] = updatedPlan;
            setPlans(updatedPlans);

            setEditPlanIndex(null);
        }).catch((error: any) => {
            console.log('Validation failed:', error);
        });
    };

    const handleModalOk = () => {
        form.validateFields().then((values: IPlan) => {
            const { id } = values;

            // Check if the ID already exists
            const isDuplicateId = plans.some(plan => plan.id === id);
            if (isDuplicateId) {
                form.setFields([
                    {
                        name: 'id',
                        errors: ['ID already exists. Please enter a unique ID.'],
                    },
                ]);
                return;
            }

            setIsModalVisible(false);
            handleAddPlan(values);
            form.resetFields();
        });
    };
    const handleModalCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    return (
        <AppPageMetadata title={messages['Plans.sideBarName'].toString()}>
            <div className="plans-page">
                <h1 className="page-title">
                    <IntlMessages id="Plans.sideBarName" />
                </h1>

                <div className="add-plan-button-container">
                    <Button className="Addbtn" onClick={() => setIsModalVisible(true)}>
                        Add New Plan
                    </Button>
                </div>

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

                <table className="plans-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map((plan, index) => (
                            <tr key={plan.id}>
                                <td>{plan.id}</td>
                                <td>
                                    {editPlanIndex === index ? (
                                        <Input name={`name-${index}`} defaultValue={plan.name} />
                                    ) : (
                                        plan.name
                                    )}
                                </td>
                                <td>
                                    {editPlanIndex === index ? (
                                        <Input name={`plan_duration-${index}`} defaultValue={plan.plan_duration} />
                                    ) : (
                                        plan.plan_duration
                                    )}
                                </td>
                                <td>
                                    {editPlanIndex === index ? (
                                        <Input name={`price-${index}`} defaultValue={plan.price} />
                                    ) : (
                                        plan.price
                                    )}
                                </td>
                                <td>
                                    {editPlanIndex === index ? (
                                        <Input name={`description-${index}`} defaultValue={plan.description} />
                                    ) : (
                                        plan.description
                                    )}
                                </td>
                                <td>
                                    {editPlanIndex === index ? (
                                        <Button type="primary" onClick={() => handleSavePlan(index)}>
                                            Save
                                        </Button>
                                    ) : (
                                        <Button onClick={() => handleEditPlan(index)}>Edit</Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppPageMetadata>
    );
};

export default Plans;