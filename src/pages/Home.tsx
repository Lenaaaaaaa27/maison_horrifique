import { sessions } from '../data/sessions';
import SessionCard from '../components/SessionCard';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1>Bienvenue à La Maison Horrifique</h1>
                <p>Vivez une expérience d'escape game unique dans une ambiance horrifique</p>
            </section>

            <section className="about">
                <h2>À propos de nous</h2>
                <p>La Maison Horrifique propose des escape games immersifs depuis 2015, avec des scénarios originaux et des décors impressionnants.</p>
            </section>

            <section className="sessions-preview">
                <h2>Nos sessions</h2>
                <div className="sessions-grid">
                    {sessions.slice(0, 2).map(session => (
                        <SessionCard key={session.id} session={session} />
                    ))}
                </div>
            </section>

            <section className="contact-info">
                <h2>Contactez-nous</h2>
                <p>Email: contact@maisonhorrifique.com</p>
                <p>Téléphone: 01 23 45 67 89</p>
                <p>Adresse: 13 Rue de la Peur, 75000 Paris</p>
            </section>
        </div>
    );
};

export default Home;