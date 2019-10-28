import selectedComponentReducer from './selected-component-reducer';
import selectedSlideReducer from './selected-slide-reducer'
import slideData from './slide-data-reducer'
import {combineReducers} from 'redux'

const reducers = combineReducers({
    selectedComponentReducer: selectedComponentReducer,
    selectedSlideReducer: selectedSlideReducer,
    slideData:slideData
});

export default reducers