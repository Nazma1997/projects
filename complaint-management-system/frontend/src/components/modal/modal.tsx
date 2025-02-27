import React from "react";
import { Modal } from "antd"
import TicketForm from "../Tickets/TicketForm"


export const ModalItem = ({isModalOpen, setIsModalOpen, onSubmit, title}) => {
    return (
        <Modal
        title={title}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <TicketForm onSubmit={onSubmit} />

      </Modal>
    )
}