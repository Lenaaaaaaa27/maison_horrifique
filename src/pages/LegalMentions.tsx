const LegalMentions = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-gray-300">
            <h1 className="text-4xl font-creepy text-primary mb-8 text-center">Mentions légales</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">Éditeur du site</h2>
                <div className="bg-dark p-6 rounded-lg shadow">
                    <p>La Maison Horrifique SAS</p>
                    <p>13 Rue de la Peur, 75000 Paris</p>
                    <p>Téléphone : 01 23 45 67 89</p>
                    <p>Email : contact@maisonhorrifique.com</p>
                    <p>Capital social : 50 000 €</p>
                    <p>RCS Paris 123 456 789</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">Hébergement</h2>
                <div className="bg-dark p-6 rounded-lg shadow">
                    <p>Nom de l'hébergeur : Example Hosting</p>
                    <p>Adresse : 123 Cloud Street, Internet</p>
                    <p>Téléphone : +1 234 567 890</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">Protection des données</h2>
                <div className="bg-dark p-6 rounded-lg shadow">
                    <p>
                        Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à la gestion des réservations.
                        Conformément à la loi "informatique et libertés" du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès,
                        de modification et de suppression des données vous concernant.
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">Cookies</h2>
                <div className="bg-dark p-6 rounded-lg shadow">
                    <p>
                        Ce site utilise des cookies pour améliorer l'expérience utilisateur.
                        Vous pouvez configurer votre navigateur pour refuser les cookies.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default LegalMentions;