import { Modal, Button} from "rsuite"
import styled from "styled-components";
import * as Interface from "../interface"
import * as CONSTANTS from "../constants"


const ModalComponent: React.FC<Interface.ModalProps> = ({open, handleClose, modalType, onSubmit, errors, register, handleSubmit, handlePreview, previewImg })=>{

return (<Modal open={open} onClose={handleClose} backdrop='static'>
        <Modal.Header>
            <ModalTitle>{modalType.current} card </ModalTitle>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <InputWrapper>
                <Label>title:
                </Label>
                <Input {...register(CONSTANTS.TITLE)} />
                    {errors?.title?.message && <ErrorMessage>{errors?.title?.message}</ErrorMessage>}
                </InputWrapper>
                <InputWrapper>
                    <Label>url:</Label>
                <Flex>
                    <Input {...register(CONSTANTS.URL)} />
                        <Flex>
                            <Button onClick={handlePreview} type='button' color="cyan" appearance="ghost">preview</Button>
                            {previewImg && <img src={previewImg} height='30' width='30' alt="color" />}
                        </Flex>
                </Flex>
                    {errors?.url?.message && <ErrorMessage>{errors?.url?.message}</ErrorMessage>}
                </InputWrapper>
             
            </div>
            <ModalFooter>
            {modalType.current === 'add' && <PhotoPushText>card would pushed to the end of the list</PhotoPushText>}
                <Button type="submit" appearance="primary" >
                    Save
                </Button>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
            </ModalFooter>
        </form>
    </Modal>)
}

export default ModalComponent

const ModalTitle =styled(Modal.Title)`
    margin-bottom:2rem;
    font-size: 1.2rem;
    &::first-letter{
        text-transform: uppercase;
    }
`;

const Input = styled.input`
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

const Label =styled.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 300;
    margin-bottom: .2rem;
`;

const ErrorMessage =styled.span`
    font-family: 'Poppins', sans-serif; 
    color:#f44336;
    font-size: 1rem;
    margin-top: .5rem;
`;

const Flex =styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const InputWrapper=styled.div`
    display: flex;
    flex-direction: column;
    height: 6rem;
`;

const ModalFooter =styled(Modal.Footer)`
    display:flex;
    align-items:center;
`;

const PhotoPushText =styled.div`
    margin-right: auto;
    font-size:1rem;
`;