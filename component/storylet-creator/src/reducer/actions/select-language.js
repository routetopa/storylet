const selectLanguage = (data) => {
    return {
        type: 'SELECT_LANGUAGE',
        payload: data
    };
};

export default selectLanguage