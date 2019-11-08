import styled from 'styled-components'

const BodyContainerStyle = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;  
    height: calc(100vh - 56px);
    
    background-color: #eceff1;
    
    & > *{
    overflow: hidden;
   }
   
   overflow: hidden;
`;

export default BodyContainerStyle