import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ImgSection from './Components/ImgSection';
import EightImg from './Components/EightImg';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
       <Navbar />
       <ImgSection />
       <EightImg />
       <Cards />
    </div>
  );
}

export default App;
