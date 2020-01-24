import React, { Component } from 'react';

class AddItem extends Component{
    state = {
        task:'',
        hours : ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.task.value === '' || e.target.hours.value === ''  ){
            return false
        }else{
            this.props.addItem(this.state)
            this.setState({
                task:'',
                hours:''
            })
        }

     
    }
    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input type="text" placeholder="Please Enter task ...." 
                    id="task" onChange={this.handleChange} value={this.state.task} />

                     <input type="number" placeholder="Please Enter hours ...." 
                    id="hours" onChange={this.handleChange} value={this.state.hours} />

                    <input type="Submit" value="Add" 
                    
                    
                     />
               </form>
            </div>
        )
    }
}

export default AddItem;