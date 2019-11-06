import selectedComponentReducer from './selected-component-reducer';
import selectedSlideReducer from './selected-slide-reducer'
import slidesData from './slide-data-reducer'
import {combineReducers} from 'redux'

const reducers = combineReducers({
    selectedComponentReducer: selectedComponentReducer,
    selectedSlideReducer: selectedSlideReducer,
    slidesData:slidesData
});

export default reducers