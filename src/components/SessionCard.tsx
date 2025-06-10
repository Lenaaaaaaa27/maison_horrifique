// SessionCard.tsx
import type { Session } from '../types';
import { Link } from 'react-router-dom';

const SessionCard = ({ session }: { session: Session }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 mt-8">
            <img
                src={session.image}
                alt={session.title}
                className="w-full h-56 object-cover"
            />
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{session.title}</h3>
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                        {session.difficulty}
                    </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{session.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">
                        ⏱ {session.duration} min
                    </span>
                    <Link
                        to={`/sessions/${session.id}`}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium"
                    >
                        Voir détails
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SessionCard;