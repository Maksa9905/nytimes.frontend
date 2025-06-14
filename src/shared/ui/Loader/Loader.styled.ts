import styled, { keyframes } from 'styled-components'
import { visuallyHidden } from '../styles'

const spinning = keyframes`
    to { transform: rotate(360deg); }
`

export const SpinningLoader = styled.span`
  animation: ${spinning} 1s linear infinite;
  color: ${({ theme }) => theme.palette.blue.primary};
`

export const LoaderContainer = styled.div`
  width: 100%;
  padding: 28px;
  display: flex;
  justify-content: center;
`

export const HiddenProcessingLabel = styled.span`
  ${visuallyHidden}
`
