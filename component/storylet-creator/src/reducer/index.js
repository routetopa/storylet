import {combineReducers} from 'redux'

import slidesData from './slides-data'
import selectedSlide from './selected-slide'
import selectedComponent from './selected-component';

const reducers = combineReducers({
    slidesData : slidesData,
    selectedSlide : selectedSlide,
    selectedComponent : selectedComponent
});

export default reducers