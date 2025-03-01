import React from 'react';
import { Ticket } from '../../types/Ticket';
import TicketItem from './TicketItem';

interface TicketListProps {
  tickets: Ticket[];
  onDelete: (id: number) => void;
  onUpdate?: ( updatedData: Partial<Ticket>) => void;
}

const TicketList: React.FC<TicketListProps> = ({ tickets, onDelete, onUpdate }) => {
  return (
    <div >
      {tickets.length ?  tickets?.map(ticket => (
        <TicketItem
         
          ticket={ticket}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      )) : <p>No tickets found</p>}
    </div>
  );
};

export default TicketList;