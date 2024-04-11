import React from 'react';
import Item from './components/item';
import ItemDate from './components/ItemDate';
import Card from './components/card';

import './App.css';
function App() {


  const response = [
    {
      ItemName: 'Waqar',
      ItemDay: 6,
      ItemMonth: 'September',
      ItemYear: 2002
    },

    {
      ItemName: 'Ahmed',
      ItemDay: 10,
      ItemMonth: 'June',
      ItemYear: 2010
    },

    {
      ItemName: 'Talha',
      ItemDay: 16,
      ItemMonth: 'July',
      ItemYear: 2020
    }
  ]
  return (
    <div>

      <Card>
      <Item name={response[0].ItemName}>
      Hello Waqar, How are You
      </Item>
      <ItemDate day={response[0].ItemDay} month={response[0].ItemMonth} year={response[0].ItemYear}></ItemDate>
      <Item name={response[1].ItemName}></Item>
      <ItemDate day={response[1].ItemDay} month={response[1].ItemMonth} year={response[1].ItemYear}></ItemDate>
      <Item name={response[2].ItemName}></Item>
      <ItemDate day={response[2].ItemDay} month={response[2].ItemMonth} year={response[2].ItemYear}></ItemDate>
      <h1> Hello Waqar!</h1>
      </Card>
     
    </div>
  );
}

export default App;
