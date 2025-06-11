import { useState } from 'react';
import type { ContactFormData } from '../types';

const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Ca c'est pour simuler une api en back.
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Message envoyé:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
    };

    if (isSubmitted) {
        return (
            <div className="max-w-md mx-auto py-12 px-6 bg-white rounded-lg shadow-md mt-16 mb-16 text-center">
                <div className="text-center animate-fade-in">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Message envoyé!</h3>
                    <p className="text-gray-600 mb-6">
                        Merci {formData.name}, nous avons bien reçu votre message et nous vous répondrons dès que possible.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Envoyer un nouveau message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto py-12 px-6 bg-white rounded-lg shadow-md mt-16 mb-16">
            {!isSubmitted ? (
                <>
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contactez-nous</h2>
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
                            <label className="block text-gray-700 font-medium mb-1">Message</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full px-6 py-3 rounded-md text-white font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'}`}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Envoi en cours...
                        </span>
                            ) : 'Envoyer'}
                        </button>
                    </form>
                </>
            ) : null}
        </div>
    );
};

export default ContactForm;