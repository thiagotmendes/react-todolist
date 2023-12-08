import style from "./TodoList.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import check from "../assets/check.svg";
import check1 from "../assets/check1.svg";
import { EmptyList } from "./EmptyList";

export interface PropsTaskList {
    id: number,
    content: string,
    status: boolean
}

interface TaskListPropsChildreen {
  taskList: {
    id: number,
    content: string,
    status: boolean
  }[];
  setTaskList: React.Dispatch<React.SetStateAction<PropsTaskList[]>>
}

export function TodoList({taskList, setTaskList}: TaskListPropsChildreen) {

    function handleIsChecked(id: number) {
        const todoCompleted: PropsTaskList[] = taskList.map( task => {
            if(task.id === id) {
                task.status = !task.status; 
            } 
            return task;
        })
        setTaskList(todoCompleted); // How to solve this?
        event?.preventDefault()
    }

    function handleDeleteTask(id: number) {
        const currentTaskList: PropsTaskList[] = taskList.filter( task => {
            return task.id !== id
        })

        setTaskList(currentTaskList)
        event?.preventDefault() 
    }

    function countTrueStatus(array: PropsTaskList[]): number {
        const trueStatusCount = array.filter((item) => item.status).length;
        return trueStatusCount;
    }
      
    const trueStatusCount = countTrueStatus(taskList);

    // Função de comparação para organizar pelo valor do índice 'status'
    const compareByStatus = (a: PropsTaskList, b: PropsTaskList) => {
        // Organiza em ordem decrescente, para que as tarefas completas venham primeiro
        return a.status === b.status ? 0 : a.status ? 1 : -1;
    };
    // Organizar o array pelo índice 'status'
    const sortedTaskList = taskList.slice().sort(compareByStatus);

    return (
        <div className="container mx-auto mt-8">
            <header className={style.todolist_header}>
                <div className="text-blue flex">
                    Tarefas criadas <span className={style.spanCounter}>{taskList.length}</span>
                </div>
                <div className="text-purple flex">
                    Concluídas <span className={style.spanCounter}>{trueStatusCount}</span>
                </div>
            </header>

            {taskList.length === 0 ? <EmptyList /> : sortedTaskList.map( todo => {
                return(
                    <div className={style.todolist_box} key={todo.id} >
                        <div>
                            <a href="" onClick={() => handleIsChecked(todo.id)}>
                                {todo.status === true ? <img src={check1} alt="" /> : <img src={check} alt="" /> }     
                            </a>
                        </div>
                        <div style={{ textDecoration: todo.status === true ? "line-through" : "none" }} >
                            {todo.id + " - " + todo.content}
                        </div>
                        <div>
                            <a href="" onClick={() => handleDeleteTask(todo.id)}>
                                <FaRegTrashAlt className="text-lg" />
                            </a>
                        </div>
                    </div>
                )
            } )} 
        </div>
        
    )
}