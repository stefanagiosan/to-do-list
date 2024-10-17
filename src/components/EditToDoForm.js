import React, {useState} from "react";

// EditToDoForm components handles the eiditing of an existing task
// 'editTodo' is a function passed as a prop to update a specific task
// 'task' is the current task that needs editing, also passed via props.

export const EditToDoForm = ({editTodo, task}) => {
    // useState initializes the input field with the current task
    // 'value' stores the current input and 'setValue' updates it
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        // prevents the page from reloading when the form is submitted
        e.preventDefault();

        // calls 'editTodo' function to update the task with the new value
        editTodo(value, task.id);

        // clears the input field after submission
        setValue("");
    }

    // defines the structure of the form's UI for editing a task
    return (
        <form className={'TodoForm'} onSubmit={handleSubmit}>
            <input type="text" className={'todo-input'} value={value} placeholder={'Update Task'} on onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className={'todo-btn'}>Update Task</button>
        </form>
    )
}