import { useState, type FormEvent } from 'react'

export function useContactForm() {
    const [contactStatus, setContactStatus] = useState('')
    const [isSending, setIsSending] = useState(false)

    async function submitContact(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        if (isSending || !form.reportValidity()) return

        const data = new FormData(form)
        for (const field of ['fullname', 'email', 'subject', 'message']) {
            const value = String(data.get(field) ?? '').trim()
            if (!value) {
                setContactStatus('Veuillez renseigner tous les champs.')
                return
            }
            data.set(field, value)
        }

        setIsSending(true)
        setContactStatus('Envoi en cours…')
        try {
            const response = await fetch('https://formspree.io/f/mbgolyza', {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: data,
            })
            if (!response.ok) throw new Error('Envoi refusé')
            form.reset()
            setContactStatus('Votre message a bien été envoyé.')
        } catch {
            setContactStatus('L’envoi a échoué. Réessayez ou utilisez l’adresse e-mail indiquée sur cette page.')
        } finally {
            setIsSending(false)
        }
    }

    return { contactStatus, isSending, submitContact }
}
