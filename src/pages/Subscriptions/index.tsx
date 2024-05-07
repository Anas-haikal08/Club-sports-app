import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import "./subscriptions.css"

interface ISubscription {
    club_id: number;
    plan_id: number;
    start_date: string;
    end_date: string;
}

interface IPlan {
    plan_id: number;
    name: string;
    price: number;
}

const Subscriptions: React.FC = () => {
    const [subscriptions, setSubscriptions] = useState<ISubscription[]>([]);
    const [plans, setPlans] = useState<IPlan[]>([]);

    useEffect(() => {
        // Fetch subscriptions and plans data from an API or other data source
        // and set them to the subscriptions and plans states
        const fetchData = async () => {
            try {
                // Example API calls
                const subscriptionsResponse = await fetch(
                    'https://api.example.com/subscriptions'
                );
                const subscriptionsData = await subscriptionsResponse.json();
                setSubscriptions(subscriptionsData);

                const plansResponse = await fetch('https://api.example.com/plans');
                const plansData = await plansResponse.json();
                setPlans(plansData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        {
            title: 'Club ID',
            dataIndex: 'club_id',
            key: 'club_id',
        },
        {
            title: 'Plan',
            dataIndex: 'plan_id',
            key: 'plan_id',
            render: (planId: number) => {
                const plan = plans.find((p) => p.plan_id === planId);
                return plan ? plan.name : 'Unknown Plan';
            },
        },
        {
            title: 'Start Date',
            dataIndex: 'start_date',
            key: 'start_date',
        },
        {
            title: 'End Date',
            dataIndex: 'end_date',
            key: 'end_date',
        },
    ];

    return (
        <div className="subscriptions-page">
            <h1 className="page-title">Subscriptions</h1>

            <Table className="subscriptions-table" dataSource={subscriptions} columns={columns} />
        </div>
    );
};

export default Subscriptions;