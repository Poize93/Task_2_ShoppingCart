import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from './Card';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from './Context';

function App() {
  const [cartValue, setCart] = useState(0);
  const handleIncrement = () => {
    setCart(cartValue + 1);
  };

  const handleDecrement = () => {
    setCart(cartValue - 1);
  };
  return (
    <div className="App">
      <div className="NavBar">
        <Grid container direction="row">
          <Grid
            container
            xs={4}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <div>
              <Grid item>
                <h3>Start BootStrap</h3>
              </Grid>
            </div>
            <div>
              <Grid item>
                <Button variant="text">Home</Button>
              </Grid>
            </div>
            <div>
              <Grid item>
                <Button variant="text">About</Button>
              </Grid>
            </div>
            <div>
              <Grid item>Shop</Grid>
            </div>
          </Grid>
          <Grid item xs={6}></Grid>

          <Grid item xs={2}>
            <Button variant="outlined">
              <ShoppingCartIcon />
              Cart {cartValue}
            </Button>{' '}
          </Grid>
        </Grid>
      </div>
      <div className="banner">
        <Grid
          container
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <h1>Shop in Style</h1>
          </Grid>
          <Grid item>
            <div className="headline">
              <h5>With this Shop Homapage Tempelete</h5>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container direction="row">
        <Card
          name="Fancy Product"
          cost="$40.00 - $80.00"
          view="View Option"
          action="0"
        />
        <Card
          name="Special Item"
          cost="$20.00 $18.00"
          view="Add to Cart"
          action="1"
        />
        <Card
          name="Sale Item"
          cost="$$50.00 $25.00"
          view="Add to Cart"
          action="1"
        />
        <Card name="Popular Item" cost="$40.00" view="Add to Cart" action="1" />
        <Card
          name="Sale Item"
          cost="$50.00 $25.00"
          view="Add to Cart"
          action="1"
        />
        <Card
          name="Fancy Product"
          cost="$120.00 - $280.00"
          view="View Option"
          action="0"
        />
        <Card
          name="Special Item"
          cost="$20.00 $18.00"
          view="Add to Cart"
          action="1"
        />
        <Card name="Popular Item" cost="$40.00" view="Add to Cart" action="1" />
      </Grid>
      <button onClick={() => handleIncrement()}>Increment</button> &nbsp;
      <button onClick={handleDecrement}>Decerement</button> &nbsp;
      <Context.Provider
        value={{
          handleIncrementFromProvider: handleIncrement,
          handleDecrementFromProvider: handleDecrement,
        }}
      >
        <Card />
      </Context.Provider>
    </div>
  );
}

export default App;
