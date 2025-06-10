export interface Session {
    id: number;
    title: string;
    description: string;
    duration: number;
    difficulty: 'Facile' | 'Moyen' | 'Difficile';
    maxPlayers: number;
    image: string;
}

export interface BookingFormData {
    name: string;
    email: string;
    phone: string;
    sessionId: number;
    date: string;
    participants: number;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}