const slidesData = (state = [], action) => {
    switch (action.type){
        case 'SET_SLIDES_DATA' : return action.payload;
        default : return state;
    }
};

export default slidesData