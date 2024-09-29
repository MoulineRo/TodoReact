import {Checkbox, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItems = ({task, handleCompleted, deleteTask}) => {




    return (
        <div className={!task.completed ? "list-row-checked" : "list-row"}>
            <Checkbox onClick={(e) => handleCompleted(e, task.id)}/>
            <div>{task.text}</div>
            <IconButton aria-label="delete" color="error" onClick={(e) => deleteTask(task.id)}>
                <DeleteIcon/>
            </IconButton>
        </div>

    )
}

export default TodoItems