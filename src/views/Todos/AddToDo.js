import React, { Component } from 'react';
import {  toast } from 'react-toastify';

class AddToDo extends Component {

    state ={
        title: ''
    }

    handleChangeTitle = (event)=>{
        this.setState({title: event.target.value})
    }

    handleAddTodo =()=>{
        if (!this.state.title){
            toast.error("Missing title");
            return;
        }
        let toDo = {
            id: Math.floor(Math.random() *10000),
            title: this.state.title
        }
        this.props.addNewTodo(toDo);
        this.setState({title:''})
    }

    render() {
        let {title} = this.state;
        return (
            <div>
                <div className="add-todo w3-margin-bottom d-flex">
                    <input style={{width:'25%',marginLeft:'20px'}} type="text" value={title} 
                        onChange={(event)=>this.handleChangeTitle(event)}
                    />
                    <button className='w3-button w3-khaki w3-hover-red add' 
                        onClick={()=>this.handleAddTodo()}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default AddToDo;
