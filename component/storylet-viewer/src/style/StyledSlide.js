import styled from 'styled-components'

const SlideStyle = styled.div`
  width: ${(props) => { 
            switch(props.size) {
                case 'small' : return '5vw';
                case 'medium': return '30vw';
                case 'full'  : return '40vw';
                case 'snail'  : return '700px';
                case 'cube'  : return '700px';
                default      : return '40vw';
            }}
          };
  height: ${(props) => {
                switch(props.size) {
                    case 'small' : return '5vw';
                    case 'medium': return '30vw';
                    case 'full'  : return '40vw';
                    case 'snail'  : return '700px';
                    case 'cube'  : return '700px';
                    default      : return '40vw';
                }}
            };
  position: relative;
  background: url(${(props) => props.background});
  background-size: cover;
  background-color: var(--storylet-white);
  box-shadow: ${ (props) => props.isParent ?  '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,1)' : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' };
  border-radius: 4px
`;

export default SlideStyle