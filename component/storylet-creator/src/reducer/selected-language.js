const selectedLanguage = (state = null, action) => {
    switch (action.type){
        case 'SELECT_LANGUAGE' : return action.payload;
        default : return state;
    }
};

export default selectedLanguage