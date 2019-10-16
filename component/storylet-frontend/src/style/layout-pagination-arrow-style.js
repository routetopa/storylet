import styled from 'styled-components'

const PaginationArrowStyle = styled.div`
    position: absolute;
    width 100%;
    
    bottom: calc(50% - 24px);
    left: 0;
    
    button {
        // margin-right: 10px;
        // padding: 5px
        border-radius: 50%;
        width 48px;
        height 48px;
        background-color:#fff;
        border: 1px solid #fafafa;
        cursor:pointer;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        color:#212121;
        // font-size 18px !important;
    }
    
    button:hover {
        color: #00BCD4;
        border-color: #00BCD4;
    }
    
    button.prev {
        margin-left 12px;
    }
    
    button.next {
        float: right;
        margin-right 12px;
    }
`;

export default PaginationArrowStyle