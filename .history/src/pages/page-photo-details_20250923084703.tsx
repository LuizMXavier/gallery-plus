import { useParams } from "react-router"
import Text from "../components/text"
import type { Photo } from "../contexts/photos/models/photo";
import Container from "../components/container";

export default function PagePhotoDetails(){
    const {id} = useParams();
    const isLoadingPhoto = false;
    const photo = {} as Photo;
    return (
        <Container>
            <Text variant="heading-medium">Pagina detalhe da foto</Text>
            <hr/>
            <Text variant="heading-medium">ID da Foto:{id}</Text>
        </>
    )
}