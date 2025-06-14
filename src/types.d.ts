import { theme } from '#/app/theme'

type Theme = typeof theme

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

declare global {
  declare type RootState = import('../src/app/store').RootState
}
