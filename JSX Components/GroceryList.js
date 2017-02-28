import React, {Component} from 'react';

import Comment from './Comments';
import Conditional from './Conditional';
import BlankSpace from './BlankSpace';


class GroceryList extends Component {
  render() {
    return (
    <div>
      <ul>
        <ListItem quantity="1">Bread</ListItem>
        <ListItem quantity="6">Eggs</ListItem>
        <ListItem quantity="2">Milk</ListItem>
      </ul>
      <Comment />
      <BlankSpace />
      <Conditional />
    </div>
    );
  }
}

// Child Component
class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.quantity}× {this.props.children}
      </li>
    );
  }
}
export default GroceryList;