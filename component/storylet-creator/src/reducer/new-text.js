const newText = (state = [], action) => {
    switch (action.type){
        case 'ADD_TEXT' : return action.payload;
        default : return state;
    }
};

export default newText