import styled from 'styled-components'

const StoryletStyle = styled.div`
    margin: auto 0;
    // padding-top: 60px;
    // border: 1px solid;
    text-align: center;
    min-width: ${(props) => props.width + 'px'};
    max-width: ${(props) => props.width + 'px'};
    overflow: hidden;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    
    div.preview {
        width: 80%;
        padding-top: ${(props) => {return (80 / props.s_width * props.s_height) + '%'}};
    
        margin: auto;
        background-color:#fafafa;
        // width: ${(props) => props.s_width + 'px'};
        // height: ${(props) => props.s_height + 'px'};
        background-image: url(${(props) => props.src});
        background-size: cover;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        border-radius: 2px;
        cursor: pointer;
    }
    
    div.preview:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    
    
    div.info {
        height: 64px;
        line-height: 64px;
        font-family: "Helvetica Neue", Roboto, Arial, "Droid Sans", sans-serif;
        font-size: 16px;
        font-weight: 700;
    }
`;

export default StoryletStyle