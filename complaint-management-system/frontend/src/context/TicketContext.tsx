import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { Ticket, User } from '../types/Ticket';
const api_end_point = import.meta.env.VITE_BACKEND_URL;
import { toast } from 'react-toastify';

interface TicketContextType {
  tickets: Ticket[];
  user_data: User
  setFilterItem: any
  createTicket: (ticketData: Omit<Ticket, 'id' | 'created_at' | 'updated_at'>) => void;
  updateTicket: (id: number, updatedData: Partial<Ticket>) => void;
  deleteTicket: (id: number) => void;
  isModalOpen: boolean
  setIsModalOpen: any
  id: number
  setId: any
 
  updateStatus: any
 

}

export const TicketContext = createContext<TicketContextType | null>(null);

export const TicketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const user = localStorage.getItem('user')
  const parseData = JSON.parse(user)
  const user_data = parseData?.data
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterItem, setFilterItem] = useState('All')
  const [id, setId] = useState(null)

  


  const fetchTickets = async () => {
    const response = await axios.get<Ticket[]>(`${api_end_point}/tickets/all?filter=${filterItem}`, {
      withCredentials: true,
    });
    setTickets(response.data);

  };

  const createTicket = async (ticketData: Omit<Ticket, 'id' | 'created_at' | 'updated_at'>) => {
    const response = await axios.post<Ticket>(`${api_end_point}/tickets/create`, ticketData, {
      withCredentials: true,
    });
    if (response) {
      toast('Ticket created successfully')
      setIsModalOpen(false)
    }
    setTickets([...tickets, response.data]);
  };

  const updateTicket = async (updatedData: Partial<Ticket>) => {
    const response = await axios.post<Ticket>(`${api_end_point}/tickets/update`, updatedData, {
      withCredentials: true,
    });
    setIsModalOpen(false)
    if (response) {
      toast('Ticket updated successfully')

      setTickets((prevTickets) =>
        prevTickets.map((ticket) =>
          ticket.id === updatedData.id
            ? {
              ...ticket,
              subject: updatedData.subject || ticket.subject,
              description: updatedData.description || ticket.description,
            }
            : ticket
        )
      );


    }

  };
  const updateStatus = async (status, selectedId) => {
    const response = await axios.post<Ticket>(`${api_end_point}/tickets/update-status`, {
      status: status,
      id: selectedId
    }, {
      withCredentials: true,
    });

    if (response) {
      toast('Status updated successfully')

      setTickets((prevTickets) =>
        prevTickets.map((ticket) =>
          ticket.id === selectedId
            ? {
              ...ticket,
              status: status

            }
            : ticket
        )
      );


    }

  };

  const deleteTicket = async (id: number) => {
    const response = await axios.post(`${api_end_point}/tickets/delete`, {
      id: id
    }, {
      withCredentials: true,
    });
    if (response) {
      toast('Ticket deleted  successfully')
      setTickets(tickets.filter(ticket => ticket.id !== id));
    }

  };

  useEffect(() => {
    fetchTickets()
  }, [filterItem]);
  return (
    <TicketContext.Provider value={{user_data, setFilterItem, tickets, createTicket, updateTicket, deleteTicket, isModalOpen, setIsModalOpen, id, setId, updateStatus }}>
      {children}
    </TicketContext.Provider>
  );
};