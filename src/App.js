import React from "react";
import { Button, Navbar, Card, CardImg } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import OrderForm from './Form';
import ConfirmedOrder from './PizzaParty';

const App = () => {
  return (
    <>
    <Navbar color='danger'>
    <h1 style={{ color: 'white', textShadow: '3px 3px 5px #000000' }}>Lambda Eats</h1>
    <Link to={'/'}>
      <Button color='success' style={{boxShadow: '2px 2px 4px #000000' }}>
        Home
      </Button>
      <Button color='success' style={{boxShadow: '2px 2px 4px #000000', marginLeft: '10px' }}>
        Help
      </Button>
    </Link>
    </Navbar>
    <Route exact path='/'>
    <Card>
      <CardImg style={{ width: '80', margin: '0 auto'}} src={require('./Assets/PizzaM.png')}/>
      <Link to={'/pizza'}>
      <h1 style={{color:'white', textShadow: '3px 3px 5px #000000', fontSize: '50px', fontWeight: '80%', position: 'absolute', left: '10%', top: '20%' }}>Your favorite food delivery while coding...</h1>
      <Button color='success' style={{boxShadow: '3px 3px 5px #000000', position: 'absolute', left: '50%', top: '60%'}}>
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
