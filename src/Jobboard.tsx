
export default function Jobboard() {

    return (
        <>

            <nav className="breadcrumbs" aria-label="Fil d’Ariane">
                <a href="index.html#projects">Projets</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Jobboard</span>
            </nav>

            <section className="page-section case-study" id="jobboard" aria-labelledby="jobboard-title">
                <header className="section-header">
                    <span>PROJET EN BINÔME / EPITECH NANCY</span>
                    <h1 id="jobboard-title">JOBBOARD<span>.</span></h1>
                    <p>Une application web pour consulter des offres d’emploi et envoyer des candidatures.</p>
                </header>
                <div className="case-lead">
                    <div>
                        <h2>De l’offre à la candidature</h2>
                        <p>Le site permet de parcourir les annonces et de consulter leurs détails. Après inscription, les candidats peuvent postuler et repérer les offres auxquelles ils ont déjà répondu.</p>
                        <p>L’espace administrateur permet de gérer les entreprises, les annonces, les utilisateurs et les candidatures.</p>
                        <a className="main-button" href="https://github.com/Aaronb-Git/jobboard">VOIR LE CODE SUR GITHUB <span aria-hidden="true">↗</span></a>
                    </div>
                    <aside className="learning-panel">
                        <h2>Technologies</h2>
                        <ul className="tags">
                            <li>Vue.js</li>
                            <li>TypeScript</li>
                            <li>Express</li>
                            <li>MariaDB</li>
                            <li>Docker Compose</li>
                        </ul>
                    </aside>
                </div>
                <h2 className="subheading">Le parcours d’un candidat</h2>
                <ol className="process-list">
                    <li><strong>Consulter les offres.</strong> Le candidat parcourt les annonces et ouvre celles qui l’intéressent.</li>
                    <li><strong>Créer un compte.</strong> Il s’inscrit et se connecte pour accéder au formulaire.</li>
                    <li><strong>Postuler.</strong> Il envoie sa candidature et retrouve sur l’accueil les offres auxquelles il a déjà répondu.</li>
                </ol>
                <div className="reflection-grid">
                    <article className="learning-panel">
                        <h2>Architecture</h2>
                        <p>L’interface Vue.js appelle une API Express. MariaDB conserve les comptes, les entreprises, les offres et les candidatures. L’API identifie les utilisateurs par leur session et contrôle les droits d’administration.</p>
                    </article>
                    <article className="learning-panel">
                        <h2>Lancer le projet en local</h2>
                        <p>Docker Compose démarre les trois services. Le README du dépôt détaille la configuration et la création du premier compte administrateur.</p>
                    </article>
                </div>
                <a className="secondary-button" href="index.html#projects">← TOUS LES PROJETS</a>
            </section>
        </>
    )
}
