import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 72px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.common.grey.light};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 2.2px;
  font-weight: bold;
  text-transform: uppercase;
`

export const MenuButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 20px;
  margin-top: 29px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus-within {
    border: none;
    outline: none;
    color: ${({ theme }) => theme.palette.blue.primary};
  }
`
