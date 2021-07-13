import React from 'react';
import'./Todo.css';
class Todo extends React.Component{
constructor(props){
  super(props);
  this.state = {id:props.id ,value: props.value,done: props.done};
}
themm = () =>{
    
    
console.log(this.state.done)
    this.setState({done :true});
    this.props.them(this.props.id);
};
render(){
  return (
     
 <div className="todo1">
     <img 
     src='https://cdn2.iconfinder.com/data/icons/flat-icons-web/40/OK-512.png'
     alt='hoàn thành'
     width='25'
     style={{ cursor : 'pointer'}}
     title='bấm để hoàn thành'
     onClick={() => this.themm() }
     />
    <span className={
        this.state.done ? 'done' : ''}>
             {this.props.value}
             </span>
    <img 
     src='https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/19-128.png'
     alt='hoàn thành'
     width='25'
     style={{ cursor : 'pointer'}}
     title='bấm để xóa'
     onClick={() =>{this.props.delete(this.props.id)
    
     }}
     />
 </div>
  );
}
}
export default Todo;
