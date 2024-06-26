import React from 'react';
import { Cart } from './Pages/Cart'
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import LoginPage from './Pages/LoginPage';
import RegPage from './Pages/RegPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Container>
        <Router>
          <div>
            <ButtonGroup>
              <Button variant='outline-primary'>
                <Link to='/'>Home</Link>
              </Button>
              <Button variant='outline-primary'>
                <Link to='/login'>Login</Link>
              </Button>
              <Button variant='outline-primary'>
                <Link to='/registration'>Registration</Link>
              </Button>
              <Button variant='outline-primary'>
                <Link to='/product-page'>Product</Link>
              </Button>
              <Button variant='outline-primary'>
                <Link to='/cart'>Cart</Link>
              </Button>
            </ButtonGroup>

            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/registration' component={Register}/> 
              <Route path='/product-page' component={Product}/>
              <Route path='/cart' component={CartComp}/>
                
            </Switch>
          </div>
        </Router>
      </Container>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>
}

function Login() {
  return <LoginPage />
}

function Register() {
  return <RegPage />
}

function Product() {
  return <ProductPage />
}

function CartComp () {
  return <Cart />
}





