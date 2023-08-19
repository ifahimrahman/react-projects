import React from 'react';
import ReactDom from 'react-dom';

function Greeting(){
  return <h4> This is fahim</h4> 
}

ReactDom.render(<Greeting/>, document.querySelector('#root'));