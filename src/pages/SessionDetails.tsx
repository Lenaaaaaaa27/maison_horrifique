import { useParams } from 'react-router-dom';
import { sessions } from '../data/sessions';
import { Link } from 'react-router-dom';

const SessionDetails = () => {
    const { id } = useParams<{ id: string }>();
    const session = sessions.find(s => s.id === Number(id));

    if (!session) {
        return <div className="session-not-found">Session non trouvée</div>;
    }

    return (
        <div className="session-details">
            <h1>{session.title}</h1>
            <div className="session-content">
                <img src={session.image} alt={session.title} className="session-image" />
                <div className="session-info">
                    <p><strong>Description :</strong> {session.description}</p>
                    <p><strong>Durée :</strong> {session.duration} minutes</p>
                    <p><strong>Difficulté :</strong> {session.difficulty}</p>
                    <p><strong>Nombre maximum de joueurs :</strong> {session.maxPlayers}</p>
                    <Link to="/booking" state={{ sessionId: session.id }} className="btn-book">
                        Réserver cette session
                    </Link>
                </div>
            </div>
            <Link to="/sessions" className="btn-back">← Retour aux sessions</Link>
        </div>
    );
};

export default SessionDetails;