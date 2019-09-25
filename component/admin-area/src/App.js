import React from 'react';
import logo from './logo.svg';
//import './App.css';

import { Impress, Step } from 'react-impressjs';
// styles of react-impressjs
import 'react-impressjs/styles/react-impressjs.css';

function App() {
  return (
    <div className="App">

      <Impress
          progress={true}
          fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
      >
        <Step id={'overview'} />
        <Step id={'any_id'} className={'class_name'} />
        <Step className={'without_id_is_ok'}
              data={
                  {
                      x:100,
                      y:-100,
                      scale:2
                  }}/>
        <Step duration={1500}>
          <h1>Storylet !!</h1>
          <hr />
          <p>Nothing's gonna stop your <b>Creativity</b> !!</p>
        </Step>
      </Impress>

    </div>
  );
}

export default App;
