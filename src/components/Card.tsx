import { Button, Panel } from "rsuite";
import styled from "styled-components";
import * as Interface from "../interface";

const Card: React.FC<Interface.CardIProps> = ({ photo, modalType, handleOpen, handleDelete, resetPreview})=>{

    const handleEdit = (photo: Interface.Photoprops)=>{
        modalType.current = 'edit';
        handleOpen(photo)
        resetPreview()
    }

    return (
        <CardLayout background={photo.url} shaded bordered bodyFill>
            <img src={photo.url} height={138} style={{width:'100%'}} width={138} />
        <TextWrapper>
            title: {photo.title}
        </TextWrapper>
        <Footer>
            <Button onClick={() => handleEdit(photo)} appearance="ghost">edit</Button>
            <Button onClick={() => handleDelete(photo?.id)} color="red" appearance="ghost">delete</Button>
        </Footer>
    </CardLayout>)
}

export default Card

const CardLayout = styled(Panel)`
    width: 9rem;
    border: 1px solid;
    display:flex;
    flex-direction:column;
    height:100%;
`;

const TextWrapper = styled.p`
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

const Footer = styled.footer`
    display:flex;
    gap:.5rem;
    margin: auto auto 1rem auto;
    justify-content: center;
`;