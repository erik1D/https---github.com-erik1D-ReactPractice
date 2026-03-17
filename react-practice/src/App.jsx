import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import AboutMeCard from './components/AboutMeCard.jsx'
import DreamJobCard from './components/DreamJobCard.jsx'
import ProjectShowcaseCard from './components/ProjectShowCaseCard.jsx'
import LikeButton from './components/LikeButton.jsx'

//NPM RUN DEV -- START SERVER
function App() {
  return (    
    <div>


      <main>
        <Header/>
        <h2 className='font-serif text-3xl m-5 p-4'>Welcome to my website!</h2>
        <LikeButton/>
      <AboutMeCard
      myName="Erik Diaz"
      myTitle="Lead Programmer"
      myBlurb="Hi, my name is Erik and I'm a student at Oakland Tech.
      I'm 18 years old and I plan on majoring in Computer Sciecne for college."
      myEmoji="🧑‍💻"
    
      mySkills="Can Cook, Draw and Code"
      />

      <LikeButton/>
      <AboutMeCard
      myName="Ava Lau"
      myTitle="Designer"
      myBlurb="Hi, my name is Ava Lau and I'm a student at Oakland Tech.
      I'm 17 years old and I plan on majoring in Animal Sciecne for college."
      myEmoji="🐈‍⬛"
      mySkills="Can Eat, Design and Listen"
      />

      <LikeButton/>
      <AboutMeCard
      myName="Gabby Lu"
      myTitle="Developer"
      myBlurb="Hi, my name is Gabby Lu and I'm a student at Oakland Tech.
      I'm 17 years old and I plan on majoring in Food Sciecne for college."
      myEmoji="🧋"
      mySkills="Advanced Math, communicate with animals"
      />
      
      </main>

      <br /> <br />
      <Footer/>
    </div>
  );
}


export default App;