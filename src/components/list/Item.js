import React, { Component } from 'react'
import './List.scss'
import status from '../constants/status'
class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { todo } = this.props;
        return (
            <li className="todo-item">
                <div className="todo-content">{todo.name}</div>
                <div className={`todo-status ${status.getClass(todo.status)}`}
                    onClick={(e) => this.props.handleShowContextMenu(e, todo)}
                >
                    {status.getDisplayName(todo.status)}
                </div>
                <div className="todo-action">
                    <button
                        className="todo-edit"
                        onClick={(e) => this.props.handlePrepareEdit(todo)}
                    >Edit
                    </button>

                    <button
                        className="todo-delete"
                        onClick={(e) => this.props.handleDelete(todo.id)}
                    >Delete</button>
                </div>
            </li>
        );
    }
}

export default Item;