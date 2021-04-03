import { useState } from 'react';
import {fetchTry}  from './services';

function App() {
  const [results, setResults] = useState('not yet');
  
  /////////// add a button to call that service
  // const callWork = function() {
  //   fetchTry()
  //   .then( text => {
  //     setResults(text);
  //   })
  //   .catch( err => {
  //     console.warn(err);
  //   })
  // }

  // return (
  //   <div className="App">
  //     <button onClick={callWork}>Try it</button>
  //     <p>{results}</p>
  //   </div>
  // );

  const callTest = function() {
    fetchTry()
    .then( text => {
      setResults(text);
    })
    .catch( err => {
      console.warn(err);
    });
  };

  const clear = function() {
    setResults('');
  };

  return (
    <div className="App">
      <button onClick={callTest}>Try it</button>
      <p>{results}</p>
      { results && <button onClick={clear}>Clear</button>}
    </div>
  );
}

export default App;
