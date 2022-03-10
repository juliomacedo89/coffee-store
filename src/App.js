/* import RoutesApp from './routes' */

import Home from './pages/Home/index'

import { GlobalStyle } from './styles/global'

export default function App() {
  return(
    <div className="app">
      <Home />
      <GlobalStyle />
    </div>
  )
}
