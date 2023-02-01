import React, { Component } from 'react'
import './List.scss'
import status from '../constants/status'
import Item from './Item';
class List extends Component {
    constructor(props) {
        super(props);
        this.handleShowContextMenu = this.handleShowContextMenu.bind(this)
    }
    state = {
        top: 0,
        left: 0,
        visibility: 'hidden',
        todo: {
            id: undefined,
            status: undefined,
            name: ''
        }
    }

    handleShowContextMenu(e, todo) {
        this.setState({
            visibility: 'visible',
            top: e.clientY,
            left: e.clientX,
            todo: {
                ...this.state.todo,
                ...todo
            }
        });
    }

    handleCloseContextMenu() {
        this.setState({
            ...this.state,
            visibility: 'hidden',
            top: 0,
            left: 0,
            todo: {
                id: undefined,
                status: undefined,
                name: ''
            }
        })
    }

    handleSaveStatusTodo(status) {
        this.setState({
            ...this.state,
            visibility: 'hidden',
        })
        this.props.handleSaveTodo({
            ...this.state.todo,
            status: status
        })
    }
    render() {
        const { todos } = this.props;
        return (
            <>
                <ul>
                    {todos.map((todo, key) => {
                        return <Item
                            todo={todo}
                            key={key}
                            handlePrepareEdit={this.props.handlePrepareEdit}
                            handleDelete={this.props.handleDelete}
                            handleShowContextMenu={this.handleShowContextMenu}
                        />
                    })}
                </ul>
                <div className={`status-context-cover ${this.state.visibility}`}
                    onClick={() => this.handleCloseContextMenu()}></div>
                <div
                    className={`status-context-menu ${this.state.visibility}`}
                    style={{
                        top: `${this.state.top}px`,
                        left: `${this.state.left}px`,
                        transform: `${window.innerHeight - this.state.top <= 150 ? 'translateY(-100%' : ''
                            }`
                    }}
                >
                    <button
                        className={`todo-status todo`}
                        onClick={() => this.handleSaveStatusTodo(status.TODO)}
                    >
                        Todo
                    </button>
                    <button
                        className={`todo-status process`}
                        onClick={() => this.handleSaveStatusTodo(status.PROCESS)}
                    >
                        Processing
                    </button>
                    <button
                        className={`todo-status completed`}
                        onClick={() => this.handleSaveStatusTodo(status.COMPLETED)}
                    >
                        Completed
                    </button>
                </div>
            </>
        );
    }
}

export default List;