import React, { useState } from 'react';
import Lists from "./Lists";

function TodoList() {

    const [item,setItem]=useState("");
    const [itemList,setItemList]=useState([]);


    const inputchange=(event)=>{
        setItem(event.target.value)
    }

    const todoBtn=()=>{
        setItemList([...itemList,{val:item,key:Date.now()}])
        setItem("")
    }
    return (
        <div className="todolist">
            <input 
            type="text"
            placeholder="Enter your plan "
            onChange={inputchange}
            value={item}
            />
            <button className="todo-btn" onClick={todoBtn}>+</button>
            <Lists itemlist={itemList} setItemList={setItemList}/>
            
        </div>
    )
}

export default TodoList
