import TodoItem from "./TodoItem";

const TodoList = ({list, handleDelete, handleUpdateItem}) => {
    return(
        <ul className="list-group">
            {
                list?.map(item => {
                    return <TodoItem key={item.id} listItem={item} handleDelete={handleDelete} handleUpdateItem={handleUpdateItem}/>
                })
            }
            
        </ul>
    )
}

export default TodoList;