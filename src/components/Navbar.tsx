import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black text-white px-6 py-4 shadow-lg">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold tracking-wide hover:text-red-500 transition duration-300">
                    La Maison Horrifique
                </Link>
                <div className="flex space-x-6 text-lg">
                    <Link to="/booking" className="hover:text-red-400 transition duration-300">Réservation</Link>
                    <Link to="/sessions" className="hover:text-red-400 transition duration-300">Sessions</Link>
                    <Link to="/contact" className="hover:text-red-400 transition duration-300">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
