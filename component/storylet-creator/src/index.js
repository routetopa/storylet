import React from 'react';
import ReactDOM from 'react-dom';
import StoryletCreator from './StoryletCreator';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'

const store = createStore (reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><StoryletCreator /></Provider>, document.getElementById('root'));