import React, {useState} from "react";

// ToDoForm component handles user input and adds a new task
// The 'addTodo' function is passed as a prop to add a new task

export const ToDoForm = ({addTodo}) => {
    // useState is used to manage the state of the input field
    // 'value' stores the current input and 'setValue' updates it
        const [value, setValue] = useState("");

        const handleSubmit = (e) => {
            //prevents the page from reloading when the form is submitted
            e.preventDefault();
            if(value) {
                // if the input is not empty, calls 'addtodo' to add the task
                addTodo(value);
                // clears the input field after submission
                setValue("");
            }

        }
      // defines the structure of the form's UI
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text"
                   className={'todo-input'}
                   value={value} placeholder={'What is the task today?'}
                   on onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className={'todo-btn'}>Add Task</button>
        </form>
    )
}