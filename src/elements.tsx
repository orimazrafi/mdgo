import styled from "styled-components"
import { Loader, Panel, Modal} from "rsuite";
export const CardsFunctionality = styled.div`
    display:flex;
    gap:1rem;
    margin:2rem 0;
    justify-content:center;    
`;

export const LoaderWrapper = styled(Loader)`
    position: absolute;
    left:2rem;
`;

export const CardsWrapper = styled.section`
    display:flex;
    gap:1rem;
    flex-wrap: wrap;
`;

export const RelativeWrapper = styled.div`
    position: relative;
`;


export const CardLayout = styled(Panel)`
    width: 9rem;
    border: 1px solid;
    display:flex;
    flex-direction:column;
    height:100%;
`;

export const TextWrapper = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-box-orient: vertical;
    box-orient: vertical;
    -webkit-line-clamp: 3;
    -moz-line-clamp: 3;
    -ms-line-clamp: 3;
    line-clamp: 3;
    overflow: hidden;
    height: 4rem;
`;

export const Footer = styled.footer`
    display:flex;
    gap:.5rem;
    margin: auto auto 1rem auto;
    justify-content: center;
`;


export const ModalTitle = styled(Modal.Title)`
    margin-bottom:2rem;
    font-size: 1.2rem;
    &::first-letter{
        text-transform: uppercase;
    }
`;

export const Input = styled.input`
  font-family: 'Poppins', sans-serif;
  width: calc(100% - 10rem);
  background: #FFFFFF;
  padding:.3rem;
  font-size: 1rem;
  box-shadow: 0px 4px 8px rgba(196, 197, 247, 0.24);
  border-radius: 4px;
  border: 1px solid #d8dff7;
  &:focus {
    outline: none !important;
    border:1px solid blue;
    box-shadow: 0 0 10px #719ECE;

  }
  ::placeholder {
    text-transform: capitalize;
    font-size: 1rem;
    font-style: normal;
    line-height: 21px;
    letter-spacing: 0em;
    color: #aaa9a9;
  }
`;

export const Label = styled.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 300;
    margin-bottom: .2rem;
`;

export const ErrorMessage = styled.span`
    font-family: 'Poppins', sans-serif; 
    color:#f44336;
    font-size: 1rem;
    margin-top: .5rem;
`;

export const Flex = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 6rem;
`;

export const ModalFooter = styled(Modal.Footer)`
    display:flex;
    align-items:center;
`;

export const PhotoPushText = styled.div`
    margin-right: auto;
    font-size:1rem;
`;