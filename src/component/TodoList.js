import TodoItem from "./TodoItem";

const TodoList = ({taskList, setTaskList}) => {
    const handleCompleted = (e, id) => {
        let state = e.target.checked;
        setTaskList(prevState =>
            prevState.map(task => {
                if (task.id === id) {
                    return { ...task, completed: state };
                }
                return task;
            })
        );
    };


    const deleteTask = (id) => {
        const foundTask = taskList.filter(task => task.id !== id)
        setTaskList(foundTask)
    }


    return (
        <div className="task-list">
            {taskList.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    handleCompleted={handleCompleted}
                    deleteTask={deleteTask}
                />
            ))}
        </div>

    )
}

export default TodoList