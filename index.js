import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class List extends React.Component {
  componentWillReceiveProps(nextProps){
    if (nextProps.items !== this.props.items) {
      this.setState({ listItems: nextProps.items.map(item => (<li key={item}>{item}</li>))});
    }
  }

  componentWillMount(){
    this.setState({ listItems: this.props.items.map(item => (<li key={item}>{item}</li>))});
  }

  render() {
  	console.log("List's render function"); // this should not happen if the exact same props are provided a second time
    return (
      <ul>
          {this.state.listItems}
      </ul>
    );
  }
}

const list1Items = ['Eggs', 'Bread', 'Artisinal cheese'];
const list2Items = ['Trains', 'Planes', 'Automobiles'];

const render = (items) => {
	console.log("outer render function");
  ReactDOM.render(
    <List items={items} />,
    document.getElementById('root')
  );
}

document.addEventListener('keydown', event => {
  // this checks if the 1 key is pressed
  if (event.code === 'Digit1') {
		render(list1Items);
  }
  // this checks if the 2 key is pressed
  else if (event.code === 'Digit2') {
	  render(list2Items);
  }
});

render(list1Items);
