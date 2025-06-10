import { useState } from 'react';
import type {BookingFormData} from '../types';

const BookingForm = () => {
    const [formData, setFormData] = useState<BookingFormData>({
        name: '',
        email: '',
        phone: '',
        sessionId: 1,
        date: '',
        participants: 2
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Reservation submitted:', formData);
    };

    return (
        <div className="booking-form">
            <h2>Réserver une session</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nom complet</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                    />
                </div>


                <button type="submit" className="btn">Réserver</button>
            </form>
        </div>
    );
};

export default BookingForm;