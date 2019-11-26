const selectedSlide = (state = null, action) => {
    switch (action.type){
        case 'SELECT_SLIDE' : return action.payload;
        default : return state;
    }
};

export default selectedSlide