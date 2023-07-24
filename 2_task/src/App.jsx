import './App.css'
import CharacterSection from './components/sections/CharacterSection/CharacterSection'
import LandingSection from './components/sections/LandingSection/LandingSection'
import NewsSection from './components/sections/NewsSection/NewsSection'

function App() {
  return (
    <div className='App'>
      <LandingSection />
      <CharacterSection />
      <NewsSection />
    </div>
  )
}

export default App
