import type { Session } from '../types';
import { Link } from 'react-router-dom';

const SessionCard = ({ session }: { session: Session }) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
            <img
                src={session.image}
                alt={session.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                <p className="text-gray-700 mb-3">{session.description}</p>
                <p className="text-sm text-gray-600">Durée: {session.duration} min</p>
                <p className="text-sm text-gray-600 mb-4">Difficulté: {session.difficulty}</p>
                <Link
                    to={`/sessions/${session.id}`}
                    className="inline-block px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                    Voir détails
                </Link>
            </div>
        </div>
    );
};

export default SessionCard;
