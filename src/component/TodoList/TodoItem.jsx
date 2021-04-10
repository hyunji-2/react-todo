import React, { useState } from "react";

const TodoItem = ({ item, onModify, onDelete, onCheckChange }) => {
    const [title, setTitle] = useState(item.title);
    const [isModify, setIsModify] = useState(false);

    const onIsModify = () => {
        setIsModify(true);
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const onModifyComplete = () => {
        onModify(item._id, title);
        setIsModify(false);
    }

    return (
        <li>
            <input type="checkbox"
                checked={item.isComplete}
                onChange={() => onCheckChange(item._id)}
            />

            {isModify ?
                <>
                    <input type="text" value={title} onChange={onTitleChange} />
                    <button type="button" onClick={onModifyComplete}>ModifyComplete</button>
                </>
            :
                <>
                {title}
                <div>
                    <button type="button" onClick={() => onDelete(item._id)}>delete</button>
                    <button type="button"
                        onClick={onIsModify}
                    >Modify</button>
                </div>
                </>
            }
        </li>
    );
};

export default TodoItem;