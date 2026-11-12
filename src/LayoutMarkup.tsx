type HeaderProps = { menuOpen: boolean; toggleMenu: () => void; activeSection: string; sectionHref: (id: string) => string }
export function Header({ menuOpen, toggleMenu, activeSection, sectionHref }: HeaderProps) {
    return (
<header className="topbar">
            <a className="brand" href="index.html" aria-label="Aaron Bueb, accueil">
                <span className="brand-symbol">A</span><span className="brand-name">AARON <strong>BUEB</strong></span>
            </a>
            <button className="menu-toggle" type="button" aria-controls="navigation" aria-expanded={menuOpen} onClick={toggleMenu}>
                MENU <span aria-hidden="true">☰</span>
            </button>
            <nav className={menuOpen ? "navigation is-open" : "navigation"} id="navigation" aria-label="Navigation principale">
                <a className="nav-button" href={sectionHref("profile")} aria-current={activeSection === "profile" ? "page" : undefined}>PROFIL</a>
                <a className="nav-button" href={sectionHref("skills")} aria-current={activeSection === "skills" ? "page" : undefined}>COMPÉTENCES</a>
                <a className="nav-button" href={sectionHref("experience")} aria-current={activeSection === "experience" ? "page" : undefined}>EXPÉRIENCES</a>
                <a className="nav-button nav-home" href={sectionHref("home")} aria-current={activeSection === "home" ? "page" : undefined}>
                    <svg className="nav-home-shape" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                        <polygon points="0,0 100,0 80,100 20,100"/>
                    </svg>
                    <span>ACCUEIL</span>
                </a>
                <a className="nav-button" href={sectionHref("education")} aria-current={activeSection === "education" ? "page" : undefined}>FORMATION</a>
                <a className="nav-button" href={sectionHref("projects")} aria-current={activeSection === "projects" ? "page" : undefined}>PROJETS</a>
                <a className="nav-button" href={sectionHref("contact")} aria-current={activeSection === "contact" ? "page" : undefined}>CONTACT</a>
            </nav>
            <a className="top-status" href={sectionHref("contact")}><span className="status-dot"></span>RECHERCHE D’ALTERNANCE</a>
        </header>
    )
}

export function Footer({ sectionHref }: Pick<HeaderProps, "sectionHref">) {
    return (
<footer className="bottom-bar">
            <span><span className="status-dot"></span> AARON BUEB <span className="footer-divider">/</span> PORTFOLIO 2026</span><span className="footer-theme"><a href={sectionHref("credits")}>CRÉDITS & RESSOURCES</a> · Inspiré de Valorant · Projet personnel non affilié à Riot Games</span><a href="assets/CV-Aaron-Bueb.pdf" download="CV-Aaron-Bueb.pdf">MON CV <span aria-hidden="true">↓</span></a>
        </footer>
    )
}
