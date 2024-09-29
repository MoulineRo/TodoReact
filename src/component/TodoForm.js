import {Button, TextField} from "@mui/material";
import {useState} from "react";


const TodoForm = ({setTaskList}) => {
    const [task, setTask] = useState({id: Date.now(), text: "", completed: false})


    const createTask = (e) => {
        e.preventDefault();
        setTaskList(prevState => [...prevState, task]);
        setTask({id: Date.now(), text: "", completed: false})
    };


    const handleChange =(e) => {
        let value = e.target.value
        setTask(prevState => ({
            ...prevState,
            text: value
        }));
    }



    return (
        <form className="input-form" onSubmit={createTask}>
            <TextField
                size="small"
                id="outlined-basic"
                sx={{width:"100%"}}
                variant="outlined"
                value={task.text}
                onChange={(e) => handleChange(e)}/>
            <Button
                sx={{width:"20%"}}
                variant="contained"
                type="submit"
            >create</Button>
        </form>
    )
}

export default TodoForm