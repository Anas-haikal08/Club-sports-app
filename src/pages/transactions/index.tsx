import React, { useEffect, useState } from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';
import './transactions.css';

interface ITransaction {
    id: number;
    amount: number;
    description: string;
    date: string;
}

const Transactions: React.FC = () => {
    const { setBreadcrumb }: any = useBreadcrumbContext();
    const { messages } = useIntl();

    useEffect(() => {
        setBreadcrumb([
            {
                text: <IntlMessages id="trans.sideBarName" />,
                url: '/transactions',
            },
        ]);
    }, []);

    const [transactions, setTransactions] = useState<ITransaction[]>([
        {
            id: 1,
            amount: 100,
            description: 'Payment for services',
            date: '2022-01-01',
        },
        {
            id: 2,
            amount: -50,
            description: 'Refund',
            date: '2022-02-01',
        },
        {
            id: 3,
            amount: -20,
            description: 'Purchase',
            date: '2022-03-01',
        },
    ]);

    return (
        <AppPageMetadata title={messages['trans.sideBarName'].toString()}>
            <div className="user-list">
                <h1 className="page-title">
                    <IntlMessages id="trans.sideBarName" />
                </h1>
                <ul className="data-grid">
                    <li className="grid-header">
                        <strong>User_ID</strong>
                        <strong>Amount</strong>
                        <strong>Description</strong>
                        <strong>Date</strong>
                    </li>
                    {transactions.map((transaction) => (
                        <li key={transaction.id} className="user-item">
                            <span>{transaction.id}</span>
                            <span>{transaction.amount}</span>
                            <span>{transaction.description}</span>
                            <span>{transaction.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </AppPageMetadata>
    );
};

export default Transactions;