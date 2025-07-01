import React, { useState } from 'react';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';

/*function Welcome(props){
  return <h2>Welcome, {props.name}!</h2>;
}

function App() {
    return(
    <div>
      <Welcome name ='Andre Thomas'/>
      <Welcome name ='Marimlsa'/>
      <Welcome name ='Quizon'/>
    </div>
  )
}
*/

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return(
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

function App(){
  return(
    <div>
      <Counter/>
    </div>
  );
}
export default App;
