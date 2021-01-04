import React, { Component } from 'react';
import TodoApp from './components/todo/TodoApp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp/>
      </div>
    );
  }
}

class LoginComponent extends Component{
  render(){
    return(
      <div>
        User Name : <input type="text" name="userName"/>
        Password : <input type="password" name="password"/>
      </div>
    );
  }
}
export default App;