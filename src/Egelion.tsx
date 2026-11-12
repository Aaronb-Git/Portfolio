
export default function Egelion() {

    return (
        <>

            <nav className="breadcrumbs" aria-label="Fil d’Ariane">
                <a href="index.html#projects">Projets</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Egelion</span>
            </nav>


            <section className="page-section case-study" id="egelion" aria-labelledby="egelion-title">
                <header className="section-header">
                    <span>PROJET EN ÉQUIPE / BTS CIEL · 2025–2026</span>
                    <h1 id="egelion-title">EGELION<span>.</span></h1>
                    <p>Une application pour accompagner les livraisons de céréales d’une coopérative agricole.</p>
                </header>

                <div className="case-lead">
                    <div>
                        <span className="red-label">LE PROJET SCARA</span>
                        <h2>Simplifier le travail de l’opérateur.</h2>
                        <p>
                            Réalisé en équipe de trois dans le cadre du BTS CIEL, le projet SCARA répond à un besoin concret : faciliter le suivi des véhicules et des livraisons sur un site de collecte de céréales. Pendant les moissons, les arrivées se multiplient et l’opérateur doit identifier chaque adhérent, connaître la céréale livrée et suivre les pesées sans ralentir les autres véhicules.
                        </p>
                        <p>
                            Egelion rassemble les informations utiles dans une même interface : recherche des adhérents, gestion des livraisons, pesée des véhicules et retour vidéo. L’objectif est de limiter les saisies manuelles et de rendre le suivi plus simple pour l’opérateur.
                        </p>
                        <p>
                            Le projet associe une application sur le PC opérateur, un pont bascule relié à une Raspberry Pi, une caméra IP et une base de données commune. Chaque élément apporte une information utile au suivi de la livraison ; Egelion les réunit au poste de travail de l’opérateur.
                        </p>
                    </div>
                    <aside className="learning-panel">
                        <h2>En quelques mots</h2>
                        <p><strong>Cadre :</strong> projet de BTS CIEL, lycée Les Lombards.</p>
                        <p><strong>Équipe :</strong> Nolan Jacquot, Aaron Bueb et Soren Mergey.</p>
                        <p><strong>Mon rôle :</strong> étudiant 2, développement de l’application PC opérateur.</p>
                        <ul className="tags">
                            <li>Python</li>
                            <li>CustomTkinter</li>
                            <li>MySQL</li>
                            <li>OpenCV</li>
                        </ul>
                    </aside>
                </div>

                <figure className="project-evidence">
                    <img src="assets/projects/egelion-ihm.png" alt="Vue complète de l’application Egelion : onglets de navigation, carte d’une livraison et bouton de deuxième passage." width={652} height={446} loading="lazy" />
                    <figcaption>Vue complète de l’IHM de gestion des livraisons — projet SCARA, rapport de BTS CIEL, p. 32.</figcaption>
                </figure>

                <h2 className="subheading">Comment se déroule une livraison ?</h2>
                <ol className="process-list">
                    <li>
                        <strong>Accueillir le véhicule.</strong> L’opérateur se connecte, recherche l’adhérent et sélectionne le type de céréales apporté. Une nouvelle livraison est alors associée à cet adhérent.
                    </li>
                    <li>
                        <strong>Effectuer la première pesée.</strong> Le véhicule chargé passe sur le pont bascule. L’application récupère son poids et utilise la caméra pour lire sa plaque d’immatriculation. Ces informations permettent de retrouver la livraison par la suite.
                    </li>
                    <li>
                        <strong>Suivre le déchargement.</strong> La livraison reste visible dans l’interface pendant que le véhicule dépose sa marchandise. Plusieurs livraisons peuvent ainsi être suivies en parallèle.
                    </li>
                    <li>
                        <strong>Retrouver le véhicule au retour.</strong> Après le déchargement, un deuxième passage permet de peser le véhicule à vide. La différence entre les deux pesées sert à déterminer la quantité de céréales livrée. L’opérateur peut vérifier et corriger la plaque si sa lecture automatique est incorrecte.
                    </li>
                </ol>

                <div className="reflection-grid">
                    <article className="learning-panel" id="architecture">
                        <h2>Ma contribution</h2>
                        <p>
                            J’ai développé l’interface utilisée sur le PC opérateur et relié les informations des adhérents aux pesées et à la caméra. Mon travail permet de suivre une livraison depuis l’identification du véhicule jusqu’à son deuxième passage sur le pont bascule, avec une sauvegarde locale des informations.
                        </p>
                        <p>
                            J’ai organisé l’application autour des tâches de l’opérateur : retrouver un adhérent, créer une livraison, consulter celles en attente et visualiser le retour caméra. La sauvegarde locale conserve les informations de livraison en cas d’indisponibilité du réseau ou de la base de données.
                        </p>
                    </article>
                    <article className="learning-panel" id="resultats">
                        <h2>Ce que ce projet m’a apporté</h2>
                        <p>
                            Egelion m’a permis de travailler sur une application concrète, en lien avec les réalisations de mes coéquipiers. J’ai appris à partir d’un besoin métier, à construire une interface adaptée à son utilisateur et à faire communiquer plusieurs éléments d’un même système.
                        </p>
                        <p>
                            Le travail en équipe m’a aussi demandé de coordonner les échanges entre mon application, la partie embarquée et la base de données. Au-delà du code, ce projet m’a appris à penser au déroulement réel d’une opération et aux informations dont l’utilisateur a besoin à chaque étape.
                        </p>
                    </article>
                </div>

                <a className="secondary-button" href="index.html#projects">← TOUS LES PROJETS</a>
            </section>
        </>
    )
}
