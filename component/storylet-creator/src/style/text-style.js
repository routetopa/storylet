import styled from 'styled-components'

const TextStyle = styled.div`
    position:absolute;
    top: ${(props) => props.y + 'px'};
    left: ${(props) => props.x + 'px'};
`;

export default TextStyle