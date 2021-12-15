import './App.css';
import LandingPage from './pages/LandingPage.jsx'
import Login from './components/Login'
import DashBoard from './pages/DashBoard.jsx'
import {BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <Router>
                <Routes >
                  <Route exact path='/' element={<LandingPage />}  />
                  <Route exact path='/login' element={<Login />}  />
                  <Route exact path='/dashBoard' element={<DashBoard />} />
                </Routes> 
          </Router>
        </div>
    </Provider>
  );
}

export default App;
