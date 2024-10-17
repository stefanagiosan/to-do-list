import React , {useState} from "react";
import {ToDoForm} from "./ToDoForm";
import {Todo} from "./ToDo";
import {v4 as uuidv4} from 'uuid'; // generates unique IDs for tasks
import {EditToDoForm} from "./EditToDoForm";
uuidv4(); //ensures 'uuidv4' is initialized

export const TodoWrapper = () => {
        const [todos, setTodos] = useState([])

        //adds a new task to the list
        const addTodo = todo => {
            setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        }

        // toggles the 'completed' status of the task
        const toggleComplete = id => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
        }

        // removes a task from the list
        const deleteTodo = id => {
            setTodos(todos.filter(todo => todo.id !== id))
        }

        // toggles the 'isEditing' status to show or hide the edit form
        const editTodo = id => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
        }

        // updates a task with a new text and disables the edit form
        const editTask = (task,id) => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
        }
    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!!</h1>
            <ToDoForm addTodo={addTodo} />
            {
                todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditToDoForm editTodo={editTask} task={todo}/>
                        ) : (
                            <Todo task={todo}
                                  key={index} // unique key
                                  toggleComplete={toggleComplete}
                                  deleteTodo={deleteTodo}
                                  editTodo={editTodo}
                            />
                        )

                ))
            }
        </div>
    )
}