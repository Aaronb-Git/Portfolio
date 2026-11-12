import { useEffect, useRef } from 'react'

export function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cursor = cursorRef.current
        if (!cursor) return
        const pointer = cursor
        const root = document.documentElement
        const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')

        function hide() {
            pointer.classList.remove('visible', 'is-hovering')
            root.classList.remove('custom-cursor')
        }

        function move(event: PointerEvent) {
            if (!media.matches || event.pointerType !== 'mouse') {
                hide()
                return
            }

            pointer.style.left = event.clientX + 'px'
            pointer.style.top = event.clientY + 'px'
            pointer.classList.add('visible')
            root.classList.add('custom-cursor')
            const interactive = event.target instanceof Element && event.target.closest('button, a, input, textarea, summary')
            pointer.classList.toggle('is-hovering', Boolean(interactive))
        }

        document.addEventListener('pointermove', move)
        root.addEventListener('pointerleave', hide)
        window.addEventListener('blur', hide)
        media.addEventListener('change', hide)
        return () => {
            hide()
            document.removeEventListener('pointermove', move)
            root.removeEventListener('pointerleave', hide)
            window.removeEventListener('blur', hide)
            media.removeEventListener('change', hide)
        }
    }, [])

    return <div className="cursor" ref={cursorRef} aria-hidden="true" />
}
