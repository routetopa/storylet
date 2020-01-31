const storylet = (state = [], action) => {
    switch (action.type){
        case 'SET_STORYLET' : return action.payload;
        default : return state;
    }
};

export default storylet