import styled from 'styled-components'

const DraggableStyle = styled.div`
    position:absolute;
    top: ${(props) => props.y + 'px'};
    left: ${(props) => props.x + 'px'};
    
    border: 1px solid red;
    width: 200px;
    height: 200px;
`;

export default DraggableStyle