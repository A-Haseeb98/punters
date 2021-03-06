import './App.css';
import Cover from './components/cover';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Rarity from './components/rarity';
import Roadmap from './components/roadmap';
import Welcome from './components/welcome_section';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Punters from './components/nft_punters';
import Rent from './components/rent_section';
import Trainer from './components/trainer_section';
import Opportunities from './components/opportunities_section';

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Navbar />
          <Cover />
          <Welcome />
          <Punters />
          <Rent />
          <Rarity />
          <Roadmap />
          <Footer />
        </>
      </Switch>
    </Router>
  );
}

export default App;
