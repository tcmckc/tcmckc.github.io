import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <About />
        <Projects />
      </header>
      <footer className="App-footer">
        <p>©Copyright 2023 Tomoko S.I.</p>
      </footer>
    </div>
  );
}

export default App;
