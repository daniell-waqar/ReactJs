import React from 'react';
import './item.css';

function Item(props) {
  const itemName = props.name;

  return (
    <div>
      <p className="item">{itemName}</p>
      <div className="children-wrapper">{props.children}</div>
    </div>
  );
}

export default Item;
