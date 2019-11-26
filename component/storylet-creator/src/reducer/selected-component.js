const selectedComponent = (state = null, action) => {
    switch (action.type){
        case 'SELECT_COMPONENT' : return action.payload;
        default : return state;
    }
};

export default selectedComponent