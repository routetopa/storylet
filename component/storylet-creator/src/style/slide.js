import styled from 'styled-components'

const SlideStyle = styled.div`
  width: ${(props) => props.isSettingVisible ? '80%' : '50%'};
  padding-top: ${(props) => props.isSettingVisible ? '80%' : '50%'};
  margin: 40px auto;
  position: relative;
  background: url(${(props) => props.background});
  background-size: cover;
  background-color: ${(props) => props.backgroundColor || 'var(--storylet-white)'};
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  cursor: ${(props) => props.cursor}; 
  
  cursor: ${(props) => props.isEditable ? 'auto' : 'pointer'};
  border: ${(props) => props.isEditable ? 'none' : (props.selected ? '2px solid var(--storylet-driver)' : '2px solid transparent')};
  background-origin: border-box;
  
  .pageCount {
    color: var(--storylet-white);
    position: absolute;
    
    //right: 0;
    //bottom: -28px;
    
    //bottom: 4px;
    //right: 4px;
    
    top: -10px;
    right: -10px;
    
    font-weight: 700;
    font-size: 12px;
    background: red;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background:  var(--storylet-driver);
    text-align: center;
    line-height: 20px;
  }
`;

export default SlideStyle