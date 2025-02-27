import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { Ticket } from '../types/Ticket';

interface TicketContextType {
  tickets: Ticket[];
  createTicket: (ticketData: Omit<Ticket, 'id' | 'created_at' | 'updated_at'>) => void;
  updateTicket: (id: number, updatedData: Partial<Ticket>) => void;
  deleteTicket: (id: number) => void;
}

export const TicketContext = createContext<TicketContextType | null>(null);

export const TicketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const fetchTickets = async () => {
    try {
      const response = await axios.get<Ticket[]>('/api/tickets');
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const createTicket = async (ticketData: Omit<Ticket, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const response = await axios.post<Ticket>('/api/tickets', ticketData);
      setTickets([...tickets, response.data]);
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  const updateTicket = async (id: number, updatedData: Partial<Ticket>) => {
    try {
      const response = await axios.put<Ticket>(`/api/tickets/${id}`, updatedData);
      setTickets(tickets.map(ticket => (ticket.id === id ? response.data : ticket)));
    } catch (error) {
      console.error('Error updating ticket:', error);
    }
  };

  const deleteTicket = async (id: number) => {
    try {
      await axios.delete(`/api/tickets/${id}`);
      setTickets(tickets.filter(ticket => ticket.id !== id));
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <TicketContext.Provider value={{ tickets, createTicket, updateTicket, deleteTicket }}>
      {children}
    </TicketContext.Provider>
  );
};