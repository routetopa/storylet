import {combineReducers} from 'redux'

import slidesData from './slides-data'
import selectedSlide from './selected-slide'
import selectedComponent from './selected-component';
import copiedComponent from './copied-component';
import selectedLanguage from './selected-language';

const reducers = combineReducers({
    slidesData : slidesData,
    selectedSlide : selectedSlide,
    selectedComponent : selectedComponent,
    copiedComponent : copiedComponent,
    selectedLanguage : selectedLanguage
});

export default reducers