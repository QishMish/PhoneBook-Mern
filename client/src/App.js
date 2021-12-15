import './App.css';
import LandingPage from './pages/LandingPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Login from './components/Login'
import DashBoard from './pages/DashBoard.jsx'
import {BrowserRouter as Router,Routes ,Route,Navigate} from "react-router-dom";
import { useCookies } from 'react-cookie';
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {

  const [cookies, setCookie] = useCookies();
  let authenticated = cookies.jwt ? true : false;

  console.log(authenticated)

  return (
    <Provider store={store}>
            <div className="App">
                <Router>
                    <Routes >
                      <Route exact path='/' element={<LandingPage />}  />
                      <Route exact path='/login' element={<Login />}  />
                      {
                        authenticated ?  <Route exact path='/dashBoard' element={<DashBoard />} /> 
                        // :  <Route exact path='/login' element={<Login />} />
                        // : <Navigate to="/login" />
                        : <Route  element={<Navigate to ="/" />}/>
                      }
                      <Route path='*' element={<ErrorPage />} />
                    </Routes> 
              </Router>
            </div>
    </Provider>
  );
}

export default App;
