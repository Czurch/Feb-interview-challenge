import React from 'react';

function ItemList(props) 
{
    const items = props.cardItems;
    if(items)
    {
    const listItems = items.map((item) =>
      <li key={item.key}>{item}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
    }
}

export default ItemList;