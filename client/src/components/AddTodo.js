import React, {Component} from 'react';

export class AddTodo extends Component {

  state = {
    item: ''
  };

  onChange = (e) => this.setState({item: e.target.value});

  onSubmitTodo = (e) => {
    if (this.state.item === '') return;
    this.props.addTodo(this.state.item);
    this.setState({
      item: ''
    });
  };

  render() {
    return (
        <div className="add-todo-wrap">
          <div className='add-todo'>
            <input type="text" className="form-control input-wrap" placeholder="Enter something..."
                   value={this.state.title}
                   onChange={this.onChange}/>
            <div className='btn-wrap'>
              <button className="btn btn-primary add-btn" type="submit" onClick={this.onSubmitTodo}>Add Item</button>
            </div>
          </div>
        </div>
    );
  }
}

export default AddTodo;
