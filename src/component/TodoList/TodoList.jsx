import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodoRequest, todoModify, todoDelete,todoFinish } from "../../store/reducer/list";
import TodoItem from './TodoItem';

const TodoList = () => {
    const dispatch = useDispatch();
    const {list} = useSelector((state) => state);
    const onModify = (id, title) => {
        dispatch(todoModify(id, title));
    };
    const onDelete = (id) => {
        dispatch(todoDelete(id));
    };
    const onCheckChange = (id) => {
        dispatch(todoFinish(id));
    };

    useEffect(() => {
        dispatch(getTodoRequest());
    }, []);

    return (
        <ul>
            {list.map((v, index) => {
                return (
                    <TodoItem key={v._id} item={v}
                        onModify={onModify}
                        onDelete={onDelete}
                        onCheckChange={onCheckChange}
                    />
                );
            })}
      </ul>
   );
};

export default TodoList;