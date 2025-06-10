// SessionDetails.tsx
import { useParams } from 'react-router-dom';
import { sessions } from '../data/sessions';
import { Link } from 'react-router-dom';
import houseImage from '../images/house.jpg';
import asylumImage from '../images/asylum.jpg';

const SessionDetails = () => {
    const { id } = useParams<{ id: string }>();
    const session = sessions.find(s => s.id === Number(id));

    if (!session) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <div className="text-center p-8 border border-red-600 rounded-lg bg-gray-800">
                    <h2 className="text-3xl font-bold mb-4">Session non trouvée</h2>
                    <Link
                        to="/sessions"
                        className="mt-4 inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-300"
                    >
                        ← Retour aux sessions
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-red-500">{session.title}</h1>
                    <div className="w-24 h-1 bg-red-600 mb-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl">
                        <img
                            src={session.id === 1 ? houseImage : asylumImage}
                            alt={session.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-red-400">Description</h3>
                            <p className="text-gray-300">{session.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <h4 className="text-sm font-semibold text-gray-400 mb-1">Durée</h4>
                                <p className="text-xl font-bold">{session.duration} minutes</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <h4 className="text-sm font-semibold text-gray-400 mb-1">Difficulté</h4>
                                <p className="text-xl font-bold capitalize">{session.difficulty}</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <h4 className="text-sm font-semibold text-gray-400 mb-1">Joueurs max</h4>
                                <p className="text-xl font-bold">{session.maxPlayers}</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <h4 className="text-sm font-semibold text-gray-400 mb-1">Thème</h4>
                                <p className="text-xl font-bold">Horreur</p>
                            </div>
                        </div>

                        <Link
                            to="/booking"
                            state={{ sessionId: session.id }}
                            className="inline-block w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-bold text-center rounded-lg transition-colors duration-300 shadow-lg"
                        >
                            Réserver cette session
                        </Link>
                    </div>
                </div>

                <Link
                    to="/sessions"
                    className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Retour aux sessions
                </Link>
            </div>
        </div>
    );
};

export default SessionDetails;