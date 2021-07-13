//import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import Contac from './contac';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';

  
    
    


function App(){
    return(
    <Router>
      <div>
       <ul>
         <li>
<Link to='/Home'>home</Link>
         </li>
         <li>
         <Link to='/About'>  About </Link>
         
         </li>
         <li>
         <Link to='/Contac'>  contact </Link>
         </li>
       </ul>

<hr/>
<Switch>
  <Route exact path='/'>
    <Home/>
  </Route>
  <Route exact path='/Home'>
    <Home/>
  </Route>
  <Route exact path='/About'>
    <About/>
  </Route>
  <Route exact path='/Contac'>
    <Contac/>
  </Route>
</Switch>
      </div>
    </Router>
  );
}

export default App;
