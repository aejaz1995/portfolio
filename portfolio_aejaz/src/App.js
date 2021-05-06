
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { TechStack } from "./Components/TechStack"
import "./App.css"
import { Proficiencies } from './Components/Proficiencies';
import { Summary } from './Components/Summary';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import GitImg from './Components/GitImg';
function App() {
  return (
   
    
  <div className="App">
      
       <Navbar />
       <div style={{marginTop:"70px"}} >
        
       </div>
       <Home id="about" />
        <TechStack />
        <Proficiencies />
        <Projects id="projects"/>
        <Summary />
        <GitImg />
        <Contact />
  </div>
    
  );
}

export default App;
