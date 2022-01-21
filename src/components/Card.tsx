import { Button } from "rsuite";
import * as Interface from "../interface";
import * as Elements from "../elements"

const Card: React.FC<Interface.CardIProps> = ({ photo, modalType, handleOpen, handleDelete, resetPreview})=>{

    const handleEdit = (photo: Interface.Photoprops)=>{
        modalType.current = 'edit';
        handleOpen(photo)
        resetPreview()
    }

    return (
        <Elements.CardLayout background={photo.url} shaded bordered bodyFill>
            <img src={photo.url} height={138} style={{width:'100%'}} width={138} />
        <Elements.TextWrapper>
            {photo.title}
        </Elements.TextWrapper>
        <Elements.Footer>
            <Button onClick={() => handleEdit(photo)} appearance="ghost">edit</Button>
            <Button onClick={() => handleDelete(photo?.id)} color="red" appearance="ghost">delete</Button>
        </Elements.Footer>
    </Elements.CardLayout>)
}

export default Card
