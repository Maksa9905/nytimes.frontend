import { useMemo } from 'react'
import {
  Copyright,
  FooterContainer,
  NavigationContainer,
  NavigationLink,
  NavigationList,
  NavigationListItem,
  SponsorsBlockContainer,
  SponsorsBlockTitle,
  SponsorsLogotype,
} from './Footer.styled'

const Footer = () => {
  const footerConfig = useMemo(
    () => [
      { title: 'Log In', path: '#' },
      { title: 'About Us', path: '#' },
      { title: 'Publishers', path: '#' },
      { title: 'Sitemap', path: '#' },
    ],
    [],
  )

  return (
    <FooterContainer>
      <NavigationContainer>
        <NavigationList>
          {footerConfig.map((link) => (
            <NavigationListItem>
              <NavigationLink href={link.path}>{link.title}</NavigationLink>
            </NavigationListItem>
          ))}
        </NavigationList>
      </NavigationContainer>
      <SponsorsBlockContainer>
        <SponsorsBlockTitle>Powered by</SponsorsBlockTitle>
        <SponsorsLogotype src={'/news-api.png'} />
      </SponsorsBlockContainer>
      <Copyright>© 2023 Besider. Inspired by Insider</Copyright>
    </FooterContainer>
  )
}

export default Footer
