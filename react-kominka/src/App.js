import './App.css';
import About from './components/About/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home/Home';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Menu' element={<Menu />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
