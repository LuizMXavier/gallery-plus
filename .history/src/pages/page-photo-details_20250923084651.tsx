import { useParams } from "react-router"
import Text from "../components/text"
import type { Photo } from "../contexts/photos/models/photo";

export default function PagePhotoDetails(){
    const {id} = useParams();
    const isLoadingPhoto = false;
    const photo = {} as Photo;
    return (
        <>
            <Text variant="heading-medium">Pagina detalhe da foto</Text>
            <hr/>
            <Text variant="heading-medium">ID da Foto:{id}</Text>
        </>
    )
}