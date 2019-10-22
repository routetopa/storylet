import styled from 'styled-components'

const StoryletStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: ${(props) => props.width + 'px'};
  height: 100%;
    
    .preview {
        width: 80%;
        padding-top: ${(props) => {return (80 / props.s_width * props.s_height) + '%'}};
        margin: auto;
        background-image: url(${(props) => props.src});
        background-size: cover;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        border-radius: 2px;
        cursor: pointer;
    }
    
    .preview:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    
    .info {
        height: 48px;
        line-height: 48px;
        font-weight: 700;
        text-align: center;
    }
`;

export default StoryletStyle