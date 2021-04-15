
import './App.css';

import Header from './header';

function App() {
  const greeting = 'Hello'
  return (
    <div className="App">
      <div className="container">
   
      <h1>Hello From React App</h1>
      <h2>{greeting} There!</h2>

      <div className="linkApp"> 
      <a className="link" href="https://portfolio-ayoubi.netlify.app/">Millad's Portfolio</a>
      </div>

      
      </div>

      
      <Header text="Hola"/>
      
    </div>
  );
}

export default App;



