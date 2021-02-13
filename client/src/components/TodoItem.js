import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    GetStyle = () => {
        return {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            flexWrap:'nowrap',
            justifyContent:'space-between',
          alignItems: 'center'
        }
    }


    render() {
        const {ID} = this.props.todo;
        return (
            <div style={this.GetStyle()}>
              <div>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={this.props.todo.IsCompleted} onChange={(e) => this.props.markCompleted(ID, e.target.checked)}/>
                <span className='title' style={{
                  textDecoration: this.props.todo.IsCompleted ? 'line-through': ''
                }}>{this.props.todo.Value}</span>
              </div>
                <button type="button" className="btn" onClick={this.props.DeleteTodo.bind(this, ID)}>X</button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
