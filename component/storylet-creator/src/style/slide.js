import styled from 'styled-components'

const SlideStyle = styled.div`
  width: ${(props) => props.isSettingVisible ? '80%' : '50%'};
  padding-top: ${(props) => props.isSettingVisible ? '80%' : '50%'};
  margin: 40px auto;
  position: relative;
  background: url(${(props) => props.background});
  background-size: cover;
  background-color: var(--storylet-white);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  cursor: ${(props) => props.cursor}; 
`;

export default SlideStyle