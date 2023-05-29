const viewMode = (state = [], action) => {
    switch (action.type){
        case 'SET_VIEW_MODE' : return action.payload;
        default : return state;
    }
};

export default viewMode