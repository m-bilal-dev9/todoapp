import React, { Component } from 'react'

export class TodoList extends Component {

    state = {
        Title: "",
        Todo: ""
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    onSubmitTodoList = (e) => {
        if(this.state.Title == "" || this.state.Todo=="") return;
        this.props.addTodoList(this.state.Title,this.state.Todo);
        this.setState({
            Title: "",
            Todo: ""
        });
    }

    render() {

        return (
            <div>
                <div className="card text-white bg-danger tolist-wrap" >
                    <div className="card-header">
                        Add Todo List
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList
