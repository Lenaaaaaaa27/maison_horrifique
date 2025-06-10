import { sessions } from '../data/sessions';
import SessionCard from '../components/SessionCard';
import { Link } from 'react-router-dom';

const SessionsList = () => {
    return (
        <div className="sessions-list">
            <h1>Nos sessions d'escape game</h1>
            <div className="sessions-grid">
                {sessions.map(session => (
                    <SessionCard key={session.id} session={session} />
                ))}
            </div>
            <Link to="/" className="btn-back">← Retour à l'accueil</Link>
        </div>
    );
};

export default SessionsList;