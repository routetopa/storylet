const slideData = (state = [], action) => {
    switch (action.type){
        case 'SET_SLIDE_DATA' :  return action.payload;
        default         :  return state;
    }

};

export default slideData
