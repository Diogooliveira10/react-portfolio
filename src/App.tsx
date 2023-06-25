import './App.css'
import { About } from './components/About'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Testimonials } from './components/Testimonials'

function App() {
  
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
    </main>
  )
}

export default App
