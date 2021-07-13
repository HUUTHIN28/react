
import './App.css';
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
  this.state.tasks.push(this.state.tasknamen );
  //this.setState({tasks: newtasks});
 this.setState({taskname:' '});
}
render(){
  return (
   <div className="App">
     <header className ="App-header">
       <div className="alinged">
         <br/>
         to do list : {this.state.taskname}
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
             return <li key={index} className="task">{value}</li>
           })}
         </ul>
       </div>
     </header>
   </div>
  );
  }
  }
export default App;
