import { useEffect, useState, useRef}from "react";
import { useQuery, useQueryClient } from "react-query";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as api from "../api"
import { useForm } from "react-hook-form";
import db from "../db.json";
import Card from "./Card";
import ModalComponent from "./Modal";
import styled from "styled-components"
import { Button, Loader } from "rsuite";
import * as Interface from "../interface"
import * as hooks from "../hooks"
import * as CONSTANTS from "../constants"

const Cards =()=>{
    const [photo, setPhoto] = useState<Interface.Photoprops>();
    const modalType = useRef<string | undefined>()
    const [previewImg, setPreviewImg] = useState('')
    const schema = yup.object().shape({
        title: yup.string().required().notOneOf(db?.photos?.map((item: any) => {
        if(photo?.id === item?.id) return ""
        return item?.title}), "title should be unique"),
        url: yup.string().required().notOneOf(db?.photos?.map((item: any) => {
            if (photo?.id === item?.id) return ""    
            return item?.url
        }), "url should be unique"),
    });
    const queryClient = useQueryClient()
    const [open, setOpen] = useState(false);

    const handleOpen = (photo: any) => {
        setPhoto(() => photo)
        setOpen(true)
    }

    const handleClose = () => setOpen(false);
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [maxPage, setmaxPage] = useState<number>()

    useEffect(()=>{
        setmaxPage(Math.ceil(db?.photos?.length / CONSTANTS.NUMBER_OF_PHOTOS_PER_PAGE))
    },[])

    const { isLoading, data, isFetching } = useQuery([CONSTANTS.PHOTOS, pageNumber], () => api.get(pageNumber), {
        keepPreviousData: true
    })
    const { mutate: updatePhto } = hooks.useUpdatePhoto(queryClient, pageNumber)
    const { mutate: deletePhoto } = hooks.useRemovePhoto(queryClient, pageNumber)
    const { mutate: addPhoto } = hooks.useAddPhoto(queryClient, pageNumber)
 
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
    }: any = useForm<Interface.FormValues>({
        resolver: yupResolver(schema),
    });
    useEffect(() => {
        reset({
            ...getValues(),
            id: photo?.id,
            title: photo?.title,
            url: photo?.url,
        });
        // eslint-disable-next-line
    }, [photo]);

    const onSubmit =(form:any)=>{
        if(modalType.current === CONSTANTS.ADD){
            addPhoto(form)
        } else{
            updatePhto(form)
        }
        handleClose()
    }

    const handlePreview = () => {
        const url = getValues('url');
        setPreviewImg(pre => url)
    }

    const resetPreview=()=>{
        setPreviewImg('')
    }

    const handleOpenModal =()=>{
            modalType.current = CONSTANTS.ADD;
            handleOpen({
                title: "", url: '', albumId: 1, thumbnailUrl: ""
            })
            resetPreview()
    }
    
    const handleIncrement =()=>
        setPageNumber(pre => pre - 1)
    const handleDecrement =()=>
        setPageNumber(pre => pre + 1)


    return (
    <div>
        <CardsFunctionality>
            <Button onClick={handleIncrement} disabled={pageNumber === 1} >Prev page</Button>
            <Button onClick={handleDecrement} disabled={pageNumber === maxPage}>Next page</Button>
            <Button onClick={handleOpenModal} appearance="primary">add card</Button>
            {<RelativeWrapper>{(isFetching || isLoading) &&<LoaderWrapper size="md" content="Loading..." />}</RelativeWrapper>}
        </CardsFunctionality>
        <CardsWrapper>
            {data?.data?.map((photo: Interface.Photoprops) => 
                <Card 
                    key={photo?.id}
                    photo={photo}
                    modalType={modalType} 
                    handleOpen={handleOpen}
                    handleDelete={deletePhoto}
                    resetPreview={resetPreview}
                    />
            )}
        </CardsWrapper>
        <ModalComponent
            open={open}
            handleClose={handleClose}
            modalType={modalType}
            onSubmit={onSubmit}
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            handlePreview={handlePreview}
            previewImg={previewImg}
            />
        </div>)

}

export default Cards

const CardsFunctionality =styled.div`
    display:flex;
    gap:1rem;
    margin:2rem 0;
    justify-content:center;    
`;

const LoaderWrapper = styled(Loader)`
    position: absolute;
    left:2rem;
`;

const CardsWrapper =styled.section`
    display:flex;
    gap:1rem;
    flex-wrap: wrap;
`;

const RelativeWrapper = styled.div`
    position: relative;
`;