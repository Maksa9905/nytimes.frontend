import { MenuIcon } from '#/shared/icons'
import { useDispatch } from 'react-redux'
import { HeaderContainer, MenuButton, Title } from './Header.styled'
import { useCallback } from 'react'
import { toggleAsideNavigation } from '#/widgets/AsideNavigation/@x/Header'

const Header = () => {
  const dispatch = useDispatch()

  const handleOpenAsideNavigation = useCallback(() => {
    dispatch(toggleAsideNavigation())
  }, [dispatch])

  return (
    <HeaderContainer>
      <MenuButton onClick={handleOpenAsideNavigation}>
        <MenuIcon />
      </MenuButton>
      <Title>besider</Title>
    </HeaderContainer>
  )
}

export default Header
