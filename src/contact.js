// Contact details used across the site (hero, contact section).
export const CONTACT = {
  email: 'tchiofodavid@gmail.com',
  phone: '+237 658 558 220',
  phoneHref: 'tel:+237658558220',
  whatsapp: '237658558220', // international format, no + or spaces
  linkedin: 'linkedin.com/in/tchiofodavid',
  linkedinHref: 'https://linkedin.com/in/tchiofodavid',
}

export const whatsappLink = (message) =>
  `https://wa.me/${CONTACT.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`
