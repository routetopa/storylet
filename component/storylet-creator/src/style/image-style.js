import styled from 'styled-components'

const ImageStyle = styled.div`
    position:absolute;
    top: ${(props) => props.y + 'px'};
    left: ${(props) => props.x + 'px'};
`;

export default ImageStyle