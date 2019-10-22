import styled from 'styled-components'

const BodyContainerStyle = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;  
    height: calc(100vh - 43px);
    
    & > *{
    overflow: hidden;
   }
`;

export default BodyContainerStyle