import React, { Component } from 'react'
import './Form.scss'
class Form extends Component {
    state = {
        id: undefined,
        name: '',
        status: 0
    }
    handleChange(e) {
        this.setState({
            ...this.state,
            name: e.target.value,
        })
    }

    componentDidUpdate(prevProps, preState) {
        if (prevProps.check !== this.props.check) {
            this.setState({
                ...this.state,
                id: this.props.todo.id,
                name: this.props.todo.name,
                status: this.props.todo.status,
            })
        }
    }

    handleChangeFormTodoSave() {
        this.setState({
            id: undefined,
            name: '',
            status: 0
        });
    }
    render() {
        return (
            <>
                <div className='todo-form'>
                    {this.state.id && (
                        <button
                            className='edit-tag'
                            onClick={() => this.handleChangeFormTodoSave()}
                        >
                            Edit: {this.props.todo.name}
                        </button>
                    )}
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.props.handleSaveTodo(this.state)
                    }}>
                        <input
                            type='text'
                            placeholder=' '
                            name='name'
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.name}
                        />
                        <button
                            className='todo-save'
                            placeholder='Input todo'
                            type='submit'
                        >
                            SAVE
                        </button>
                    </form>
                </div>
            </>
        )
    }
}

export default Form;