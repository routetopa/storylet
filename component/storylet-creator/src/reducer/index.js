import selectedComponentReducer from './selected-component-reducer';
import selectedSlideReducer from './selected-slide-reducer'
import {combineReducers} from 'redux'

const reducers = combineReducers({
    selectedComponentReducer: selectedComponentReducer,
    selectedSlideReducer: selectedSlideReducer
});

export default reducers