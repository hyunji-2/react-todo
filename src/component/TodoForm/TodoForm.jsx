import React, { useState, useRef }  from "react";
import { useDispatch } from "react-redux";
import { todoAdd } from "../../store/reducer/list";

const TodoForm = () => {
    const dispatch = useDispatch();
    const [ value, setValue ] = useState('');
    const titleInput = useRef();

    const onSend = () => {
        dispatch(todoAdd(value));
        setValue('');
        titleInput.current.focus();
    };

    const onValueChange = (e) => {
      setValue(e.target.value);
    };
  
    const onKeyEnter = (e) => {
      if(e.key === "Enter"){
        onSend();
      };
    };

    return (        
        <div>
            <input type="text" value={value} placeholder="Add your task here" onChange={onValueChange} onKeyPress={onKeyEnter} ref={titleInput} />
            <button type="button" onClick={onSend}>send</button>
        </div>
    );
};

export default TodoForm;