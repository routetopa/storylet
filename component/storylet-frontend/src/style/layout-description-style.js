import styled from 'styled-components'

const DescriptionStyle = styled.div`
    display: flex;
    height 100%;
    
    div.d_left, div.d_right {
        width 50%;
        height 100%;
    }
    
    div.preview {
        // width: 80%;
        // padding-top: ${(props) => {return (80 / props.s_width * props.s_height) + '%'}};
        margin: auto;
        // background-color:#fafafa;
        // background-image: url(${(props) => props.src});
        // background-size: cover;
        
        background-color: red;
        
        width 50%;
        height 50%;
        
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        border-radius: 2px;
    }

    div.d_left {
        // background-color: red;
    }
    
    div.d_right {
        background-color: yellow;
    }
`;

export default DescriptionStyle