import { sessions } from '../data/sessions';
import SessionCard from '../components/SessionCard';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/horror-bg.jpg')] bg-cover bg-center opacity-30"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
                        Bienvenue à <span className="text-red-600">La Maison Horrifique</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up delay-100">
                        Vivez une expérience d'escape game unique dans une ambiance horrifique
                    </p>
                    <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105 animate-fade-in-up delay-200">
                        Réserver maintenant
                    </button>
                </div>
                <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>

            <section className="py-20 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        À propos de nous
                    </h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        La Maison Horrifique propose des escape games immersifs depuis 2015, avec des scénarios originaux et des décors impressionnants.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <div className="text-red-600 text-4xl mb-4">🏚️</div>
                        <h3 className="text-xl font-bold mb-3">Décors authentiques</h3>
                        <p className="text-gray-600">Nos salles sont conçues avec des matériaux réels pour une immersion totale.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <div className="text-red-600 text-4xl mb-4">👻</div>
                        <h3 className="text-xl font-bold mb-3">Acteurs professionnels</h3>
                        <p className="text-gray-600">Nos comédiens vous plongeront dans une atmosphère unique et terrifiante.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <div className="text-red-600 text-4xl mb-4">🧩</div>
                        <h3 className="text-xl font-bold mb-3">Scénarios originaux</h3>
                        <p className="text-gray-600">Chaque jeu est une histoire unique écrite par nos auteurs spécialisés.</p>
                    </div>
                </div>
            </section>

            {/* Sessions Preview */}
            <section className="py-20 bg-gray-100 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Nos sessions
                        </h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Découvrez nos expériences les plus populaires
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {sessions.slice(0, 2).map(session => (
                            <SessionCard key={session.id} session={session} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a href="/sessions" className="inline-block px-8 py-3 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition duration-300">
                            Voir toutes les sessions
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Contactez-nous
                        </h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 hover:bg-gray-800 rounded-lg transition duration-300">
                            <div className="text-red-600 text-3xl mb-4">✉️</div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p>contact@maisonhorrifique.com</p>
                        </div>
                        <div className="p-6 hover:bg-gray-800 rounded-lg transition duration-300">
                            <div className="text-red-600 text-3xl mb-4">📞</div>
                            <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                            <p>01 23 45 67 89</p>
                        </div>
                        <div className="p-6 hover:bg-gray-800 rounded-lg transition duration-300">
                            <div className="text-red-600 text-3xl mb-4">📍</div>
                            <h3 className="text-xl font-bold mb-2">Adresse</h3>
                            <p>13 Rue de la Peur, 75000 Paris</p>
                        </div>
                    </div>

                    <div className="mt-16 bg-gray-800 p-8 rounded-xl">
                        <h3 className="text-xl font-bold mb-4 text-center">Horaires d'ouverture</h3>
                        <div className="grid grid-cols-2 md:grid-cols-7 gap-4 text-center">
                            {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, index) => (
                                <div key={day} className="p-3">
                                    <div className="font-bold">{day}</div>
                                    <div className="text-sm text-gray-400">
                                        {index === 5 || index === 6 ? '10h-23h' : '14h-22h'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;