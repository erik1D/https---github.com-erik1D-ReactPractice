import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import AboutMeCard from './components/AboutMeCard.jsx'
import DreamJobCard from './components/DreamJobCard.jsx'
import ProjectShowcaseCard from './components/ProjectShowCaseCard.jsx'
import pcPic from './assets/pcPic.jpg';
import techPic from './assets/oakTech.jpg'

//NPM RUN DEV -- START SERVER
function App() {
  return (    
    <div>
      <AboutMeCard
      myName="Erik Diaz"
      myTitle="Lead Programmer"
      myBlurb="Hi, my name is Erik and I'm a student at Oakland Tech.
      I'm 18 years old and I plan on majoring in Computer Sciecne for college."
      my1stPic={pcPic}
      my2ndPic={techPic}
      />
      <main>       
        <h2 style={{fontFamily: "math", fontSize: "32px", marginBottom: "20px"}}>Welcome to my website!</h2>
        <Header/>
      </main>

      <br /> <br />
      <Footer/>
    </div>
  );
}


export default App;