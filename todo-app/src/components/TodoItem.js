
const TodoItem = ({listItem, handleDelete, handleUpdateItem}) => {
    const textStyle = {
        textDecoration: listItem.isCompleted ? "line-through" : "none"
    }
    return(
        <li className="list-group-item">
            <input onChange={(e) => handleUpdateItem(e, listItem.id)} className="form-check-input me-1" type="checkbox" value="" />
            <span style={textStyle}>{listItem.text}</span>
            <button onClick={() =>handleDelete(listItem.id)} className='btn btn-danger btn-sm float-end'>x</button>
        </li>
    )
}

export default TodoItem;