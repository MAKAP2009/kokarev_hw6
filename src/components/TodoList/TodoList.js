import React from 'react';
import Icon from '../Icon/Icon';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkedItems: {} 
    };
  }

  handleDelete(id) {
    this.props.onDelete(id);    
  }

  handleCheckboxChange(id) {   
    this.setState(prevState => ({
      checkedItems: {
        ...prevState.checkedItems,
        [id]: !prevState.checkedItems[id] 
      }
    }));
  }

  render() {
    const styles = { 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    return (
      <ul>
        {this.props.list.map(item => {
          const { id, value } = item;
          const isChecked = this.state.checkedItems[id] || false;
          return (
            <li key={id} style={styles}>
              <input type="checkbox" checked={isChecked} onChange={() => this.handleCheckboxChange(id)} /> 
              {isChecked && <Icon />}
              <h4 style={{ marginRight: '15px' }} >{value}</h4>

              <button onClick={this.handleDelete.bind(this, id)}>
                X
              </button>
            </li>
            )
        })}
      </ul>
    )
  }
}