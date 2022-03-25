import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import './Card.css';
import Rating from '@mui/material/Rating';
import { Context } from './Context';

function Add() {
  console.log('In add function');
}

function handleAdd(x) {
  console.log('Add');
  Add();
}

function handleView() {
  console.log('View');
}

export default function Crd(props) {
  const [value, setValue] = React.useState(2);
  const [btnNm, setBtnName] = React.useState(props.view);
  const getValuesFromProvider = useContext(Context);
  var action = props.action;
  console.log(btnNm, 'checking Button name');

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
              onClick={(btnNm) => {
                {
                  action == 1
                    ? getValuesFromProvider.handleIncrementFromProvider()
                    : handleView();
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
