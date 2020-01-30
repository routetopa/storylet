const copiedComponent = (state = null, action) => {
    switch (action.type){
        case 'COPY_COMPONENT' : return action.payload;
        default : return state;
    }
};

export default copiedComponent