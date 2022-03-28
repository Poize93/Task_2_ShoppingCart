import React, { useContext, useState } from 'react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import './Card.css';
import Rating from '@mui/material/Rating';
import { Context } from './Context';

function Crd(props) {
  // var key = props.key;
  const [value, setValue] = useState(4);
  const [btnNm, setBtnName] = useState(props.view);

  const getValuesFromProvider = useContext(Context);
  var action = getValuesFromProvider.handleButtonFromProvider;

  function handleButton(action) {
    {
      getValuesFromProvider.handleCartNameFromProvider(props.view);
    }
    if (action != 0) {
      action == 1
        ? getValuesFromProvider.handleIncrementFromProvider()
        : getValuesFromProvider.handleDecrementFromProvider();
    }

    if (action === 1) {
      action = 2;
    } else if (action === 2) {
      action = 1;
    }
    console.log(action, 'Check Action');
    getValuesFromProvider.handleButtonFromProvider(action);
  }
  // console.log(props.action, 'checking my props funtionality');
  return (
    <>
      <div className="card">
        <div>
          <div>
            <img
              className="image"
              src="https://img.freepik.com/free-photo/girl-holds-fashion-shopping-bag-beauty_1150-13673.jpg?size=626&ext=jpg"
            />
          </div>
          <div className="content">
            <h3>{props.name}</h3>
            {props.star == true ? (
              <span>
                <Rating name="read-only" value={5} readOnly />
              </span>
            ) : (
              <></>
            )}

            <h5>{props.cost}</h5>
            <Button
              className="btnDsply"
              onClick={() => {
                if (props.action != 0) {
                  handleButton(props.action); ////here is the issue
                }
              }}
              variant="outlined"
            >
              {btnNm}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Crd;
