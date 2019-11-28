const selectComponent = (data) => {
    return {
        type: 'SELECT_COMPONENT',
        payload: data
    };
};

export default selectComponent