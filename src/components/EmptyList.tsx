import { LuClipboardList } from "react-icons/lu";
import style from "./EmptyList.module.css";

export function EmptyList() {
    return (
        <div className={style.emptyBox}>
            <LuClipboardList className="text-3xl" />
            <div>
                <div><strong>Você ainda não tem tarefas cadastradas</strong></div>
                Crie tarefas e organize seus itens a fazer
            </div>
        </div>
    )
}