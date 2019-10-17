import styled from 'styled-components'

const LayoutContainerStyle = styled.div`
    position: relative;
    height: 50vh;
    width: 100%;
    padding: 0 ${(props) => (100 - (props.layoutContainerSpace * 100)) / 2 + '%'};
    overflow: hidden;
    display: flex;
    flex-direction: row;
    
    //background-color: ${props => props.theme.main};
`;

export default LayoutContainerStyle