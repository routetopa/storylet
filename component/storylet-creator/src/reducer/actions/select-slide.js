const selectSlide = (data) => {
    return {
        type: 'SELECT_SLIDE',
        payload: data
    };
};

export default selectSlide