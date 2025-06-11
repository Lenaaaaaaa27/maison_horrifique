import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookingForm from './pages/BookingForm';
import SessionDetails from './pages/SessionDetails';
import ContactForm from './pages/ContactForm';
import LegalMentions from './pages/LegalMentions';
import SessionsList from "./pages/SessionList.tsx";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                    <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/booking" element={<BookingForm />} />
                        <Route path="/sessions" element={<SessionsList />} />
                        <Route path="/sessions/:id" element={<SessionDetails />} />
                        <Route path="/contact" element={<ContactForm />} />
                        <Route path="/legal" element={<LegalMentions />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;