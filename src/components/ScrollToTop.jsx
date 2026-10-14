import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpIcon } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="to-top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={t.misc.scrollTop}
          title={t.misc.scrollTop}
        >
          <ArrowUpIcon size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
