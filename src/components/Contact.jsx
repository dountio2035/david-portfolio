import { MailIcon, PhoneIcon, PinIcon, LinkedinIcon, WhatsappIcon } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { CONTACT, whatsappLink } from '../contact.js'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <section id="contact" aria-labelledby="contact-titre" className="contact">
      <div className="wrap">
        <h2 id="contact-titre" className="contact-title">{c.heading}</h2>
        <p className="contact-sub">{c.sub}</p>

        <div className="contact-main">
          <a href={`mailto:${CONTACT.email}`} className="contact-mail">
            <MailIcon size={22} />
            <span className="link">{CONTACT.email}</span>
          </a>
          <a href={whatsappLink(c.waMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <WhatsappIcon size={20} />
            {c.waCta}
          </a>
        </div>

        <ul className="contact-list">
          <li>
            <WhatsappIcon size={18} />
            <a href={whatsappLink(c.waMessage)} target="_blank" rel="noopener noreferrer" className="link num">
              WhatsApp {CONTACT.phone}
            </a>
          </li>
          <li>
            <PhoneIcon size={18} />
            <a href={CONTACT.phoneHref} className="link num">{CONTACT.phone}</a>
          </li>
          <li>
            <LinkedinIcon size={18} />
            <a href={CONTACT.linkedinHref} target="_blank" rel="noopener noreferrer" className="link">{CONTACT.linkedin}</a>
          </li>
          <li><PinIcon size={18} />{c.location}</li>
        </ul>
      </div>
    </section>
  )
}
