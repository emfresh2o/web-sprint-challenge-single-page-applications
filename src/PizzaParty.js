import React from 'react';
import { CardImg, Card } from 'reactstrap';

const ConfirmedOrder = () => {
    return (
        <>
        <Card style={{ width: '40%', margin: '20px auto' }}>
            <h2 style={{ margin: '20px auto', textAlign: 'center', fontSize: '30px'}}>
                Congratulations your Pizza is on it's way!
            </h2>
            <CardImg src='https://media.giphy.com/media/UqSQDOXzsvUxYoei4x/giphy.gif' alt="Pizza Party!"
            />
        </Card>
        <h2 style={{color:'white', fontSize: '35px', fontWeight: '80%', position: 'absolute', left: '35%', top: '25%' }}>LET'S GET READY TO PARTY!!!</h2>
        </>
    );
};

export default ConfirmedOrder;