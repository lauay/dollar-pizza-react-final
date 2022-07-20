import React from 'react';
import Plain from './plain';
import Pepperoni from './pepperoni';
import MeatLover from './meat-lover';
import Veggie from './veggie';
import Hawaiian from './hawaiian';
import BBQ from './bbq';
import './css/menu.css';

function Menu() {
  return(
    <div className='Menu container-fluid'>
        <br></br>
        <br></br>
      <h2 className='primary-text'>New York's World Famous</h2>
      <h2 className='secondary-text'>Pizza Menu</h2>
      <div className='row'>
        <Plain/>
        <Pepperoni/>
        <MeatLover/>
        <Veggie/>
        <Hawaiian/>
        <BBQ/>
      </div>
    </div>
  );
}

export default Menu;
