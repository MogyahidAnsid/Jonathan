import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Education from './pages/Education';
import Work from './pages/Work';
import Logo from './assets/UP_logo.png'

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Navbar />

      <div className="h-[90vh] mt-10">
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/work" element={ <Work /> } />
            <Route path="/education" element={ <Education /> } />
        </Routes>
      </div>

      <footer className="flex flex-col items-center pb-10">
        <img src={Logo} className="h-40 w-40" alt="University of Pangasinan logo" />
        <h1 className="text-xl font-semibold">Phinma - University of Pangasinan</h1>
        <p>College of Information Technology</p>
      </footer>
    </div>
  );
}

export default App;
