import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

import { LanguageSelector } from '../../components'

import { Container, Brand, Navigation, Wrapper } from './Header.styles'

const data = [
  {
    id: 'nav1',
    label: 'navbar-home',
    href: '#navbar-hom',
  },
  {
    id: 'nav2',
    label: 'navbar-about',
    href: '#navbar-about',
  },
  {
    id: 'nav3',
    label: 'navbar-new',
    href: '#navbar-new',
  },
  {
    id: 'nav4',
    label: 'navbar-used',
    href: '#navbar-used',
  },
  {
    id: 'nav5',
    label: 'navbar-last-entries',
    href: '#navbar-last-entries',
  },
  {
    id: 'nav6',
    label: 'navbar-contacts',
    href: '#navbar-contacts',
  },
]

const containerAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Header = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <Wrapper>
        <Brand whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Link href="/">
            <a>LOGO</a>
          </Link>
        </Brand>
        <Navigation variants={containerAnimation} initial="hidden" animate="visible">
          {data.map((item) => (
            <motion.li key={item.id} variants={itemAnimation}>
              <Link href={item.href}>
                <a>{t(`${item.label}`)}</a>
              </Link>
            </motion.li>
          ))}
          <li>
            <LanguageSelector />
          </li>
        </Navigation>
      </Wrapper>
    </Container>
  )
}

export default Header
