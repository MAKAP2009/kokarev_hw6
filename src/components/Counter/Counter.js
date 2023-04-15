import React from 'react';
import { connect } from 'react-redux';
import { decrementAction, incrementAction } from '../../redux/actions';

class Counter extends React.Component {
  handleDecrement() {
    this.props.dispatch(decrementAction);
  }

  handleIncrement() {
    this.props.dispatch(incrementAction);
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={this.handleDecrement.bind(this)}>-</button>
        <h4>{this.props.counter}</h4>
        <button onClick={this.handleIncrement.bind(this)}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps)(Counter);