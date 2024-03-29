import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Courses, Hero, Navbar, Tech, Projects, StarsCanvas} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-0">
      <About />
      {/*<Courses />*/}
      <Experience />
      <Tech />
      <Projects />

      
      
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
