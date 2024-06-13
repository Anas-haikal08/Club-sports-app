import React from 'react';
import { Button, Modal } from 'antd';
import './modal.css';

interface IField {
    id: number;
    size: number;
    pic: string | null;
    description: string | null;
    duration: string;
    price: string;
    type: string;
    isUnderMaintenance: boolean;
    start_date: string;
    end_date: string;
    sport: {
        id: number;
        name: string;
    };
}

interface DetModalProps {
    field: IField | null;
    closeModal: () => void;
}

const DetModal: React.FC<DetModalProps> = ({ field, closeModal }) => {
    return (
        <Modal
            title={`Field Details`}
            visible={!!field}
            onCancel={closeModal}
            footer={[
                <Button key="close" onClick={closeModal}>
                    Close
                </Button>
            ]}
            className="modal" // Apply the "modal" class
        >
            {field && (
                <div className="modal-content"> {/* Apply the "modal-content" class */}
                    <div className="modal-title">Field ID: {field.id}</div>
                    <div className="modal-body">
                        <p>Size: {field.size}</p>
                        <p>Description: {field.description}</p>
                        <p>Duration: {field.duration}</p>
                        <p>Price: {field.price}</p>
                        <p>Type: {field.type}</p>
                        <p>Sport ID: {field.sport.id}</p>
                        <p>Under Maintenance: {field.isUnderMaintenance ? 'Yes' : 'No'}</p>
                        <p>Start Date: {field.start_date}</p>
                        <p>End Date: {field.end_date}</p>
                        {field.pic && <img src={field.pic} alt={`Field ${field.id}`} />}
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default DetModal;
