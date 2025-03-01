import React from "react";
import { Modal } from "antd"
import TicketForm from "../Tickets/TicketForm"


export const ModalItem = ({isModalOpen, setIsModalOpen, onSubmit,id}) => {

    return (
        <Modal
        title={`${id ? `Update ticket id:  ${id}` : 'Create ticket'}`}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <TicketForm onSubmit={onSubmit} id={id} />

      </Modal>
    )
}