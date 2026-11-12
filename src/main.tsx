import { useEffect, useLayoutEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Cursor } from './Cursor'
import { Header, Footer } from './LayoutMarkup'
import Home from './Home'
import Egelion from './Egelion'
import Jobboard from './Jobboard'

function currentAnchor() {
    try {
        return decodeURIComponent(window.location.hash.slice(1)) || 'home'
    } catch {
        return 'home'
    }
}

function App({ page }: { page: string }) {
    const isHome = page === 'index'
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState(isHome ? 'home' : 'projects')

    useLayoutEffect(() => {
        document.documentElement.classList.add('js-ready')
        if (!isHome) return

        const sections = Array.from(document.querySelectorAll<HTMLElement>('main > .page-section'))

        function showSection(focus: boolean) {
            const id = currentAnchor()
            if (id === 'content') return
            const anchor = document.getElementById(id)
            const section = anchor?.closest('.page-section') ?? sections[0]
            sections.forEach(item => { item.hidden = item !== section })
            const parentSections: Record<string, string> = { progress: 'profile', credits: 'contact' }
            setActiveSection(parentSections[section.id] ?? section.id)
            setMenuOpen(false)

            if (focus) {
                const heading = section.querySelector<HTMLElement>('h1, h2')
                if (heading) {
                    heading.tabIndex = -1
                    heading.focus({ preventScroll: true })
                }
                if (anchor && anchor !== section) anchor.scrollIntoView({ block: 'start' })
                else window.scrollTo({ top: 0, behavior: 'instant' })
            } else if (anchor && anchor !== section) {
                anchor.scrollIntoView({ block: 'start' })
            }
        }

        showSection(false)
        const handleHashChange = () => showSection(true)
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [isHome])

    useEffect(() => {
        if (!menuOpen) return

        function closeOnEscape(event: KeyboardEvent) {
            if (event.key !== 'Escape') return
            setMenuOpen(false)
            document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus()
        }

        function closeOnClick(event: MouseEvent) {
            if (!(event.target instanceof Element)) return
            if (!event.target.closest('.navigation, .menu-toggle') || event.target.closest('.navigation a')) {
                setMenuOpen(false)
            }
        }

        document.addEventListener('keydown', closeOnEscape)
        document.addEventListener('click', closeOnClick)
        return () => {
            document.removeEventListener('keydown', closeOnEscape)
            document.removeEventListener('click', closeOnClick)
        }
    }, [menuOpen])

    const sectionHref = (id: string) => (isHome ? '#' : 'index.html#') + id

    return (
        <>
            <a className="skip-link" href="#content">Aller au contenu</a>
            <div className="ambient-grid" aria-hidden="true" />
            <Cursor />
            <Header menuOpen={menuOpen} toggleMenu={() => setMenuOpen(open => !open)}
                activeSection={activeSection} sectionHref={sectionHref} />
            <main className="content" id="content" tabIndex={-1}>
                {page === 'egelion' ? <Egelion /> : page === 'jobboard' ? <Jobboard /> : <Home />}
            </main>
            <Footer sectionHref={sectionHref} />
        </>
    )
}

const root = document.getElementById('root')
if (!root) throw new Error('Point de montage du portfolio introuvable.')
createRoot(root).render(<App page={root.dataset.page ?? 'index'} />)
