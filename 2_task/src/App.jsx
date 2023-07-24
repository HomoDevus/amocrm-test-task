import './App.css'
import CharacterSection from './components/sections/CharacterSection/CharacterSection'
import FooterSection from './components/sections/FooterSection/FooterSection'
import LandingSection from './components/sections/LandingSection/LandingSection'
import NewsSection from './components/sections/NewsSection/NewsSection'

function App() {
  return (
    <div className='App'>
      <LandingSection />
      <CharacterSection />
      <NewsSection />
      <FooterSection />
    </div>
  )
}

export default App
