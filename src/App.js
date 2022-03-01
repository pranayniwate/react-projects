import './App.css';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom'
import Color from './Color'
import Games from './Games'
import Nav from './Navbar'
import List from './List'
import User from './User'
import Menu from './Menu'
function App() {
  return(
    <Router>
      <Nav/>
      <Routes>
      <Route path='/' element={<Color/>}/>
      <Route path='/Games' element={<Games/>}/>
      <Route path='/List' element={<List/>}/>
      <Route path='/User' element={<User/>}/>
      <Route path='/Menu' element={<Menu />}/>
      </Routes>
    </Router>
  )
}

export default App;
