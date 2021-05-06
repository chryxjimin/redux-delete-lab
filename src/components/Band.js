import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={event => this.handleClick(event)}>Delete</button>
      </div>
    );
  }
};

export default Band;
