const selectedComponent = (state = null, action) => {
    switch (action.type){
        case 'COMPONENT_SELECTED' :  return action.payload;
        default                   :  return state;
    }

};

export default selectedComponent
