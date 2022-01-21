import { Button, Modal} from "rsuite"
import * as Interface from "../interface"
import * as CONSTANTS from "../constants"
import * as Elements from "../elements"

const ModalComponent: React.FC<Interface.ModalProps> = ({open, handleClose, modalType, onSubmit, errors, register, handleSubmit, handlePreview, previewImg })=>{

return (<Modal open={open} onClose={handleClose} backdrop='static'>
        <Modal.Header>
            <Elements.ModalTitle>{modalType.current} card </Elements.ModalTitle>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <Elements.InputWrapper>
                <Elements.Label>title:
                </Elements.Label>
                <Elements.Input {...register(CONSTANTS.TITLE)} />
                    {errors?.title?.message && <Elements.ErrorMessage>{errors?.title?.message}</Elements.ErrorMessage>}
                </Elements.InputWrapper>
                <Elements.InputWrapper>
                    <Elements.Label>url:</Elements.Label>
                <Elements.Flex>
                    <Elements.Input {...register(CONSTANTS.URL)} />
                        <Elements.Flex>
                            <Button onClick={handlePreview} type='button' color="cyan" appearance="ghost">preview</Button>
                            {previewImg && <img src={previewImg} height='30' width='30' alt="color" />}
                        </Elements.Flex>
                </Elements.Flex>
                    {errors?.url?.message && <Elements.ErrorMessage>{errors?.url?.message}</Elements.ErrorMessage>}
                </Elements.InputWrapper>
             
            </div>
            <Elements.ModalFooter>
            {modalType.current === 'add' && <Elements.PhotoPushText>card would pushed to the end of the list</Elements.PhotoPushText>}
                <Button type="submit" appearance="primary" >
                    Save
                </Button>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
            </Elements.ModalFooter>
        </form>
    </Modal>)
}

export default ModalComponent
