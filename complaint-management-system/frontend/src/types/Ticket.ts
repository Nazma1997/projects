export interface Ticket {
    id: number;
    subject: string;
    description: string;
    status: string;
   
  }
  
  export interface Reply {
    id: number;
    ticket_id: number;
    user_id: number;
    message: string;
    created_at: string;
  }