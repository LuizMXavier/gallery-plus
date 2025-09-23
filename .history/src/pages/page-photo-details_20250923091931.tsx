import { useParams } from "react-router";
import Text from "../components/text";
import type { Photo } from "../contexts/photos/models/photo";
import Container from "../components/container";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";
import ImageFilePreview from "../components/image-preview";
import Button from "../components/button";

export default function PagePhotoDetails() {
  const { id } = useParams();
  const isLoadingPhoto = false;
  const photo = {} as Photo;
  return (
    <Container>
      <header className="flex items-center justify-between gap-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo?.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}
        <PhotosNavigator loading={isLoadingPhoto}/>
      </header>
      <div className="grid grid-cols-[21rem] gap-24">
        <div className="space-y-3">
            {!isLoadingPhoto ? (
                <ImageFilePreview
                src={`/images/${photo?.imageId}`}
                title={photo?.title}
                imageClassName="h-[21rem]"
            />
            ): (
                <Skeleton className="h-[21rem]"/>
            )}

            {!isLoadingPhoto ?
            }
            <Button variant="destructive">Excluir</Button>
            
        </div>

      </div>
    </Container>
  );
}
