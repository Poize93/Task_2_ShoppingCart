import React, { useContext, useState } from 'react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import './Card.css';
import Rating from '@mui/material/Rating';
import { Context } from './Context';

function Crd(props) {
  const [value, setValue] = React.useState(2);
  const [btnNm, setBtnName] = React.useState(props.view);
  // const [action, setAction] = React.useState(props.action);
  // const action = 2;
  const getValuesFromProvider = useContext(Context);
  var action = getValuesFromProvider.handleButtonFromProvider;

  function handleButton(action) {
    if (action != 0) {
      action == 1
        ? getValuesFromProvider.handleIncrementFromProvider()
        : getValuesFromProvider.handleDecrementFromProvider();
    }
  }

  return (
    <>
      <div className="card">
        <div>
          <div>
            <p className="sale">Sale</p>
            <img
              className="image"
              src="https://img.freepik.com/free-photo/girl-holds-fashion-shopping-bag-beauty_1150-13673.jpg?size=626&ext=jpg"
            />
          </div>
          <div className="content">
            <h3>{props.name}</h3>
            <span>
              <Rating name="read-only" value={value} readOnly />
            </span>
            <h5>{props.cost}</h5>
            <Button
              className="btnDsply"
              onClick={() => {
                handleButton(action);
              }}
              variant="outlined"
            >
              {btnNm}
            </Button>
            <button
              onClick={() =>
                getValuesFromProvider.handleIncrementFromProvider()
              }
            >
              Increment
            </button>{' '}
            <button
              onClick={() =>
                getValuesFromProvider.handleDecrementFromProvider()
              }
            >
              Decrement
            </button>{' '}
          </div>
        </div>
      </div>
    </>
  );
}

export default Crd;
