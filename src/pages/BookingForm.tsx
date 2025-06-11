import { useState } from 'react';
import type { BookingFormData } from '../types';

const BookingForm = () => {
    const [formData, setFormData] = useState<BookingFormData>({
        name: '',
        email: '',
        phone: '',
        sessionId: 1,
        date: '',
        participants: 2
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Reservation submitted:', formData);
        setIsSubmitted(true);
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            sessionId: 1,
            date: '',
            participants: 2
        });
    };

    return (
        <div className="max-w-md mx-auto py-12 px-6 bg-white rounded-lg shadow-md mt-16 mb-16">
            {!isSubmitted ? (
                <>
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Réserver une session</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-group">
                            <label className="block text-gray-700 font-medium mb-1">Nom complet</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="form-group">
                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="form-group">
                            <label className="block text-gray-700 font-medium mb-1">Téléphone</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="form-group">
                            <label className="block text-gray-700 font-medium mb-1">Date</label>
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({...formData, date: e.target.value})}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="form-group">
                            <label className="block text-gray-700 font-medium mb-1">Nombre de participants</label>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={formData.participants}
                                onChange={(e) => setFormData({...formData, participants: parseInt(e.target.value)})}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
                        >
                            Réserver
                        </button>
                    </form>
                </>
            ) : (
                <div className="text-center animate-fade-in">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Réservation confirmée!</h3>
                    <p className="text-gray-600 mb-6">
                        Merci {formData.name}, votre réservation pour le {formData.date} a bien été enregistrée.
                    </p>
                    <button
                        onClick={resetForm}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Faire une nouvelle réservation
                    </button>
                </div>
            )}
        </div>
    );
};

export default BookingForm;