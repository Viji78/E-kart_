import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import Products from './Components/Products';
import {Switch, Route} from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/products/:id" component={Product}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/*" component={Contact}/>

    </Switch>
    
    </>
  );
}

export default App;




