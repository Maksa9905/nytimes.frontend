import styled, { keyframes, css } from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

interface AsideContainerProps {
  $isClosing?: boolean
}

export const AsideContainer = styled.aside<AsideContainerProps>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ $isClosing }) =>
    $isClosing
      ? css`
          animation: ${slideOut} 0.3s ease-in forwards;
        `
      : css`
          animation: ${slideIn} 0.3s ease-out;
        `}
`

export const NavigationContainer = styled.nav`
  padding: 0 20px;
`

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
`

export const NavigationListItem = styled.li`
  list-style: none;
`

export const NavigationLink = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 2.2px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.common.black};

  &:focus-within {
    outline: none;
    box-shadow: none;
    color: ${({ theme }) => theme.palette.blue.primary};
  }
`

export const CloseButtonContainer = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus-within {
    outline: none;
    box-shadow: none;
    color: ${({ theme }) => theme.palette.blue.primary};
  }
`
