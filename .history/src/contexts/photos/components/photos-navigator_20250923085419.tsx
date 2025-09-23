
interface PhotosNavigatorProps extends React.ComponentProps<"div">{
    previousPhotoId?: string;
    nextPhotoId?: string;
    loading?: boolean;
}

export default 