import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 40px 0;
`

export const NavigationContainer = styled.nav``

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const NavigationListItem = styled.li`
  list-style: none;
`

export const NavigationLink = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.common.black};

  &:focus-within {
    border: none;
    outline: none;
    color: ${({ theme }) => theme.palette.blue.primary};
  }
`

export const SponsorsBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const SponsorsBlockTitle = styled.span`
  font-size: 12px;
`

export const SponsorsLogotype = styled.img`
  width: 84px;
`

export const Copyright = styled.p`
  font-size: 12px;
`
