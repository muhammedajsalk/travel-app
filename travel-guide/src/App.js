import logo from './logo.svg';
import './App.css';
import Places from './Components/Screens/Places';
import Place from './Components/Screens/Place';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
           <Route Component={Places} exact path='/'/>
           <Route Component={Place}  path='/place/:id' exact/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
