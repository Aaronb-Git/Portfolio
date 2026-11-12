import { useState, type FormEvent } from 'react'

export function useContactForm() {
    const [contactStatus, setContactStatus] = useState('')

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
            setContactStatus('Veuillez renseigner votre nom, l’objet et votre message.')
            return
        }

        const body = message + '\r\n\r\n' + name + '\r\nE-mail de contact : ' + email
        window.location.href = 'mailto:aaron.bueb@epitech.eu?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
        setContactStatus('Votre e-mail est préparé. Finalisez l’envoi dans votre messagerie. Si elle ne s’ouvre pas, utilisez le lien e-mail ci-contre.')
    }

    return { contactStatus, submitContact }
}
