import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import uuid from 'uuid';
import axios from 'axios';
import AddTodo from './components/AddTodo';

class App extends Component {

  state = {
    todos: null
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = async () => {
    const res = await axios.get(`/GetTodos`);
    if (res.data.data && res.data.data.length !== 0) {
      this.setState({todos: res.data.data});
    }
  };

  addTodoList = (title, todo) => {
    axios.get(`/AddTodo?todo='${todo}'&title='${title}'`).then(res => console.log(res)).then(() => this.getTitles());
  };
  addTodo = (Val) => {
    axios.get(`/AddTodo?todo='${Val}'&title='as'`).then(res => console.log(res))
        .then(() => {
          this.getTodos();
        });
  };

  render() {
    console.log(this.state.todos);
    return (
        <div className="body">
          <Header/>
          <div className="myContainer">
            <AddTodo addTodo={this.addTodo}/>
            {this.state.todos &&
            <Todos key={uuid.v4()} getTodos={this.getTodos} todos={this.state.todos}/>
            }
          </div>
        </div>
    );
  }
}

export default App;
