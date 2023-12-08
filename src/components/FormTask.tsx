import { AiOutlinePlusCircle } from "react-icons/ai";
import style from "./FormTask.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { TodoList } from "./TodoList";

export interface PropsTaskList {
    id: number,
    content: string,
    status: boolean
}

export function FormTask() {
    const [taskList, setTaskList] = useState<PropsTaskList[]>([]);
    const [newTaskItem, setNewTaskItem] = useState<string>('')

    // Just to adjust id number
    function randomIntInterval(min: number, max: number) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    function handleCreateTaskList(event: FormEvent) {
        
        const taskItem = {
            id: randomIntInterval(1, 1000),
            content: newTaskItem,
            status: false
        }

        setTaskList((taskList) => [...taskList, taskItem])
        setNewTaskItem('');
        event?.preventDefault()
    }

    function handleNewTaskItem(event: ChangeEvent<HTMLInputElement> ) {
        setNewTaskItem(event?.target.value)
    }
   
    return (
        <>
            <div className="container mx-auto">
                <form action="" className={style.formgrid} onSubmit={handleCreateTaskList}>
                    <input type="text" name="todo_task" className={style.input} value={newTaskItem} onChange={handleNewTaskItem} placeholder="Adicione uma nova tarefa" />
                    <button type="submit" className={style.btn_submit}> Criar <AiOutlinePlusCircle className="ml-1" /> </button>
                </form>
            </div>
            <TodoList taskList={taskList} setTaskList={setTaskList} />
        </>
    )
}