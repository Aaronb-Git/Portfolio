import { useState, type FormEvent } from 'react'

const recipient = 'aaron.bueb@epitech.eu'

export function useContactForm() {
    const [contactStatus, setContactStatus] = useState('')
    const [draft, setDraft] = useState<{ subject: string; body: string } | null>(null)

    function submitContact(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        if (!form.reportValidity()) return

        const data = new FormData(form)
        const name = String(data.get('fullname') ?? '').trim()
        const subject = String(data.get('subject') ?? '').trim()
        const message = String(data.get('message') ?? '').trim()
        const email = String(data.get('email') ?? '').trim()

        if (!name || !subject || !message) {
            setDraft(null)
            setContactStatus('Veuillez renseigner votre nom, l’objet et votre message.')
            return
        }

        const body = message + '\r\n\r\n' + name + '\r\nE-mail de contact : ' + email
        setDraft({ subject, body })
        setContactStatus('Message prêt à envoyer depuis votre messagerie.')
    }

    const mailto = draft
        ? 'mailto:' + recipient + '?subject=' + encodeURIComponent(draft.subject) + '&body=' + encodeURIComponent(draft.body)
        : ''
    const draftText = draft ? 'À : ' + recipient + '\nObjet : ' + draft.subject + '\n\n' + draft.body : ''

    async function copyDraft() {
        try {
            await navigator.clipboard.writeText(draftText)
            setContactStatus('Message copié. Collez-le dans votre messagerie.')
        } catch {
            setContactStatus('Sélectionnez le texte ci-dessous pour le copier manuellement.')
        }
    }

    return { contactStatus, copyDraft, draftText, mailto, submitContact }
}
