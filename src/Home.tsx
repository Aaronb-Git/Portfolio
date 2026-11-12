import { useContactForm } from "./useContactForm"

export default function Home() {
    const { contactStatus, copyDraft, draftText, mailto, submitContact } = useContactForm()

    return (
        <>



            <section className="page-section" id="home" aria-labelledby="home-title">
                <div className="hero-content">
                    <div className="eyebrow">
                        <span className="tiny-cross" aria-hidden="true">✛</span> JOUEUR 01 / DÉVELOPPEMENT
                    </div>
                    <h1 id="home-title">AARON <strong>BUEB<span className="red-period">.</span></strong></h1>
                    <div className="hero-role">LE CODE COMME <span>TERRAIN DE JEU.</span></div>
                    <p>
                        Étudiant en Master of Science à Epitech Nancy, je construis mon parcours en développement informatique. Prochaine mission : rejoindre une équipe en alternance.
                    </p>
                    <div className="hero-buttons">
                        <a className="main-button" href="#projects">EXPLORER MES PROJETS <span aria-hidden="true">↗</span></a><a className="secondary-button" href="assets/CV-Aaron-Bueb.pdf" download="CV-Aaron-Bueb.pdf">TÉLÉCHARGER MON CV <span aria-hidden="true">↓</span></a>
                    </div>
                    <div className="hero-meta">
                        <span>01 / NANCY, FRANCE</span><span>02 / EPITECH</span><span>03 / ALTERNANCE</span>
                    </div>
                </div>
                <aside className="agent-card" aria-label="Fiche de présentation">
                    <div className="card-top"><span>DOSSIER DÉVELOPPEUR</span><span>FR / 54</span></div>
                    <div className="portrait-wrap">
                        <div className="portrait-grid" aria-hidden="true"></div>
                        <img className="portrait" src="assets/aaron-bueb.jpg" alt="Portrait d’Aaron Bueb" width={240} height={240} />
                        <span className="portrait-code" aria-hidden="true">AB // 001</span>
                    </div>
                    <div className="agent-identity">
                        <span className="red-label">DÉVELOPPEUR EN FORMATION</span>
                        <h2>AARON BUEB</h2>
                    </div>
                    <dl className="card-info">
                        <div>
                            <dt>FORMATION</dt>
                            <dd>Master of Science</dd>
                        </div>
                        <div>
                            <dt>BASE</dt>
                            <dd>Nancy, France</dd>
                        </div>
                        <div>
                            <dt>OBJECTIF</dt>
                            <dd><span className="status-dot"></span> Alternance</dd>
                        </div>
                    </dl>
                    <div className="agent-loadout"><span>PYTHON</span><span>WEB</span><span>SQL</span></div>
                </aside>
                <div className="hero-bottom" aria-hidden="true">
                    <span>STRATÉGIE. CODE. PROGRESSION.</span><span>PORTFOLIO / 2026</span>
                </div>
            </section>


            <section className="page-section" id="profile" aria-labelledby="profile-title">
                <header className="section-header">
                    <span>01 / IDENTIFICATION</span>
                    <h2 id="profile-title" tabIndex={-1}>MON PROFIL<span>.</span></h2>
                    <p>Une personne derrière le code.</p>
                </header>
                <div className="profile-grid">
                    <div className="profile-main">
                        <span className="red-label">APPRENDRE, CONSTRUIRE, AVANCER</span>
                        <h2>Un esprit d’équipe.<br />Une envie de développer.</h2>
                        <p>
                            Je m’appelle Aaron Bueb. Après un bac général et un BTS CIEL au lycée Les Lombards à Troyes, je poursuis ma formation en Master of Science à Epitech Nancy. Je recherche une alternance en développement informatique pour mettre mes compétences en pratique et continuer à apprendre.
                        </p>
                        <p>
                            Mon stage chez Xefi m’a permis de travailler sur le support client et le dépannage informatique. Mes expériences dans la restauration m’ont aussi appris à travailler en équipe, à être polyvalent et à concilier études et activité professionnelle.
                        </p>
                        <a className="main-button" href="assets/CV-Aaron-Bueb.pdf" download="CV-Aaron-Bueb.pdf">
                            TÉLÉCHARGER MON CV <span aria-hidden="true">↓</span>
                        </a>
                    </div>
                    <aside className="profile-aside">
                        <dl className="stat-panel">
                            <div>
                                <dt>FORMATION ACTUELLE</dt>
                                <dd>Master of Science<small>Epitech · Nancy</small></dd>
                            </div>
                            <div>
                                <dt>MOBILITÉ</dt>
                                <dd>Permis B</dd>
                            </div>
                            <div>
                                <dt>LANGUES</dt>
                                <dd>Anglais & espagnol<small>Niveau scolaire</small></dd>
                            </div>
                        </dl>
                        <div className="interests">
                            <span className="red-label">HORS DU CLAVIER</span>
                            <p>Jeux vidéo <span>/</span> Sport <span>/</span> Musique</p>
                        </div>
                    </aside>
                </div>
                <div className="qualities">
                    <span>TRAVAIL D’ÉQUIPE</span><span>SENS DU SERVICE CLIENT</span><span>POLYVALENCE</span>
                </div>
            </section>


            <section className="page-section" id="skills" aria-labelledby="skills-title">
                <header className="section-header">
                    <span>02 / ÉQUIPEMENT</span>
                    <h2 id="skills-title" tabIndex={-1}>MES COMPÉTENCES<span>.</span></h2>
                    <p>Les outils de mon parcours en informatique.</p>
                </header>
                <div className="skills-grid">
                    <article className="skill-card">
                        <div className="skill-top"><span>01</span><span aria-hidden="true">{ }</span></div>
                        <h2>PROGRAMMATION</h2>
                        <p>Langages utilisés dans mon parcours de développement informatique.</p>
                        <ul className="tags">
                            <li>Python</li>
                            <li>Java</li>
                            <li>C</li>
                        </ul>
                    </article>
                    <article className="skill-card">
                        <div className="skill-top"><span>02</span><span aria-hidden="true">&lt;/&gt;</span></div>
                        <h2>INTERFACES WEB</h2>
                        <p>Structure, mise en forme et développement d’interfaces web.</p>
                        <ul className="tags">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Tailwind CSS</li>
                            <li>Vue.js</li>
                            <li>React</li>
                        </ul>
                    </article>
                    <article className="skill-card">
                        <div className="skill-top"><span>03</span><span aria-hidden="true">JS</span></div>
                        <h2>LOGIQUE WEB</h2>
                        <p>Programmation pour le web, côté navigateur et côté serveur.</p>
                        <ul className="tags">
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>PHP</li>
                        </ul>
                    </article>
                    <article className="skill-card">
                        <div className="skill-top"><span>04</span><span aria-hidden="true">[ DB ]</span></div>
                        <h2>BASES DE DONNÉES</h2>
                        <p>Travail avec des systèmes de bases de données relationnelles.</p>
                        <ul className="tags">
                            <li>SQL</li>
                            <li>MariaDB</li>
                            <li>MySQL</li>
                        </ul>
                    </article>
                    <article className="skill-card">
                        <div className="skill-top"><span>05</span><span aria-hidden="true">&gt;_</span></div>
                        <h2>ENVIRONNEMENT SYSTÈME</h2>
                        <p>Utilisation du shell dans un environnement informatique.</p>
                        <ul className="tags">
                            <li>Bash</li>
                        </ul>
                    </article>
                    <article className="skill-card">
                        <div className="skill-top"><span>06</span><span aria-hidden="true">✛</span></div>
                        <h2>SUPPORT INFORMATIQUE</h2>
                        <p>Compétences mises en pratique pendant mon stage chez Xefi.</p>
                        <ul className="tags">
                            <li>Maintenance</li>
                            <li>Dépannage matériel</li>
                            <li>Dépannage logiciel</li>
                            <li>Support client</li>
                        </ul>
                    </article>
                </div>
                <aside className="learning-panel">
                    <h2>Des compétences mises en pratique</h2>
                    <p>
                        <a href="egelion.html">Egelion</a> relie Python, programmation objet, SQL, TCP, OpenCV et stockage JSON. <a href="#portfolio">Ce portfolio</a> utilise React et TypeScript, avec une attention portée à l’accessibilité.
                    </p>
                    <p>
                        Mon expérience chez Xefi met en pratique le diagnostic, le dépannage et le support client. <a href="#progress">Consulter mon bilan de progression ↗</a>
                    </p>
                </aside>
            </section>


            <section className="page-section" id="experience" aria-labelledby="experience-title">
                <header className="section-header">
                    <span>03 / SUR LE TERRAIN</span>
                    <h2 id="experience-title" tabIndex={-1}>EXPÉRIENCES<span>.</span></h2>
                    <p>De la technique au travail d’équipe.</p>
                </header>
                <div className="timeline">
                    <article className="timeline-item">
                        <div className="timeline-date">OCT. 2025 — AOÛT 2026<span>JOB ÉTUDIANT</span></div>
                        <div className="timeline-content">
                            <span className="red-label">McDONALD’S · SAINT-PARRES-AUX-TERTRES</span>
                            <h2>Équipier polyvalent</h2>
                            <ul>
                                <li>Accueil et service client.</li>
                                <li>Travail en équipe.</li>
                                <li>Gestion du temps entre activité professionnelle et études.</li>
                            </ul>
                        </div>
                    </article>
                    <article className="timeline-item">
                        <div className="timeline-date">MAI — JUIN 2025<span>STAGE · BTS, 1RE ANNÉE</span></div>
                        <div className="timeline-content">
                            <span className="red-label">XEFI · BAR-SUR-SEINE</span>
                            <h2>Stage informatique</h2>
                            <ul>
                                <li>Support clients et maintenance informatique.</li>
                                <li>Dépannage matériel et logiciel.</li>
                            </ul>
                        </div>
                    </article>
                    <article className="timeline-item">
                        <div className="timeline-date">ÉTÉS 2024 & 2025<span>JOB D’ÉTÉ</span></div>
                        <div className="timeline-content">
                            <span className="red-label">AUBERGE SANS NOM · CHAOURCE</span>
                            <h2>Plongeur & aide en cuisine</h2>
                            <ul>
                                <li>Respect des règles d’hygiène et de sécurité.</li>
                                <li>Travail en équipe en tant que commis de cuisine.</li>
                            </ul>
                        </div>
                    </article>
                    <article className="timeline-item">
                        <div className="timeline-date">2021<span>STAGE DE DÉCOUVERTE · 3E</span></div>
                        <div className="timeline-content">
                            <span className="red-label">SFR · SAINT-JULIEN-LES-VILLAS</span>
                            <h2>Découverte du monde professionnel</h2>
                            <ul>
                                <li>Accueil client.</li>
                                <li>Gestion des données des utilisateurs.</li>
                            </ul>
                        </div>
                    </article>
                </div>
                <aside className="learning-panel">
                    <h2>Ce que ces expériences apportent à mes projets</h2>
                    <p>
                        Chez Xefi, le support et le dépannage placent le besoin de l’utilisateur au centre du travail technique. Dans la restauration, la coordination, le service et le respect des consignes complètent ce parcours. Ces expériences nourrissent mon objectif : développer des outils compréhensibles et utiles au sein d’une équipe.
                    </p>
                </aside>
            </section>


            <section className="page-section" id="education" aria-labelledby="education-title">
                <header className="section-header">
                    <span>04 / PROGRESSION</span>
                    <h2 id="education-title" tabIndex={-1}>FORMATION<span>.</span></h2>
                    <p>Les étapes de mon parcours.</p>
                </header>
                <div className="education-list">
                    <article className="education-card current">
                        <span className="education-index" aria-hidden="true">03</span>
                        <div>
                            <span className="red-label"><span className="status-dot"></span> EN COURS</span>
                            <h2>Master of Science</h2>
                            <p>Epitech · Nancy</p>
                        </div>
                        <span className="education-date">FORMATION ACTUELLE</span>
                    </article>
                    <article className="education-card">
                        <span className="education-index" aria-hidden="true">02</span>
                        <div>
                            <span className="red-label">2024 — 2026</span>
                            <h2>BTS CIEL</h2>
                            <p>Lycée polyvalent Les Lombards · Troyes</p>
                            <p className="education-detail">Cybersécurité, informatique et réseaux, électronique.</p>
                        </div>
                        <span className="education-date">2024 / 2026</span>
                    </article>
                    <article className="education-card">
                        <span className="education-index" aria-hidden="true">01</span>
                        <div>
                            <span className="red-label">2021 — 2024</span>
                            <h2>Baccalauréat général</h2>
                            <p>Lycée polyvalent Les Lombards · Troyes</p>
                        </div>
                        <span className="education-date">2021 / 2024</span>
                    </article>
                </div>
            </section>


            <section className="page-section" id="progress" aria-labelledby="progress-title">
                <header className="section-header">
                    <span>06 / RETOUR D’EXPÉRIENCE</span>
                    <h2 id="progress-title">MA PROGRESSION<span>.</span></h2>
                    <p>Du développement d’une fonctionnalité à l’intégration d’un ensemble.</p>
                </header>
                <div className="reflection-grid">
                    <article className="learning-panel">
                        <span className="red-label">01 / CONCEVOIR AVANT DE CODER</span>
                        <h2>Structurer une application</h2>
                        <p>
                            Dans Egelion, la modélisation UML m’a aidé à identifier les fonctionnalités, les échanges et les responsabilités des classes avant le développement. Les classes BDD, Client, CameraVideo et StockageLivraison séparent les accès aux données, le réseau, la vidéo et le stockage.
                        </p>
                        <p>
                            <strong>Progression :</strong> organiser le code autour de responsabilités précises et faire le lien entre les diagrammes et le programme.
                        </p>
                        <a href="egelion.html#architecture">Découvrir ma contribution à Egelion ↗</a>
                    </article>
                    <article className="learning-panel">
                        <span className="red-label">02 / RELIER LES COMPOSANTS</span>
                        <h2>Intégrer réseau, vidéo et données</h2>
                        <p>
                            Le PC opérateur échange avec la Raspberry Pi en TCP, interroge MySQL et affiche un flux caméra avec OpenCV. Un thread lit la vidéo sans bloquer l’interface ; un fichier JSON conserve les livraisons localement.
                        </p>
                        <p>
                            <strong>Progression :</strong> tenir compte de la disponibilité des services et du confort de l’opérateur, au-delà de l’affichage d’une fenêtre.
                        </p>
                        <a href="egelion.html#resultats">Découvrir le projet Egelion ↗</a>
                    </article>
                    <article className="learning-panel">
                        <span className="red-label">03 / PRÉSENTER ET EXPLIQUER</span>
                        <h2>Rendre mon travail lisible</h2>
                        <p>
                            Le portfolio rassemble mon parcours, mes projets et les compétences qu’ils illustrent. Le portfolio comprend plusieurs pages, dont des fiches dédiées à Egelion et à Jobboard.
                        </p>
                        <p>
                            <strong>Progression :</strong> expliquer un choix technique avec son utilité, documenter les ressources et proposer une navigation adaptée au mobile et au clavier.
                        </p>
                        <a href="#portfolio">Explorer le projet portfolio ↗</a>
                    </article>
                    <article className="learning-panel">
                        <span className="red-label">04 / PROCHAINES ÉTAPES</span>
                        <h2>Des objectifs concrets</h2>
                        <ul className="body-list">
                            <li>
                                Approfondir le développement d’applications métier à partir de l’expérience Egelion.
                            </li>
                            <li>Fiabiliser l’OCR selon la qualité de l’image et la position du véhicule.</li>
                            <li>Approfondir les tests d’intégration et la gestion des erreurs.</li>
                            <li>
                                Enrichir le portfolio avec les prochains travaux Epitech, leurs résultats et des liens de démonstration.
                            </li>
                            <li>Mettre ces acquis en pratique en alternance dans une équipe de développement.</li>
                        </ul>
                    </article>
                </div>
                <p className="update-note">
                    Bilan mis à jour le <time dateTime="2026-10-25">25 octobre 2026</time>.
                </p>
            </section>


            <section className="page-section" id="projects" aria-labelledby="projects-title">
                <header className="section-header">
                    <span>05 / MISSIONS</span>
                    <h2 id="projects-title">MES PROJETS<span>.</span></h2>
                    <p>Projets réalisés et en cours de développement.</p>
                </header>
                <p className="section-intro">
                    Je sélectionne ces réalisations pour leur complémentarité : une application métier, une plateforme de recrutement, un jeu vidéo 2D et un site personnel. Chaque fiche présente son contexte, les outils mobilisés et les pistes de progression.
                </p>
                <div className="projects-grid">
                    <article className="project-card" id="game-2d">
                        <div className="project-art art-alert" aria-hidden="true">
                            <span className="art-symbol">2D</span>
                        </div>
                        <div className="project-content">
                            <span className="red-label">JAVA / LIBGDX / EN COURS DE DÉVELOPPEMENT</span>
                            <h2>POKÉMON SURVIVORS</h2>
                            <p>Nous développons à trois un jeu de survie en 2D, en pixel art et vu de dessus. Le projet reprend le style de Vampire Survivors dans l’univers de Pokémon.</p>
                            <p>La carte ouverte du jeu est conçue autour de cinq biomes. Une prairie centrale relie quatre régions inspirées des types Feu, Eau, Électrique et Plante.</p>
                        </div>
                    </article>
                    <article className="project-card" id="jobboard">
                        <div className="project-art art-delivery" aria-hidden="true">
                            <span className="art-symbol">JB</span>
                        </div>
                        <div className="project-content">
                            <span className="red-label">VUE.JS / TYPESCRIPT / EXPRESS / MARIADB</span>
                            <h2>JOBBOARD</h2>
                            <p>Projet réalisé en binôme à Epitech. Le site permet de consulter des offres d’emploi, de postuler et de gérer les annonces depuis un espace administrateur.</p>
                            <a className="main-button" href="jobboard.html">DÉCOUVRIR LE PROJET <span aria-hidden="true">↗</span></a>
                        </div>
                    </article>
                    <article className="project-card" id="portfolio">
                        <div className="project-art art-portfolio" aria-hidden="true">
                            <span className="art-id">MISSION / 002 · PROJET PERSONNEL</span><span className="art-symbol">A<span>/B</span></span><span className="art-caption">IDENTITÉ & INTERFACE</span>
                        </div>
                        <div className="project-content">
                            <span className="red-label">REACT / TYPESCRIPT / VITE / CSS</span>
                            <h2>CE PORTFOLIO</h2>
                            <p>
                                Présenter mon parcours et mes réalisations aux recruteurs et à l’équipe pédagogique, dans une identité inspirée de Valorant.
                            </p>
                            <details open>
                                <summary>CHOIX & APPRENTISSAGES <span aria-hidden="true">+</span></summary>
                                <p>
                                    <strong>Réalisation :</strong> composants React écrits en TypeScript, navigation entre les pages, menu mobile, CV téléchargeable et formulaire préparant un e-mail. Vite compile le site et CSS gère la mise en page.
                                </p>
                                <p>
                                    <strong>Progression :</strong> passer d’une page à rubriques à un site multipage, structurer les contenus, relier compétences et réalisations et rendre les interactions accessibles au clavier.
                                </p>
                                <p>
                                    <strong>Suite :</strong> recueillir des retours utilisateurs, compléter les preuves de nouveaux projets et suivre les audits d’accessibilité.
                                </p>
                            </details>
                        </div>
                    </article>
                    <article className="project-card">
                        <a className="project-cover project-logo" href="egelion.html" aria-label="Découvrir le projet Egelion">
                            <img src="assets/projects/scara-egelion-logo.png" alt="Logo SCARA–Egelion" width={200} height={200} loading="lazy" />
                        </a>
                        <div className="project-content">
                            <span className="red-label">PYTHON / CUSTOMTKINTER / MYSQL</span>
                            <h2>EGELION</h2>
                            <p>
                                Réalisé en équipe de trois pour le projet SCARA, Egelion accompagne les livraisons de céréales d’une coopérative agricole : identification de l’adhérent, pesée du véhicule chargé puis à vide et suivi des livraisons depuis le poste opérateur.
                            </p>
                            <h3>Ma contribution · étudiant 2</h3>
                            <p>
                                J’ai développé l’application PC qui rassemble les informations des adhérents, les pesées et le retour caméra. Elle permet à l’opérateur de retrouver les véhicules grâce à leur plaque et de conserver les livraisons localement.
                            </p>
                            <p>
                                <strong>Apprentissage :</strong> relier une interface à plusieurs systèmes et organiser le code en classes.
                            </p>
                            <a className="main-button" href="egelion.html">DÉCOUVRIR LE PROJET ↗</a>
                        </div>
                    </article>
                </div>
            </section>


            <section className="page-section" id="contact" aria-labelledby="contact-title">
                <header className="section-header">
                    <span>06 / REJOINDRE L’ÉQUIPE</span>
                    <h2 id="contact-title" tabIndex={-1}>CONTACT<span>.</span></h2>
                    <p>La prochaine mission commence par un échange.</p>
                </header>
                <div className="contact-grid">
                    <div className="contact-information">
                        <span className="red-label">À LA RECHERCHE D’UNE ALTERNANCE</span>
                        <h2>ET SI ON FAISAIT<br /><strong>ÉQUIPE ?</strong></h2>
                        <p>
                            Une opportunité en développement informatique, un projet ou une question sur mon parcours ? Contactez-moi.
                        </p>
                        <dl className="contact-details">
                            <div>
                                <dt>E-MAIL</dt>
                                <dd>
                                    <a href="mailto:aaron.bueb@epitech.eu">aaron.bueb@epitech.eu <span aria-hidden="true">↗</span></a>
                                </dd>
                            </div>
                            <div>
                                <dt>TÉLÉPHONE</dt>
                                <dd><a href="tel:+33769379161">07 69 37 91 61 <span aria-hidden="true">↗</span></a></dd>
                            </div>
                            <div>
                                <dt>LOCALISATION</dt>
                                <dd>Nancy, France · Permis B</dd>
                            </div>
                        </dl>
                        <a className="text-link" href="assets/CV-Aaron-Bueb.pdf" download="CV-Aaron-Bueb.pdf">
                            MON CV AU FORMAT PDF ↓
                        </a>
                    </div>
                    <form className="contact-form" onSubmit={submitContact}>
                        <div className="form-heading">
                            <span className="red-label">NOUVEAU MESSAGE</span><span aria-hidden="true">↗</span>
                        </div>
                        <div className="form-row">
                            <div className="input-group">
                                <label htmlFor="fullname">VOTRE NOM</label>
                                <input id="fullname" name="fullname" autoComplete="name" placeholder="Nom et prénom" maxLength={120} required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">VOTRE E-MAIL</label>
                                <input type="email" id="email" name="email" autoComplete="email" placeholder="vous@entreprise.fr" maxLength={254} required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="subject">OBJET</label>
                            <input id="subject" name="subject" placeholder="Une alternance, un projet…" maxLength={180} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">VOTRE MESSAGE</label>
                            <textarea id="message" name="message" placeholder="Parlons de votre proposition…" rows={5} maxLength={4000} required></textarea>
                        </div>
                        <p className="form-note">
                            Préparez votre message, puis ouvrez votre messagerie ou copiez le texte pour l’envoyer.
                        </p>
                        <button type="submit" className="main-button">
                            PRÉPARER MON E-MAIL <span aria-hidden="true">↗</span>
                        </button>
                        <p id="form-status" className="form-status" role="status">{contactStatus}</p>
                        {mailto && (
                            <div className="contact-draft">
                                <div className="contact-draft-actions">
                                    <a className="secondary-button" href={mailto}>OUVRIR MA MESSAGERIE</a>
                                    <button type="button" className="secondary-button" onClick={copyDraft}>COPIER LE MESSAGE</button>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="contact-draft">MESSAGE À COPIER</label>
                                    <textarea id="contact-draft" readOnly value={draftText} rows={6} />
                                </div>
                            </div>
                        )}
                        <noscript>
                            <p>
                                Pour me contacter, écrivez directement à <a href="mailto:aaron.bueb@epitech.eu">aaron.bueb@epitech.eu</a>.
                            </p>
                        </noscript>
                    </form>
                </div>
            </section>


            <section className="page-section" id="credits" aria-labelledby="credits-title">
                <header className="section-header">
                    <span>RESSOURCES / TRANSPARENCE</span>
                    <h2 id="credits-title">CRÉDITS<span>.</span></h2>
                    <p>Les ressources utilisées pour ce portfolio.</p>
                </header>
                <div className="reflection-grid">
                    <article className="learning-panel">
                        <h2>Identité et médias</h2>
                        <ul className="body-list">
                            <li>CV et portrait : documents personnels d’Aaron Bueb ; portrait extrait du CV fourni.</li>
                            <li>
                                Logo SCARA–Egelion et capture de l’IHM : rapport SCARA, p. 31–32, projet BTS CIEL 2025–2026 de Nolan Jacquot, Aaron Bueb et Soren Mergey. Extraits de la partie étudiant 2.
                            </li>
                            <li>
                                Illustrations des fiches projets, grille et monogramme : formes réalisées en CSS et SVG dans le site.
                            </li>
                        </ul>
                    </article>
                    <article className="learning-panel">
                        <h2>Inspiration et typographie</h2>
                        <p>
                            Direction visuelle inspirée des interfaces de Valorant : couleurs, formes angulaires et vocabulaire de mission. Valorant et Riot Games appartiennent à leurs détenteurs respectifs. Ce portfolio personnel n’est pas affilié à Riot Games ; aucun visuel de personnage ou logo officiel du jeu n’est utilisé.
                        </p>
                        <p>
                            Police <a href="assets/fonts/OFL.txt">Rajdhani, licence SIL Open Font License</a>, attribuée à Indian Type Foundry. Police servie localement ; les polices système prennent le relais si nécessaire.
                        </p>
                    </article>
                    <article className="learning-panel">
                        <h2>Contenu et construction</h2>
                        <p>
                            Parcours et coordonnées issus du CV fourni. Présentation d’Egelion fondée sur la partie étudiant 2 du rapport SCARA.
                        </p>
                        <p>
                            Site statique développé avec React, TypeScript et CSS, puis compilé avec Vite.
                        </p>
                    </article>
                    <article className="learning-panel">
                        <h2>Contact et données</h2>
                        <p>
                            Le formulaire prépare un message à ouvrir ou à copier dans votre messagerie. Le site ne transmet ni ne conserve les champs saisis sur un serveur. L’envoi doit être confirmé dans votre messagerie.
                        </p>
                        <p>Ce portfolio n’utilise ni outil de mesure d’audience ni cookie applicatif.</p>
                    </article>
                </div>
            </section>
        </>
    )
}
