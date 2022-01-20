export interface Iprops {
    albumId: number;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export interface ModalType {
    current: string | undefined;
};
export interface Photoprops {
    albumId: number;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export interface Photo {
    albumId: number;
    id?: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export interface CardIProps {
    photo: Photoprops;
    modalType: ModalType;
    handleOpen: (photo: Photoprops) => void;
    handleDelete: (id: string) => void;
    resetPreview: () => void;
}

export interface ModalProps {
    open: boolean;
    handleClose: () => void;
    modalType: ModalType;
    onSubmit: any;
    errors: {
        title?:{ message: string },
        url?: { message: string }
    };
    register: any;
    handleSubmit: any;
    handlePreview: () => void;
    previewImg: string;
}

export interface FormValues  {
    title: string;
    url: string;
};
