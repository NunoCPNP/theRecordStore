import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled.header`
  background-color: var(--black);
  color: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`
export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`

export const Navigation = styled(motion.ul)`
  list-style: none;
  display: flex;
  align-items: center;

  li:not(:last-child) {
    padding-right: 2rem;
  }

  a {
    transition: all 200ms ease-in-out;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--white);
    font-size: 1.3rem;
    font-weight: 600;

    &:hover {
      color: var(--accent-color-d);
    }
  }
`

export const Brand = styled(motion.div)``
