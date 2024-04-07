import React from 'react';
import { Button, Modal } from 'antd';
import './modal.css';

interface IClub {
    id: number;
    name: string;
    description: string;
    location: string;
    picture: string;
    isBlocked: boolean;
    user_id: number;
}

interface DetModalProps {
    club: IClub | null;
    closeModal: () => void;
}

const DetModal: React.FC<DetModalProps> = ({ club, closeModal }) => {
    return (
        <Modal
            title={club?.name}
            visible={!!club}
            onCancel={closeModal}
            footer={[
                <Button key="close" onClick={closeModal}>
                    Close
                </Button>
            ]}
            className="modal" // Apply the "modal" class
        >
            {club && (
                <div className="modal-content"> {/* Apply the "modal-content" class */}
                    <div className="modal-title">{club.name}</div>
                    <div className="modal-close" onClick={closeModal}>
                        &times;
                    </div>
                    <div className="modal-body">
                        <p>Description: {club.description}</p>
                        <p>Location: {club.location}</p>
                        <img src={club.picture} alt={club.name} />

                    </div>
                    <div className="modal-footer">

                    </div>
                </div>
            )}
        </Modal>
    );
};

export default DetModal;