import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import MyCompProps from './Components/MyCompProps';
import MyCompSpecialProp from './Components/MyCompSpecialProp';
import PropsDemo from './Components/PropsDemo';
import Ouch from './Components/OuchComp';
import Room from './Components/Room';

function App() {
  const animal = 'Puppies';
  
  const wasClicked = () => console.log('ow!');

  const wasOuch = () => console.log('ouch!');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {/* <p onClick={wasClicked}> */}
          I like {animal} {1+1}.
          {/* 第一、二种 */}
          {/* <PropsDemo animal={"cat"} description={"fluffy"}/> */}

          {/* 第三种 */}
          <p className="description">Pass multiple props' properties</p>
          <PropsDemo onClick={wasClicked} animal={"dog"} description={"fluffy"}>Dogs Droal!</PropsDemo>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello />

        <br/>
        <p className="description">Pass props.property</p>
        <MyCompProps name="Boo"/>

        <br/>
        <p className="description">Pass children</p>
        <MyCompSpecialProp>This is some content</MyCompSpecialProp>
        
        <br/>
        <p className="description">Pass function via props</p>
        <Ouch onClick={wasOuch}/>

        <br/>
        <p className="description">Component State Demo</p>
        <Room />
      </header>
    </div>
  );
}

export default App;
