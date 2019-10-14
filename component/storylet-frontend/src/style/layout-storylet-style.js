import styled from 'styled-components'

const StoryletStyle = styled.div`
    margin: auto 0;
    padding-top: 60px;
    border: 1px solid;
    text-align: center;
    min-width: ${(props) => props.width + 'px'};
    max-width: ${(props) => props.width + 'px'};
    overflow: hidden;
    height: 100%;
`;

export default StoryletStyle