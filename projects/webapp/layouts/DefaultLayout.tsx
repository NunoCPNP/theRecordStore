import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { Header, Footer } from '../modules'

type Props = {
  children: ReactNode
}

const Main = styled.main`
  margin-top: 6rem;
`

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default DefaultLayout
