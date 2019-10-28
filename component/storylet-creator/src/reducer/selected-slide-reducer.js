const selectedSlide = (state = null, action) => {
    switch (action.type){
          case 'SLIDE_SELECTED' :  return action.payload;
          default               :  return state;
    }

};

export default selectedSlide
