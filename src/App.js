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
  const [AddCrt, setAdd] = useState(1);

  const handleIncrement = () => {
    setCart(cartValue + 1);
  };

  const handleDecrement = () => {
    setCart(cartValue - 1);
  };

  const handleView = (x) => {
    setAdd(x);
    console.log('Check view', x);
  };

  return (
    <div className="App">
      <div className="NavBar">
        {/* <button onClick={() => handleIncrement()}>Increment</button> &nbsp;
        <button onClick={handleDecrement}>Decerement</button> &nbsp;
        <button onClick={() => handleView()}>ChangeCartName</button>&nbsp; */}
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

      <Context.Provider
        value={{
          handleIncrementFromProvider: handleIncrement,
          handleDecrementFromProvider: handleDecrement,
          handleButtonFromProvider: handleView,
        }}
      >
        <Grid container direction="row">
          <Card
            name="Fancy Product"
            cost="$40.00 - $80.00"
            view="View Option"
            action="0"
            star={false}
          />
          <Card
            name="Special Item"
            cost="$20.00 $18.00"
            view="Add to Cart"
            action={AddCrt}
            star={true}
          />
          <Card
            name="Sale Item"
            cost="$$50.00 $25.00"
            view="Add to Cart"
            action={AddCrt}
            star={false}
          />
          <Card
            name="Popular Item"
            cost="$40.00"
            view="Add to Cart"
            action={AddCrt}
            star={true}
          />
          <Card
            name="Sale Item"
            cost="$50.00 $25.00"
            view="Add to Cart"
            action={AddCrt}
            star={false}
          />
          <Card
            name="Fancy Product"
            cost="$120.00 - $280.00"
            view="View Option"
            action="0"
            star={false}
          />
          <Card
            name="Special Item"
            cost="$20.00 $18.00"
            view="Add to Cart"
            action={AddCrt}
            star={true}
          />
          <Card
            name="Popular Item"
            cost="$40.00"
            view="Add to Cart"
            action={AddCrt}
            star={true}
          />
        </Grid>

        {/* card ko Context.Provider m hi render karna hai */}
      </Context.Provider>
    </div>
  );
}

export default App;
