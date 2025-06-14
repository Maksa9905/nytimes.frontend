import { useCallback, useMemo, useState } from 'react'
import {
  AsideContainer,
  CloseButtonContainer,
  NavigationContainer,
  NavigationLink,
  NavigationList,
  NavigationListItem,
} from './AsideNavigation.styled'
import { CloseIcon } from '#/shared/icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsNavigationOpen, toggleAsideNavigation } from '../model/slice'

const AsideNavigation = () => {
  const [isClosing, setIsClosing] = useState(false)

  const dispatch = useDispatch()
  const isOpen = useSelector(selectIsNavigationOpen)

  const navigationConfig = useMemo(
    () => [
      { title: 'science', path: '#' },
      { title: 'general', path: '#' },
      { title: 'entertainment', path: '#' },
      { title: 'technology', path: '#' },
      { title: 'business', path: '#' },
      { title: 'health', path: '#' },
      { title: 'sports', path: '#' },
    ],
    [],
  )

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      dispatch(toggleAsideNavigation())
      setIsClosing(false)
    }, 300)
  }, [dispatch])

  if (!isOpen) return null

  return (
    <AsideContainer $isClosing={isClosing}>
      <CloseButtonContainer onClick={handleClose}>
        <CloseIcon />
      </CloseButtonContainer>
      <NavigationContainer>
        <NavigationList>
          {navigationConfig.map((item) => (
            <NavigationListItem>
              <NavigationLink href={item.path}>{item.title}</NavigationLink>
            </NavigationListItem>
          ))}
        </NavigationList>
      </NavigationContainer>
    </AsideContainer>
  )
}

export default AsideNavigation
