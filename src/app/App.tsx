import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Provider } from 'react-redux'
import { store } from './store'
import { Header } from '#/widgets/Header'
import { AsideNavigation } from '#/widgets/AsideNavigation'
import { PageContainer } from '#/shared/ui'
import { MainPage } from '#/pages/MainPage'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <PageContainer>
          <MainPage />
        </PageContainer>
        <AsideNavigation />
      </ThemeProvider>
    </Provider>
  )
}

export default App
