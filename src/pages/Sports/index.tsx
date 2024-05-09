import React, { useEffect, useState } from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';
import './sports.css';

interface ISport {
    id: number;
    name: string;
    positions: {
        id: number;
        name: string;
        key: string | null;
        sport_position: {
            sportId: number;
            positionId: number;
        };
    }[];
}

const Sports: React.FC = () => {
    const { setBreadcrumb }: any = useBreadcrumbContext();
    const { messages } = useIntl();

    useEffect(() => {
        setBreadcrumb([
            {
                text: <IntlMessages id="Sports.sideBarName" />,
                url: '/sports',
            },
        ]);
    }, []);

    const [sports, setSports] = useState<ISport[]>([
        {
            id: 1,
            name: 'Football',
            positions: [
                {
                    id: 101,
                    name: 'Goalkeeper',
                    key: 'GK',
                    sport_position: {
                        sportId: 1,
                        positionId: 101,
                    },
                },
                {
                    id: 102,
                    name: 'Defender',
                    key: null,
                    sport_position: {
                        sportId: 1,
                        positionId: 102,
                    },
                },
                {
                    id: 103,
                    name: 'Midfielder',
                    key: null,
                    sport_position: {
                        sportId: 1,
                        positionId: 103,
                    },
                },
                {
                    id: 104,
                    name: 'Forward',
                    key: null,
                    sport_position: {
                        sportId: 1,
                        positionId: 104,
                    },
                },
            ],
        },
        {
            id: 2,
            name: 'Basketball',
            positions: [
                {
                    id: 201,
                    name: 'Point Guard',
                    key: null,
                    sport_position: {
                        sportId: 2,
                        positionId: 201,
                    },
                },
                {
                    id: 202,
                    name: 'Shooting Guard',
                    key: null,
                    sport_position: {
                        sportId: 2,
                        positionId: 202,
                    },
                },
                {
                    id: 203,
                    name: 'Small Forward',
                    key: null,
                    sport_position: {
                        sportId: 2,
                        positionId: 203,
                    },
                },
                {
                    id: 204,
                    name: 'Power Forward',
                    key: null,
                    sport_position: {
                        sportId: 2,
                        positionId: 204,
                    },
                },
                {
                    id: 205,
                    name: 'Center',
                    key: null,
                    sport_position: {
                        sportId: 2,
                        positionId: 205,
                    },
                },
            ],
        },
    ]);

    // const [selectedSportId, setSelectedSportId] = useState<number | null>(null);

    return (
        <div className="subscriptions-page">
            <h1 className="page-title">Sports</h1>
            <table className="subscriptions-table">
                <thead>
                    <tr>
                        <th>Sport ID</th>
                        <th>Sport Name</th>
                        <th>Positions</th>
                    </tr>
                </thead>
                <tbody>
                    {sports.map((sport) => (
                        <tr key={sport.id}>
                            <td>{sport.id}</td>
                            <td>{sport.name}</td>
                            <td>
                                <ul>
                                    {sport.positions.map((position) => (
                                        <li key={position.id}>
                                            {position.name} ({position.key})
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Sports;