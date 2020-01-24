import React, { Component } from 'react';
import './Todoitems.css';

const TodoItems = (props) =>{
    const {items , deleteItem} = props;
    let length = items.length;
   
    const ListItems = length ? (
        items.map( item =>{
            return (
                <div key={item.id}>
                    <span className="task">{item.task}</span>
                    <span className="hours">{item.hours}</span>
                    <span className="action icon" onClick={ () => deleteItem(item.id)}>&times;</span>
    
                </div>
            )
        })
    ):(
        <p>You didn't assign any tasks yet.</p>
    )

    return(

           <div className="ListItems">
            <div >
                <span className="task title">Task</span>
                <span className="hours title" >Hours</span>
                <span className="action title">Action</span>
            </div>
            {ListItems}
        </div>
    )
}

export default TodoItems