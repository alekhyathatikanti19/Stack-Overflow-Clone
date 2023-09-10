import React ,{ useEffect }from 'react';

import { useDispatch } from 'react-redux'
import './App.css';
import Navbar from './components/navbar/navbar'
import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users';

function App() {
  const dispatch=useDispatch()
  useEffect(() =>{
      dispatch(fetchAllQuestions())
      dispatch(fetchAllUsers())
  },[dispatch])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
