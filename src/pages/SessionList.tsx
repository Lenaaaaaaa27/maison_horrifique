// SessionsList.tsx
import { sessions } from '../data/sessions';
import SessionCard from '../components/SessionCard';
import { Link } from 'react-router-dom';

const SessionsList = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
                <div className="relative z-10 px-4 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4">Nos sessions d'escape game</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Découvrez nos aventures immersives qui vous transporteront dans des mondes extraordinaires
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {sessions.map(session => (
                            <SessionCard key={session.id} session={session} />
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
                        >
                            ← Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SessionsList;