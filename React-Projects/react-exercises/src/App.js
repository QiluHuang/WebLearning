import logo from './logo.svg';
import './App.css';

import { Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home.jsx";
import ComponentsLearning from './Components/ComponentsLearning.jsx';
import CommentPage from './CommentPageComponents/CommentPage/CommentPage';
import LoginControl from './LoginControl/LoginControl.jsx';
import Mailbox from './Mailbox/Mailbox.jsx';
import WarningPage from './WarningPage/WarningPage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



/** 4.1 Composing Components */



function App() {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ComponentsLearning">Components Learning</Link></li>
          <li><Link to="/CommentPage">React Comment Page</Link></li>
          <li><Link to="/Logincontrol">Conditonal Rendering 条件渲染 1 元素变量 greeting</Link></li>
          <li><Link to="/Mailbox">Conditonal Rendering 条件渲染 2 与运算符 && unmessages</Link></li>
          <li><Link to="/WarningPage">Conditonal Rendering 条件渲染 3 阻止组件渲染 Warning</Link></li>

        </ul>
      </nav>
    </header>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/ComponentsLearning" exact component={ComponentsLearning} />
      <Route path="/CommentPage" exact component={CommentPage}/>
      <Route path="/Logincontrol" exact component={LoginControl}/>
      <Route path="/Mailbox" exact component={Mailbox}/>
      <Route path="/WarningPage" exact component={WarningPage}/>

    </Switch>
    </>
  );
}


export default App;
