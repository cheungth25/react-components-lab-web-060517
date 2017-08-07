// Make sure to import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom'

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export class OlderCoaster extends React.Component {
  render(){
    return React.createElement('div', {className:'oldercoaster'}, [
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('p', {}, 'Passengers:'),
      React.createElement('ul', {}, [
        React.createElement('li', {}, 'Agnes'),
        React.createElement('li', {}, 'Muriel')
      ])// ul
    ])// div
  }
};
export class InFrontOfYou extends React.Component {
  render(){
    return (
      <div>
        <p>You shouldn't look too far.</p>
        <p>Sometimes, the solution is right in front of you.</p>
      </div>
    )
  }
};
export class ButcherShop extends React.Component {
  render(){
    return(
      <div className="butcher-shop">
        <p>Hello! We have the following products for sale today:</p>
          <ul>
            {BUTCHER_PRODUCTS.map(function(meat){
              return (<li>{meat}</li>)
            })}
          </ul>
      </div>
    )
  }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);
