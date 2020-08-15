import React from "react";
import { Button, Navbar, Card, CardImg } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import OrderForm from './Form';
import ConfirmedOrder from './PizzaParty';

const App = () => {
  return (
    <>
    <Navbar color='danger'>
    <h1 style={{ color: 'white' }}>Lambda Eats</h1>
    <Link to={'/'}>
      <Button color='success'>
        Home
      </Button>
    </Link>
    </Navbar>
    <Route exact path='/'>
    <Card>
      <CardImg style={{height: '50%', margin: '0 auto'}} src={require('./Assets/PizzaM.png')}/>
      <Link to={'/pizza'}>
      <h1 style={{color:'white', fontSize: '60px', fontWeight: '80%', position: 'absolute', left: '18%', top: '30%' }}>Your favorite food delivery while coding</h1>
      <Button color='primary' style={{position: 'absolute', left: '50%', top: '50%'}}>
      Pizza?
      </Button>
      </Link>
    </Card>
    </Route>
    <Route path='/pizza'>
      <OrderForm/>
    </Route>
    <Route path='/PizzaParty'>
      <ConfirmedOrder/>
    </Route>
    </>
  );
};
export default App;
