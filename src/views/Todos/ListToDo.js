import React, { Component } from 'react';
import AddToDo from './AddToDo';
import './ListToDo.scss';
import {  toast } from 'react-toastify';

class ListToDo extends Component {

    state ={
        listTodos: [
            {id:'todo1',title:'Doing Homework'},
            {id:'todo2',title:'Making Videos'},
            {id:'todo3',title:'Fixing Bugs'},
        ],
        editTodo: {}
    }

    addNewTodo = (todo)=>{
        this.setState({
            listTodos: [...this.state.listTodos,todo]
        })
        toast.success("Add success Todo");
    }

    handelDeleteTodo = (todo)=>{
        let currentTodos =this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos:currentTodos
        })
        toast.error("Delete success Todo");
    }

    handelEditTodo = (todo)=>{
        let {editTodo, listTodos} =this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id ===todo.id));
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos:listTodosCopy,
                editTodo:''
            })
            toast.warn("Update success Todo")
            return;
        }
        //edit
        this.setState({
            editTodo:todo
        })
    }

    handelOnChangeEditTodo = (event)=>{
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo:editTodoCopy
        })
    }

    render() {
        let {listTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        return (
            <div className="list-todo-container">
                <AddToDo addNewTodo={this.addNewTodo}/>
                <div className='list-todo-content'>
                    {listTodos && listTodos.length >0 && listTodos.map((item,index)=>{
                        return(
                            <div className='todo-child w3-margin-bottom' key={item.id}>
                                {isEmptyObj === true ?
                                    <span>{index+1} - {item.title}</span>
                                    :
                                    <>
                                    {editTodo.id === item.id ?
                                       <span>
                                        {index + 1} - <input value={editTodo.title} onChange={(event)=> this.handelOnChangeEditTodo(event)} />
                                        </span>
                                        :
                                        <span>{index+1} - {item.title}</span>
                                    }   
                                    </>
                                 
                                }
                                <button className='w3-button w3-green w3-hover-gray w3-margin-left'
                                    onClick={()=>this.handelEditTodo(item)}
                                >
                                    {isEmptyObj === false && editTodo.id === item.id ?
                                        'Save':'Edit'
                                    }
                                </button>
                                <button className='w3-button w3-red w3-hover-gray  w3-margin-left'
                                    onClick={()=>this.handelDeleteTodo(item)}
                                >
                                    Delete
                                </button>
                            </div>
                        ) 
                    })} 
                    

                </div>
            </div>
        );
    }
}

export default ListToDo;
