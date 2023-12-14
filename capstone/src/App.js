
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Booking from './components/Booking';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' Component={Homepage}/>
        <Route path='/booking' Component={Booking} />
      </Switch>
    </div>
  );
}


export default App;
