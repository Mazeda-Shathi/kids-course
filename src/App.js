import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Instructor from './components/Instructor/Instructor';




function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header></Header>
        <Switch>
        <Route exact path='/'>
         <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/service'>
        <Service></Service>
        </Route>
        <Route path='/instructor'>
      <Instructor></Instructor>
        </Route>
        <Route path='/about'>
        <About></About>
        </Route>
        <Route path='*'>
        <NotFound></NotFound>
        </Route>
        </Switch>
       </BrowserRouter>
       <Footer></Footer>
    </div>
  );
}

export default App;
