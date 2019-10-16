import React from 'react';

import HeaderContainer from './container/header-container'
import BodyContainer from './container/body-container'

import GlobalStyle from './style/global-style'

function App() {
  return (
    <>
      <GlobalStyle/>
      <HeaderContainer />
      <BodyContainer />
    </>
  );
}

export default App;
