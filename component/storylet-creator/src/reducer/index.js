import {combineReducers} from 'redux'

import storylet from './storylet';
import slidesData from './slides-data'
import selectedSlide from './selected-slide'
import selectedComponent from './selected-component';
import copiedComponent from './copied-component';
import selectedLanguage from './selected-language';
import viewMode from "./view-mode";

const reducers = combineReducers({
    storylet : storylet,
    slidesData : slidesData,
    selectedSlide : selectedSlide,
    selectedComponent : selectedComponent,
    copiedComponent : copiedComponent,
    selectedLanguage : selectedLanguage,
    viewMode: viewMode
});

export default reducers