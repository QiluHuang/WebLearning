import { useState } from 'react';
import { fetchTry } from './services';
import Demo from './Demo';
import CatFacts from './CatFacts';

function App() {
  const [results, setResults] = useState('not yet');
  const [showDemo, setShowDemo] = useState(false);
  const [showCatFacts, setShowCatFacts] = useState(false);


  const callTest = function() {
    fetchTry()
    .then( text => {
      setResults(text);
    })
    .catch( err => {
      console.warn(err);
    })
  }

  const clear = function() {
    setResults('');
    setShowCatFacts(false);
  }

  return (
    <div className="App">
      <button onClick={callTest}>Try it</button>
      <p>{results}</p>
      { results && <button onClick={clear}>Clear</button>}
      <br/>
      <br/>

      <Demo/>
      <br/>
      <br/>


      { showDemo ? <Demo/> : <button onClick={ () => setShowDemo(true)}>Demo</button>}
      <br/>
      <br/>


      { showCatFacts ? <CatFacts/> : <button onClick={ () => setShowCatFacts(true)}>CatFacts</button>}
    </div>
  );
}

export default App;
