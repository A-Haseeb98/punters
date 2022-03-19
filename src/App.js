import './App.css';
import Cover from './components/cover';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Rarity from './components/rarity';
import Roadmap from './components/roadmap';
import Welcome from './components/welcome_section';

function App() {
  return (
    <div>
    <Navbar/>
    <Cover/>
    <Welcome/>
    <Rarity/>
    <Roadmap/>
    <Footer/>
    </div>
  );
}

export default App;
