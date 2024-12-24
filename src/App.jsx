import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Bio from './components/Bio'
import Releases from './components/Releases'
import Dates from './components/Dates'
import Media from './components/Media'
import Contact from './components/Contact'
import BurgerMenu from './components/BurgerMenu'
function App() {
  

  return (
    <>
    <BurgerMenu />
    <Navbar />
    <Header />
    <Bio />
    <Releases />
    <Dates />
    <Media />
    <Contact />
    </>
  )
}

export default App