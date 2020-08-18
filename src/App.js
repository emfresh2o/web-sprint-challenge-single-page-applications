import React from 'react';
import { Button, Navbar, Card, CardImg, CardGroup, CardBody, CardTitle } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import OrderForm from './Form';
import ConfirmedOrder from './PizzaParty';

const App = () => {
  return (
    <>
    <Navbar color='danger'>
    <h1 style={{ color: 'white', textShadow: '3px 3px 5px #000000' }}>Lambda Pizzeria</h1>
    <Link to={'/'}>
      <Button color='success' style={{boxShadow: '2px 2px 4px #000000' }}>
        Home
      </Button>
      <Button color='success' style={{boxShadow: '2px 2px 4px #000000', marginLeft: '5px' }}>
        Help
      </Button>
    </Link>
    </Navbar>
    <Route exact path='/'>
    <Card>
      <CardImg style={{ margin: '0 auto'}} src={require('./Assets/PizzaM.png')}/>
      <Link to={'/pizza'}>
      <h1 style={{color:'white', textShadow: '3px 3px 5px #000000', fontSize: '50px', fontWeight: '80%', position: 'absolute', left: '10%', top: '20%' }}>Your favorite food delivery while coding...</h1>
      <Button color='success' size='lg' style={{boxShadow: '3px 3px 5px #000000', position: 'absolute', left: '44%', top: '60%'}}>
      Pizza?
      </Button>
      </Link>
    </Card>
    <CardGroup>
      <Card>
        <CardImg style={{width: '75%', margin: '30px 0 0 50px', borderRadius: '5%'}} src={require('./Assets/pizzaA.png')}/>
        <CardBody>
          <CardTitle style={{margin: '0 0 10px 40px'}}>Margarita Pizza</CardTitle>
          <Link to={'/pizza'}>
          <Button color='success' size='sm' style={{margin: '0 0 5px 40px'}}>Button</Button>
          </Link>
        </CardBody>
      </Card>
      <Card>
      <CardImg style={{width: '75%', margin: '30px 0 0 50px', borderRadius: '5%'}} src={require('./Assets/pizzaB.png')}/>
        <CardBody>
          <CardTitle style={{margin: '0 0 10px 40px'}}>Mushroom Peppers</CardTitle>
          <Link to={'/pizza'}>
          <Button color='success' size='sm' style={{margin: '0 0 5px 40px'}}>Button</Button>
          </Link>
        </CardBody>
      </Card>
      <Card>
      <CardImg style={{width: '71%', margin: '30px 0 0 50px', borderRadius: '5%'}} src={require('./Assets/pizzaF.png')}/>
        <CardBody>
          <CardTitle style={{margin: '0 0 10px 40px'}}>Spinach Cheddar</CardTitle>
          <Link to={'/pizza'}>
          <Button color='success' size='sm' style={{margin: '0 0 5px 40px'}}>Button</Button>
          </Link>
        </CardBody>
      </Card>
    </CardGroup>
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
