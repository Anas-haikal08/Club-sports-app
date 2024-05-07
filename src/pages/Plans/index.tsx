import React, { useEffect } from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';
import './plans.css';
import { Button } from 'antd';
import Addmodal from './Addmodal';

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

    useEffect(() => {
        setBreadcrumb([
            {
                text: <IntlMessages id='Plans.sideBarName' />,
                url: '/Clubs-Management/Plans',
            },
        ]);
    }, []);

    const plans: IPlan[] = [
        {
            id: 1,
            name: 'Gold',
            plan_duration: '1 year',
            price: 100,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            name: 'Silver',
            plan_duration: '6 months',
            price: 50,
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
        },
        {
            id: 3,
            name: 'Bronze',
            plan_duration: '3 months',
            price: 25,
            description: 'At vero eos et accusamus et iusto odio dignissimos.',
        },
    ];

    return (
        <AppPageMetadata title={messages['Plans.sideBarName'].toString()}>
            <div className="plans-page">
                <h1 className="page-title">
                    <IntlMessages id="Plans.sideBarName" />
                </h1>

                <div className="add-plan-button-container">

                    <Addmodal />
                </div>

                <table className="plans-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map((plan) => (
                            <tr key={plan.id}>
                                <td>{plan.id}</td>
                                <td>{plan.name}</td>
                                <td>{plan.plan_duration}</td>
                                <td>{plan.price}</td>
                                <td>{plan.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppPageMetadata>
    );
};

export default Plans;