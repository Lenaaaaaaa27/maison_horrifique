import { useState } from 'react';
import type {ContactFormData} from '../types';

const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Message envoyé:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    if (isSubmitted) {
        return (
            <div className="contact-confirmation">
                <h2>Merci pour votre message !</h2>
                <p>Nous vous répondrons dans les plus brefs délais.</p>
                <button onClick={() => setIsSubmitted(false)} className="btn">
                    Envoyer un nouveau message
                </button>
            </div>
        );
    }

    return (
        <div className="contact-form">
            <h2>Contactez-nous</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={5}
                        required
                    />
                </div>

                <button type="submit" className="btn">Envoyer</button>
            </form>
        </div>
    );
};

export default ContactForm;