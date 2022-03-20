import './App.css';
import Cover from './components/cover';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Rarity from './components/rarity';
import Roadmap from './components/roadmap';
import Welcome from './components/welcome_section';
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Navbar />
          <Cover />
          <Welcome />
          <Rarity />
          <Roadmap />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
