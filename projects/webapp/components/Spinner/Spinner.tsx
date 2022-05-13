import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const animation = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  :after {
    content: ' ';
    display: block;
    width: 6.4rem;
    height: 6.4rem;
    margin: 0.8rem;
    border-radius: 50%;
    border: 0.6rem solid var(--white);
    border-color: var(--white) transparent var(--white) transparent;
    animation: ${animation} 1.2s linear infinite;
  }
`
