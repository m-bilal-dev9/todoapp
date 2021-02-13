import React, {Component} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

export class Todos extends Component {
  DeleteTodo = (id) => {
    axios.get(`/DeleteTodo?id=${id}`).then(res => console.log(res)).then(() => {
      this.props.getTodos();
    });
  };
  markCompleted = (id, check) => {
    axios.get(`/MarkTodoCompleted?id=${id}&IsCompleted=${check}`).then(res => console.log(res)).then(() => {
      this.props.getTodos();
    });
  };


  render() {
    return (
        <div className="border-dark mb-3 todo-item">
          {this.props.todos.map((todo) => (
              <TodoItem key={todo.ID} todo={todo} DeleteTodo={this.DeleteTodo}
                        markCompleted={this.markCompleted}
                />
            ))
          }
        </div>
    );
  }
}


export default Todos;
