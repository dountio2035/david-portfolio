// Small stroke icon set, drawn on a 24px grid so every icon shares the same
// weight and corner style.
function Icon({ size = 18, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const MailIcon = (p) => (
  <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></Icon>
)
export const PhoneIcon = (p) => (
  <Icon {...p}><path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1 1 0 0 1-1.1 1A16 16 0 0 1 4 5.1 1 1 0 0 1 5 4Z" /></Icon>
)
export const PinIcon = (p) => (
  <Icon {...p}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></Icon>
)
export const LinkedinIcon = (p) => (
  <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10.5V16M8 7.6v.1M12 16v-3.2a2.3 2.3 0 0 1 4.6 0V16M12 10.5V16" /></Icon>
)
export const SunIcon = (p) => (
  <Icon {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" /></Icon>
)
export const MoonIcon = (p) => (
  <Icon {...p}><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></Icon>
)
export const MenuIcon = (p) => (
  <Icon {...p}><path d="M4 8h16M4 16h16" /></Icon>
)
export const CloseIcon = (p) => (
  <Icon {...p}><path d="m6 6 12 12M18 6 6 18" /></Icon>
)
export const ArrowUpIcon = (p) => (
  <Icon {...p}><path d="M12 19V5M6 11l6-6 6 6" /></Icon>
)
export const ChevronLeftIcon = (p) => (
  <Icon {...p}><path d="m15 6-6 6 6 6" /></Icon>
)
export const ChevronRightIcon = (p) => (
  <Icon {...p}><path d="m9 6 6 6-6 6" /></Icon>
)
export const AwardIcon = (p) => (
  <Icon {...p}><circle cx="12" cy="9" r="5.5" /><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" /></Icon>
)
export const WhatsappIcon = (p) => (
  <Icon {...p}><path d="M4 20l1.3-3.9A8 8 0 1 1 8 18.8L4 20Z" /><path d="M9.2 8.6c.2-.4.5-.4.8-.4h.4c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .5.6 1 1.4 1.8 2.4 2.3.2.1.4.1.5-.1l.5-.6c.2-.2.4-.2.6-.1l1.4.7c.2.1.3.3.3.5 0 .5-.2 1-.6 1.3-.5.4-1.3.6-2.2.3a9 9 0 0 1-4.6-4.3c-.4-.9-.4-1.9.0-2.7Z" /></Icon>
)
