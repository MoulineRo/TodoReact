import './App.css';
import TodoForm from "./component/TodoForm";
import {useState} from "react";
import TodoList from "./component/TodoList";

function App() {
    const [taskList, setTaskList] = useState([])


  return (
    <div className="App">
        <TodoList
            taskList={taskList}
            setTaskList={setTaskList}
        />
        <TodoForm setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
