
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Homepage from './components/Homepage';
import Booking from './components/Booking';
import Footer from './components/Footer';
import NavbarHeader from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/booking' element={<Booking/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
