import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Courses, Hero, Navbar, Tech, Projects} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      {/*<Navbar />*/}
      <div className="bg-background-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
