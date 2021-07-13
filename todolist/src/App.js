
import './App.css';
import Todo from './Todo';
import React from 'react';
class App extends React.Component{
constructor(props){
  super(props);
  this.state = {taskname: ' ',tasks : []};
}
myChang = (event) => {
  this.setState({taskname: event.target.value});
}

shoot = () => {
  console.log('thin', this.state.taskname);
  if(this.state.taskname ===' '){
  alert('không thể để trống')
  }
  else{
const name=this.state.taskname;
const id=this.state.tasks.length;
    this.state.tasks.push({ name , id, done: false});
    //this.setState({tasks: newtasks});
   this.setState({taskname:' '});
  }
}
them = (id) =>{
  console.log('id', id);
  const tasks = this.state.tasks;
tasks.forEach(task => {
if(task.id ===id){
  task.done=true;
}
})
console.log('task', tasks);
this.setState({tasks});
};
delete = (id) =>{
  console.log('id', id);
  const task = this.state.tasks.filter((tasks) => tasks.id !== id);
  this.setState({tasks: task});
  id=null;
};
render(){
  return (
   <div className="App">
     <header className ="App-header">
       <div className="alinged">
         <br/>
         to do list :
         <br/>
     <img src="https://cdn1.iconfinder.com/data/icons/office-293/128/_Add_new_plus_-128.png" 
     alt="cộng"
      height='20' 
      width="30" 
      style={{ cursor:'pointer' }}
      title='bấm vào day'
      onClick={() => this.shoot()}
      />
       <input type="text" width="30"
       value={this.state.taskname}
       onChange={this.myChang}
       />
         <ul>
           {this.state.tasks.map((value, index) =>{
            // return <li key={index} className="task">{value}</li>
         return <Todo 
     
         id={value.id}
          value={value.name}
          delete={this.delete}
          them={this.them}
          />
           })}
         </ul>
       </div>
     </header>
   </div>
  );
  }
  }
export default App;
