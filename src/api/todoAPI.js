class todoApi {
    todos = [
        {
            id: 1,
            status: 0,
            name: 'Learn ReactJS'
        },
        {
            id: 2,
            status: 1,
            name: 'Learn English'
        },
        {
            id: 3,
            status: 0,
            name: 'Learn PHP'
        },
        {
            id: 4,
            status: 2,
            name: 'Learn NodeJS'
        },
        {
            id: 5,
            status: 2,
            name: 'Learn React Native'
        },
    ]
    get(id = false) {
        if (!id) {
            return this.todos;
        }
        return this.todos.find(item => item.id === id);
    }

    save(todo) {
        if (todo.id === undefined) {
            const ids = this.todos.map((todo) => todo.id); //get all id end map them together
            const latestID = Math.max(...ids);
            // add id into object
            todo = {
                ...todo,
                id: latestID + 1,
            }
            this.todos.push(todo);
            return todo;
        } else {
            // find by id
            this.todos = this.todos.map((oldTodo) => oldTodo.id === todo.id ? todo : oldTodo);
            return todo;
        }
    }


    
    delete(id) {
        const newTodos = this.todos.filter((oldTodo) => oldTodo.id != id);
        this.todos = newTodos;
        return true;
    }
}

export default new todoApi();
